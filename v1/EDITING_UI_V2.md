# Editing UI V2

## Goal
Improve the current prompt-based editing so the app feels easier and more usable day to day.

## Problems with current editing
- Browser prompts feel clunky
- Only status can be changed easily
- Owner and timeframe are not editable in a friendly way
- No delete action
- Adding tasks is too barebones

## Better V2 interaction
When a user taps a task:
- open a small inline editor or modal
- allow editing:
  - title
  - owner
  - status
  - timeframe
  - description (optional)
- allow delete
- allow save/cancel

## Better add flow
When a user taps add:
- open a simple mini form
- default owner to Johnson
- default status to next
- optional timeframe field

## Minimum worthwhile upgrade
For a quick practical step, replace browser prompts with:
- one edit panel under each selected task
- buttons for save and delete

## Data model fields
Each task item should support:
- title
- owner
- status
- timeframe
- description

## Suggested owners
- Johnson
- PA
- Kris
- Helper
- External
- Unassigned

## Suggested statuses
- next
- in_progress
- waiting
- delegated
- done
- someday

## Suggested timeframes
- now
- this_week
- next_30_days
- next_90_days
- later

## Priority
This editing improvement matters more than advanced analytics and more than sync right now.
