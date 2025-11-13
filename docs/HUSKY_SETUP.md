# Husky Pre-commit Hooks

This repository uses Husky for Git hooks to ensure code quality before commits.

## Hooks Configured

### Pre-commit Hook

- Runs `lint-staged` which applies ESLint and Prettier to staged files
- Only processes files that are being committed
- Auto-fixes issues where possible

### Commit Message Hook

- Logs the commit message for reference
- Can be extended for commit message validation

## How It Works

1. **Automatic Installation**: When someone clones the repo and runs `npm install`, the `prepare` script automatically runs `husky install`
2. **Staged Files Only**: Only files that are staged for commit are checked and formatted
3. **Fast Execution**: Only changed files are processed, making commits quick
4. **Auto-fix**: Common formatting and linting issues are automatically fixed

## Configuration

- **lint-staged config**: Defined in `package.json`
- **ESLint rules**: Defined in `.eslintrc.json`
- **Prettier rules**: Defined in `.prettierrc.yml`
- **Hook scripts**: Located in `.husky/` directory

## Manual Override

If you need to bypass hooks for an emergency commit:

```bash
git commit --no-verify -m "Emergency fix"
```

## Testing Hooks

To test the hooks without making a commit:

```bash
npx lint-staged  # Test pre-commit checks
```
