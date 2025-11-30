#!/usr/bin/env python3
"""
Interview Orchestrator Script

This script orchestrates AI-assisted technical interviews by running the appropriate
agent prompts through an LLM runner (via CLAUDE_RUNNER env var or common CLIs).

Usage:
    python scripts/start_interview.py [mode] [options]

Modes:
    coding      Coding interview (default)
    systems     Systems design interview
    behavioral  Behavioral interview
    full        Run all interview types sequentially (coding, systems, behavioral)

Options:
    --candidate NAME    Candidate name for transcript files
    --auto-eval         Enable auto-evaluation (disabled by default)
"""

import argparse
import os
import subprocess
import sys
from datetime import datetime
from pathlib import Path


VALID_MODES = ["coding", "systems", "behavioral", "full"]
DEFAULT_MODE = "coding"

# Map modes to agent prompt files
AGENT_PROMPTS = {
    "coding": ".claude/agents/coding-interview.md",
    "systems": ".claude/agents/systems-interview.md",
    "behavioral": ".claude/agents/behavioral-interview.md",
}


def get_repo_root():
    """Get the repository root directory."""
    script_dir = Path(__file__).resolve().parent
    return script_dir.parent


def find_runner():
    """
    Find an LLM runner to execute prompts.
    
    Priority:
    1. CLAUDE_RUNNER environment variable
    2. claude-code CLI
    3. claude CLI
    
    Returns:
        tuple: (runner_path, runner_type) or (None, None) if not found
    """
    # Check CLAUDE_RUNNER env var first
    env_runner = os.environ.get("CLAUDE_RUNNER")
    if env_runner:
        if os.path.isfile(env_runner) or subprocess.run(
            ["which", env_runner], capture_output=True
        ).returncode == 0:
            return env_runner, "env"
    
    # Try common CLI tools
    for cli in ["claude-code", "claude"]:
        result = subprocess.run(["which", cli], capture_output=True, text=True)
        if result.returncode == 0:
            return cli, "cli"
    
    return None, None


def get_timestamp():
    """Get current timestamp in YYYY-MM-DD format."""
    return datetime.now().strftime("%Y-%m-%d")


def get_transcript_path(repo_root, candidate, interview_type):
    """Generate transcript file path."""
    timestamp = get_timestamp()
    filename = f"transcript-{timestamp}-{candidate}-{interview_type}.txt"
    return repo_root / "interviews" / filename


def get_rubric_path(repo_root, candidate, interview_type):
    """Generate rubric file path."""
    timestamp = get_timestamp()
    filename = f"interview-rubric-{timestamp}-{candidate}-{interview_type}.md"
    return repo_root / "interviews" / filename


def read_prompt_file(repo_root, mode):
    """Read the agent prompt file for the given mode."""
    prompt_path = repo_root / AGENT_PROMPTS[mode]
    if not prompt_path.exists():
        print(f"Warning: Agent prompt file not found: {prompt_path}", file=sys.stderr)
        return None
    return prompt_path.read_text()


def run_interview(runner, runner_type, prompt_content, transcript_path):
    """
    Run an interview session using the LLM runner.
    
    Args:
        runner: Path to the runner executable
        runner_type: Type of runner (env or cli)
        prompt_content: The prompt to send to the LLM
        transcript_path: Path to save the transcript
    
    Returns:
        str: The transcript content
    """
    # Ensure interviews directory exists
    transcript_path.parent.mkdir(parents=True, exist_ok=True)
    
    try:
        # Run the LLM with the prompt
        result = subprocess.run(
            [runner, "--prompt", prompt_content],
            capture_output=True,
            text=True,
            timeout=3600  # 1 hour timeout
        )
        
        transcript = result.stdout
        
        # Save transcript
        transcript_path.write_text(transcript)
        print(f"Transcript saved to: {transcript_path}")
        
        return transcript
    except subprocess.TimeoutExpired:
        print("Interview session timed out after 1 hour.", file=sys.stderr)
        return None
    except Exception as e:
        print(f"Error running interview: {e}", file=sys.stderr)
        return None


