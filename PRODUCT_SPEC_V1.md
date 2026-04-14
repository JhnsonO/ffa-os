# FFA OS – Product Spec V1

## Core purpose
FFA OS is not primarily a KPI dashboard. It is an ADHD-friendly operational tool for Johnson to hold the moving parts of FFA in one place, reduce mental load, and make it obvious what needs attention now, what is blocked, what is delegated, and what can wait.

## Product position
This sits between:
- a task manager
- a strategy doc
- an operations map
- a lightweight dashboard

The main job is not just to show information. The main job is to help Johnson decide what to do next.

## Design principle
Keep the original mental model and business chunking:
- Action plan
- Operations
- Revenue
- Growth
- Pain points
- OEV project

Do not replace this with a generic task app. Instead, layer prioritisation and action support on top.

## Main user problems
- Too many moving parts across FFA, content, merch, growth, league admin, and OEV
- Important actions can get buried inside large strategy notes
- Delegated work is hard to hold mentally
- Bottlenecks are visible in principle but not surfaced enough day to day
- Static overview does not help enough with “what do I do now?”

## V1 product goals
1. Preserve the original tabbed overview structure
2. Add a top-level focus layer for urgent and current work
3. Standardise each item with owner, status, and timeframe
4. Make bottlenecks and waiting items easy to see
5. Keep the app lightweight and accessible as a webpage

## V1 information architecture

### Top-level focus strip
A slim section above the tabs showing:
- Focus now
- This week
- Waiting on others
- Delegated
- Bottlenecks

This should help Johnson orient quickly without digging through every tab.

### Tabs
Keep these tabs from the original concept:
- Action plan
- Operations
- Revenue
- Growth
- Pain points
- OEV project

### Optional secondary area
- At a glance

This remains useful context, but it should not dominate the app.

## Item model
Every action-oriented item should support:
- title
- short description
- owner
- status
- timeframe
- optional prompt/action button
- optional linked area

## Standard statuses
Use a consistent status set:
- next
- in_progress
- waiting
- delegated
- done
- someday

Avoid mixing many labels like research, future, waiting on #1, and to do unless they map back to one of the standard states.

## Standard owners
Use a clear owner model:
- Johnson
- PA
- Kris
- Helper
- External
- Unassigned

This is important because seeing “not mine” reduces mental load.

## Standard timeframes
Use broad planning windows instead of overly rigid dates for most of V1:
- now
- this_week
- next_30_days
- next_90_days
- later

## V1 homepage behaviour
The homepage should answer these questions fast:
- What needs my attention now?
- What is the main bottleneck?
- What is waiting on someone else?
- What is delegated?
- What can wait?

## V1 UI direction
The app should feel like:
- clear
- fast to scan
- low clutter
- mobile-friendly
- more action-first than analytics-first

Recommended hierarchy:
1. Focus strip
2. Tabs
3. Within-tab cards/items
4. Supporting overview metrics

## What to demote
These are still useful, but secondary:
- sessions per week
- member count
- revenue cards
- high-level metrics in general

They can stay as supporting context, but the app should centre actions and bottlenecks.

## Example interpretation of the original content

### Focus now
- Set up Google Business Profile
- Continue upload automation
- Build sponsor pitch deck

### Waiting on others
- Kris handling clips and social posting
- PA handling signup list and payment ticks

### Bottlenecks
- Post-session footage uploads
- League table updates
- Google discoverability

## V1 data approach
Use static JSON at first so the app is easy to host anywhere.
This allows:
- GitHub Pages hosting
- easy manual editing
- no backend required initially

Later, live data or editing flows can be added.

## V1 non-goals
Do not prioritise these in V1:
- full Acuity integration
- live revenue dashboards
- authentication
- heavy analytics
- complex automations

Those can come later.

## Suggested JSON shape for V1
```json
{
  "focus": {
    "now": [],
    "this_week": [],
    "waiting": [],
    "delegated": [],
    "bottlenecks": []
  },
  "areas": {
    "action_plan": [],
    "operations": [],
    "revenue": [],
    "growth": [],
    "pain_points": [],
    "oev": []
  },
  "overview": {
    "sessions_per_week": 6,
    "capacity": "18-20",
    "members": "10-20",
    "league_players": 32
  }
}
```

## Implementation direction for next build
1. Replace current KPI-led homepage with focus strip + tabs
2. Convert original content into structured JSON
3. Render tabs dynamically from JSON
4. Add owner, status, and timeframe chips consistently
5. Keep deployment simple with GitHub Pages

## Success criteria for V1
V1 is successful if Johnson can open the page and quickly understand:
- what needs doing now
- what is blocked
- what is delegated
- what belongs to each area of FFA

without mentally reconstructing the whole business each time.
