#!/bin/bash

# LLM Learning CLI - Easy interface for generating and creating learning issues

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

usage() {
    cat << EOF
${BLUE}LLM Learning System${NC}

Generate daily learning topics from recent arXiv papers on LLMs, agents, and prompt engineering.

${GREEN}Usage:${NC}
    $0 [command] [options]

${GREEN}Commands:${NC}
    generate              Generate a new topic from arXiv
    create               Generate topic and create GitHub issue
    test                 Test the topic generator
    help                 Show this help message

${GREEN}Examples:${NC}
    $0 generate          # Generate and display a topic
    $0 create            # Generate topic and create GitHub issue
    $0 test              # Test arXiv connection and script

${GREEN}Requirements:${NC}
    - Node.js v18+
    - npm package: xml2js
    - GitHub CLI (gh) for creating issues

${GREEN}Setup:${NC}
    cd $REPO_ROOT
    npm install xml2js

EOF
}

check_dependencies() {
    local missing=0

    if ! command -v node &> /dev/null; then
        echo -e "${RED}Error: Node.js not found${NC}"
        missing=1
    fi

    if ! node -e "require('xml2js')" &> /dev/null; then
        echo -e "${YELLOW}Warning: xml2js not installed. Run: npm install xml2js${NC}"
        missing=1
    fi

    return $missing
}

generate_topic() {
    echo -e "${BLUE}Fetching recent papers from arXiv...${NC}\n"

    if ! check_dependencies; then
        exit 1
    fi

    cd "$REPO_ROOT"
    node scripts/generate-llm-learning-topic.js
}

create_issue() {
    echo -e "${BLUE}Generating topic and creating GitHub issue...${NC}\n"

    if ! command -v gh &> /dev/null; then
        echo -e "${RED}Error: GitHub CLI (gh) not found${NC}"
        echo "Install from: https://cli.github.com/"
        exit 1
    fi

    if ! check_dependencies; then
        exit 1
    fi

    cd "$REPO_ROOT"

    # Generate topic
    echo -e "${BLUE}Fetching paper from arXiv...${NC}"
    local topic_json=$(node scripts/generate-llm-learning-topic.js 2>/dev/null)

    # Extract fields
    local title=$(echo "$topic_json" | jq -r '.PAPER_TITLE')
    local bucket=$(echo "$topic_json" | jq -r '.BUCKET')
    local focus=$(echo "$topic_json" | jq -r '.FOCUS')

    echo -e "\n${GREEN}Topic Generated:${NC}"
    echo -e "  Paper: $title"
    echo -e "  Bucket: $bucket"
    echo -e "  Focus: $focus"
    echo ""

    # Read template
    local template=$(cat .github/ISSUE_TEMPLATES/daily-learning-llm.md)

    # Replace variables
    template="${template//\{\{ env.TOPIC \}\}/$(echo "$topic_json" | jq -r '.TOPIC')}"
    template="${template//\{\{ env.PAPER_TITLE \}\}/$(echo "$topic_json" | jq -r '.PAPER_TITLE')}"
    template="${template//\{\{ env.PAPER_URL \}\}/$(echo "$topic_json" | jq -r '.PAPER_URL')}"
    template="${template//\{\{ env.PAPER_DATE \}\}/$(echo "$topic_json" | jq -r '.PAPER_DATE')}"
    template="${template//\{\{ env.BUCKET \}\}/$(echo "$topic_json" | jq -r '.BUCKET')}"
    template="${template//\{\{ env.FOCUS \}\}/$(echo "$topic_json" | jq -r '.FOCUS')}"
    template="${template//\{\{ env.CONCEPT \}\}/$(echo "$topic_json" | jq -r '.CONCEPT')}"
    template="${template//\{\{ env.RESEARCH_QUESTION \}\}/$(echo "$topic_json" | jq -r '.RESEARCH_QUESTION')}"
    template="${template//\{\{ env.SYSTEM_TYPE \}\}/$(echo "$topic_json" | jq -r '.SYSTEM_TYPE')}"
    template="${template//\{\{ env.CONFIDENCE \}\}/$(echo "$topic_json" | jq -r '.CONFIDENCE')}"
    template="${template//\{\{ env.DATE \}\}/$(echo "$topic_json" | jq -r '.DATE')}"

    # Create issue
    echo -e "${BLUE}Creating GitHub issue...${NC}"
    local issue_url=$(echo "$template" | gh issue create \
        --title "Active Recall Session: $bucket — $focus" \
        --body-file - \
        --label "daily-learning,llm,agents" \
        --web)

    echo -e "\n${GREEN}✓ Issue created!${NC}"
    echo -e "  URL: $issue_url"
}

test_script() {
    echo -e "${BLUE}Testing LLM Learning System${NC}\n"

    echo -e "${YELLOW}1. Checking dependencies...${NC}"
    if check_dependencies; then
        echo -e "  ${GREEN}✓${NC} All dependencies found"
    else
        echo -e "  ${RED}✗${NC} Missing dependencies"
        exit 1
    fi

    echo -e "\n${YELLOW}2. Testing arXiv API connection...${NC}"
    if curl -s "http://export.arxiv.org/api/query?search_query=cat:cs.CL&max_results=1" > /dev/null; then
        echo -e "  ${GREEN}✓${NC} arXiv API accessible"
    else
        echo -e "  ${RED}✗${NC} Cannot reach arXiv API"
        exit 1
    fi

    echo -e "\n${YELLOW}3. Testing topic generation...${NC}"
    cd "$REPO_ROOT"
    if node scripts/generate-llm-learning-topic.js > /tmp/llm-test.json 2>&1; then
        local paper_title=$(jq -r '.PAPER_TITLE' /tmp/llm-test.json)
        echo -e "  ${GREEN}✓${NC} Generated topic: $paper_title"
        rm /tmp/llm-test.json
    else
        echo -e "  ${RED}✗${NC} Topic generation failed"
        cat /tmp/llm-test.json
        exit 1
    fi

    echo -e "\n${GREEN}✓ All tests passed!${NC}"
}

# Main
case "${1:-help}" in
    generate)
        generate_topic
        ;;
    create)
        create_issue
        ;;
    test)
        test_script
        ;;
    help|--help|-h)
        usage
        ;;
    *)
        echo -e "${RED}Unknown command: $1${NC}\n"
        usage
        exit 1
        ;;
esac