def simulate_run(prompt_content, mode, transcript_path):
    """
    Return the prompt contents with a simulated-run note when no runner is found.
    
    Args:
        prompt_content: The agent prompt content
        mode: The interview mode
        transcript_path: Path where transcript would be saved
    
    Returns:
        str: Simulated run output
    """
    simulated_note = f"""
================================================================================
SIMULATED RUN - No LLM runner found
================================================================================

Interview Mode: {mode}
Transcript would be saved to: {transcript_path}

To run this interview with an actual LLM, either:
1. Set the CLAUDE_RUNNER environment variable to your LLM runner path
2. Install 'claude-code' or 'claude' CLI tools

Agent Prompt Content:
================================================================================

{prompt_content}

================================================================================
END OF SIMULATED RUN
================================================================================
"""
    return simulated_note


def run_evaluation(runner, transcript_path, rubric_path):
    """
    Run auto-evaluation on a transcript to generate a rubric.
    
    Args:
        runner: Path to the runner executable
        transcript_path: Path to the transcript file
        rubric_path: Path to save the rubric
    
    Returns:
        bool: True if evaluation was successful
    """
    repo_root = get_repo_root()
    eval_prompt_path = repo_root / ".claude/commands/evaluate-interview.md"
    
    if not eval_prompt_path.exists():
        print(f"Warning: Evaluation prompt not found: {eval_prompt_path}", file=sys.stderr)
        return False
    
    if not transcript_path.exists():
        print(f"Warning: Transcript not found: {transcript_path}", file=sys.stderr)
        return False
    
    eval_prompt = eval_prompt_path.read_text()
    transcript = transcript_path.read_text()
    
    full_prompt = f"{eval_prompt}\n\nTranscript:\n{transcript}"
    
    try:
        result = subprocess.run(
            [runner, "--prompt", full_prompt],
            capture_output=True,
            text=True,
            timeout=600  # 10 minute timeout for evaluation
        )
        
        rubric_content = result.stdout
        rubric_path.write_text(rubric_content)
        print(f"Rubric saved to: {rubric_path}")
        return True
    except Exception as e:
        print(f"Error running evaluation: {e}", file=sys.stderr)
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Interview Orchestrator - Run AI-assisted technical interviews",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__
    )
    
    parser.add_argument(
        "mode",
        nargs="?",
        default=DEFAULT_MODE,
        choices=VALID_MODES,
        help=f"Interview mode (default: {DEFAULT_MODE})"
    )
    
    parser.add_argument(
        "--candidate",
        default="candidate",
        help="Candidate name for transcript files (default: candidate)"
    )
    
    parser.add_argument(
        "--auto-eval",
        action="store_true",
        default=False,
        help="Enable auto-evaluation after interview (disabled by default)"
    )
    
    args = parser.parse_args()
    
    repo_root = get_repo_root()
    
    # Determine which modes to run
    if args.mode == "full":
        modes_to_run = ["coding", "systems", "behavioral"]
    else:
        modes_to_run = [args.mode]
    
    # Find an LLM runner
    runner, runner_type = find_runner()
    
    if not runner:
        print("No LLM runner found. Running in simulation mode.", file=sys.stderr)
        print("To use an actual LLM runner, either:", file=sys.stderr)
        print("  1. Set CLAUDE_RUNNER environment variable", file=sys.stderr)
        print("  2. Install 'claude-code' or 'claude' CLI", file=sys.stderr)
        print()
    
    # Run each interview mode
    for mode in modes_to_run:
        print(f"\n{'='*60}")
        print(f"Starting {mode.upper()} Interview")
        print(f"{'='*60}\n")
        
        prompt_content = read_prompt_file(repo_root, mode)
        if not prompt_content:
            print(f"Skipping {mode} interview - prompt file not found.")
            continue
        
        transcript_path = get_transcript_path(repo_root, args.candidate, mode)
        rubric_path = get_rubric_path(repo_root, args.candidate, mode)
        
        if runner:
            transcript = run_interview(runner, runner_type, prompt_content, transcript_path)
            
            # Run auto-evaluation if enabled and transcript was generated
            if args.auto_eval and transcript:
                print(f"\nRunning auto-evaluation for {mode} interview...")
                run_evaluation(runner, transcript_path, rubric_path)
        else:
            # Simulation mode
            output = simulate_run(prompt_content, mode, transcript_path)
            print(output)
    
    print(f"\n{'='*60}")
    print("Interview session complete!")
    print(f"{'='*60}")
    
    return 0


if __name__ == "__main__":
    sys.exit(main())
