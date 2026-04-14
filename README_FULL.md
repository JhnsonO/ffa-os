# FFA OS

Internal operating system and dashboard for Footy For All (FFA).

## What this is
FFA OS is a lightweight browser-based dashboard starter for tracking the FFA business. It is currently a static frontend app powered by a local JSON file, designed so it can later connect to real data sources like Acuity, Google Sheets, and YouTube upload status.

## Current features
- Dashboard homepage with FFA KPIs
- Weekly sessions overview
- Simple alerts panel
- Quick action buttons for future automations
- Mock data layer so the app works immediately

## Project structure

```text
.
├── index.html
├── styles.css
├── app.js
├── data/
│   └── mock.json
└── README.md
```

## Files explained
- `index.html` - the main dashboard page
- `styles.css` - styles for layout and UI
- `app.js` - loads data, updates KPI cards, renders alerts and session schedule
- `data/mock.json` - sample structured data powering the dashboard

## How to run locally
Because the app fetches `data/mock.json`, it should be run through a local server rather than opening the HTML file directly.

### Option 1: Python
If Python is installed, open a terminal in the project folder and run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2: VS Code Live Server
If you use VS Code:
1. Install the Live Server extension
2. Open the repo folder in VS Code
3. Right click `index.html`
4. Click `Open with Live Server`

## How to use it
- Open the dashboard in your browser
- Review the KPI cards at the top
- Check the alerts section for warnings
- Review the session schedule
- Use the quick action buttons as placeholders for future automations

## Editing the data
You can change the dashboard values by editing `data/mock.json`.

Example:

```json
{
  "sessions": 6,
  "players": 72,
  "revenue": 385,
  "fillRate": 75,
  "schedule": [
    { "day": "Mon", "venue": "St Margaret's", "price": 0 },
    { "day": "Tue", "venue": "St Margaret's", "price": 4.99 }
  ]
}
```

## Next planned upgrades
- Connect Acuity for live booking data
- Connect Google Sheets for league and admin data
- Add real automation actions
- Add a backend or serverless proxy for protected APIs
- Add deployment setup

## Important note for Acuity
Do not place Acuity API credentials directly into frontend JavaScript. Use a backend, serverless function, or another secure proxy layer.

## Suggested next steps
1. Improve README and repo polish
2. Add better mock data coverage for all FFA sessions
3. Build Acuity integration through a secure proxy
4. Add deployment to GitHub Pages or Vercel
