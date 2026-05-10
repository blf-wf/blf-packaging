#!/bin/bash
# Use osascript to open browser and extract JWT via JavaScript
# This is macOS-specific, using Safari/Chrome

echo "Opening browser to get JWT from localStorage..."
echo "After login, run this in browser console:"
echo "  copy(localStorage.getItem('jwt_token') || localStorage.getItem('token') || localStorage.getItem('jwt'))"
echo ""
echo "Or navigate to: https://liteweb.blacklake.cn and login manually."
echo "Then check Application > Local Storage for the JWT token."
echo ""
echo "Once you have the JWT, run:"
echo "  curl -s -b <(echo 'acw_tc=...') -H 'X-AUTH: <JWT>' -H 'X-CLIENT: lite-web' ..."
