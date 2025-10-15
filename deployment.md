# Deployment Guide

## Publishing to Marketplace

1. **Update version and changelog:**

   - Bump `version` in `package.json`
   - Update `CHANGELOG.md` with new changes

2. **Package the extension:**

   ```bash
   npm run package2  # Creates .vsix file
   ```

3. **Publish to marketplace:**
   ```bash
   vsce publish
   # Or publish with version bump:
   vsce publish patch  # 0.0.5 -> 0.0.6
   vsce publish minor  # 0.0.5 -> 0.1.0
   vsce publish major  # 0.0.5 -> 1.0.0
   ```

**Prerequisites:**

- You need a Personal Access Token (PAT) from [Azure DevOps](https://dev.azure.com/)
- Login with: `vsce login thmsn`
- The `vsce` package is already included in devDependencies
- `vsce verify-pat thmsn` to validate access
