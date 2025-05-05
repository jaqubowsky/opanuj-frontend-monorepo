#!/bin/bash

# Corrected variable names (underscores instead of spaces)
NPM_RC_FILE=".npmrc"
TEMP_NPM_RC_FILE=".npmrc.tmp"

# Ensure temp file is cleaned up on exit or error
# Corrected variable name in trap command
trap 'rm -f "$TEMP_NPM_RC_FILE"' EXIT SIGINT SIGTERM

# Corrected variable name in check
if [[ ! -f "$NPM_RC_FILE" ]]; then
  # Corrected variable name in error message
  echo "$NPM_RC_FILE file not found!"
  exit 1
fi

echo "Fetching new token..."
new_token=$(aws codeartifact get-authorization-token --domain przeprogramowani-ofe --domain-owner 525499181960 --query authorizationToken --output text)

if [[ -z "$new_token" ]]; then
  echo "Failed to retrieve the new token."
  exit 1
fi
echo "Token fetched successfully."

# Define the registry-specific prefix for the auth token line
# Extract this from your .npmrc file
REGISTRY_PREFIX="//przeprogramowani-ofe-525499181960.d.codeartifact.eu-central-1.amazonaws.com/npm/przeprogramowani-ofe/"

echo "Updating $NPM_RC_FILE..."
# Use grep -v to filter out the old commented token line
# Pattern matches start of line '//', any chars '.*', and the specific end ':_authToken='
grep -v "^${REGISTRY_PREFIX}:_authToken=" "$NPM_RC_FILE" > "$TEMP_NPM_RC_FILE"

# Check if grep succeeded before proceeding
if [[ $? -ne 0 ]]; then
    echo "Error processing $NPM_RC_FILE with grep."
    exit 1
fi

# Append the new token line in the correct format (commented with prefix)
echo "${REGISTRY_PREFIX}:_authToken=${new_token}" >> "$TEMP_NPM_RC_FILE"

# Replace the original file with the updated temp file
mv "$TEMP_NPM_RC_FILE" "$NPM_RC_FILE"

if [[ $? -eq 0 ]]; then
    # Corrected variable name in success message
    echo "$NPM_RC_FILE updated successfully."
else
    # Corrected variable name in error message
    echo "Error replacing $NPM_RC_FILE with the updated version."
    # temp file should have been removed by trap, original might be intact or missing
    exit 1
fi

# The trap will automatically remove the temp file now
