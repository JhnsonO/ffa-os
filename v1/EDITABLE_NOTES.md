# V1 editing model

This version is being upgraded to support editing directly in the browser.

## Approach
- Load starter data from JSON
- Save edits into browser localStorage
- Allow adding tasks/items from the UI
- Allow updating owner, status, and timeframe
- Keep hosting simple on GitHub Pages

## Limitation
This gives easy editing on the current device/browser, but it does not sync across devices.

## Next possible upgrade
For cross-device sync, move the data layer to a lightweight backend such as Supabase.
