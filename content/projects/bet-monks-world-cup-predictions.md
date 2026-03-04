---
title: Bet.Monks World Cup Predictions
tagline: Full-stack internal prediction platform for Media.Monks employees during the FIFA Women's World Cup 2023
tags: ["Node.js", "NestJS", "TypeScript", "MongoDB", "Vue.js", "Quasar Framework", "OAuth 2.0 (Google)", "AWS S3", "Simple Queue Service (SQS)", "Swagger"]
featured: false
---

<div class="mb-8 flex items-center gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50">
  <img
    src="/images/logos/mm.svg"
    alt="MM"
    class="bet-monks-mm-logo h-6 w-auto object-contain"
  />

  <div class="flex flex-col leading-tight">
    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
      Client
    </span>
    <span class="text-sm font-semibold text-slate-900 dark:text-slate-100">
      Media.Monks
    </span>
  </div>
</div>

::stack-chips{:items='["Node.js", "NestJS", "TypeScript", "MongoDB", "Vue.js", "Quasar Framework", "OAuth 2.0 (Google)", "AWS S3", "Simple Queue Service (SQS)", "Swagger"]'}
::

::media-carousel{:items='[{"type": "image", "src": "/images/projects/betmonks/loginpage.png", "caption": "Google OAuth login screen restricting access to authorized Media.Monks employee accounts."}, {"type": "image", "src": "/images/projects/betmonks/fmybets.png", "caption": "My Bets dashboard showing upcoming matches, submitted predictions, points, and personal ranking metrics."}, {"type": "image", "src": "/images/projects/betmonks/smybets.png", "caption": "Detailed My Bets view with match-by-match prediction status, results, and scoring feedback."}, {"type": "image", "src": "/images/projects/betmonks/results.png", "caption": "Tournament results page displaying match outcomes and stage progression across the competition."}, {"type": "image", "src": "/images/projects/betmonks/ostandings.png", "caption": "Overall standings leaderboard with participant rankings, accumulated points, and tie-break ordering."}, {"type": "image", "src": "/images/projects/betmonks/rules.png", "caption": "Rules page explaining the scoring system used to evaluate predictions fairly and consistently."}, {"type": "image", "src": "/images/projects/betmonks/srules.png", "caption": "Scoring rules detail view highlighting priority-based point assignment for each prediction outcome."}]'}
::

## Overview

Bet.Monks was an internal prediction platform built for Media.Monks during the FIFA Women's World Cup 2023. Employees could submit score predictions before kickoff, earn points based on scoring rules, and compete in a live leaderboard throughout the tournament.

I owned the application layer end to end, building both the backend and frontend that powered authentication, prediction flows, scoring, rankings, and tournament views.

::callout{type="info" title="Project Scope"}
This case study focuses on the application development work I delivered: backend APIs, frontend experience, data modeling, scoring logic, ranking updates, and asynchronous result processing.
::

---

## My Contribution

::contribution{role="Full-Stack Engineer"}

- Designed and implemented the backend API in `NestJS` (`TypeScript`)
- Built the frontend application in `Vue.js` + `Quasar`
- Implemented Google OAuth 2.0 login restricted to authorized company accounts
- Designed MongoDB models for matches, predictions, users, standings, and tournament data
- Built the scoring and ranking engine with deterministic rule evaluation
- Implemented asynchronous processing for match result updates and leaderboard recalculation
- Documented backend endpoints with Swagger for maintainability and team collaboration

::

---

## Problem

Media.Monks needed an internal-only platform that could keep employees engaged throughout the tournament while handling a core product challenge: predictions had to be easy to submit before kickoff, but scoring and ranking also needed to remain consistent, fair, and automatically updated as official match results came in.

---

## Solution

I built Bet.Monks as a full-stack web application with a modular backend and a responsive frontend experience tailored to tournament participation. The system supported the full prediction lifecycle:

- Secure employee authentication via Google OAuth
- Pre-kickoff score submissions
- Match result display and point breakdowns
- Automatic ranking recalculation after final results
- Tournament progress tracking across group and knockout stages

To keep the user experience responsive, match finalization and scoring recalculation were processed asynchronously instead of blocking user-facing requests.

---

## Application Features

### Login Page

- Google OAuth 2.0 authentication for employee access
- Internal-only access control using authorized company accounts

### My Bets Page

Primary interaction surface for the tournament.

- View upcoming matches
- Submit score predictions before kickoff
- See completed match results and points earned
- Track total points, ranking position, and prediction count
- View the most predicted score for each match
- Dynamic UI updates based on match status and user activity

### Results Page

- Group stage tables
- Knockout bracket rounds and final standings
- Match metadata (date, time, location, score)
- Dynamic handling of different tournament stages

### Overall Standings Page

- Live participant leaderboard
- Total accumulated points and ranking positions
- Tie-break ordering and comparative standings
- Automatic recalculation after result processing

### Rules Page

- Clear scoring rules for participants
- Priority-based point assignment to ensure each prediction is scored once per match
- Consistent rule enforcement across all users

---

## Scoring & Ranking System

The scoring engine was the core application component and a key part of the backend design.

When a match result became final, the system:

- Evaluated all related predictions
- Applied scoring rules using a single-priority outcome per prediction
- Recalculated user totals
- Updated leaderboard positions and tie-break ordering

This logic was implemented to be deterministic and repeatable, which was essential for fairness in a competitive internal platform.

---

## Technical Highlights

::decision{title="Asynchronous result processing for scoring updates" tradeoff="More backend coordination → faster user-facing interactions"}

Scoring and leaderboard recalculation were triggered asynchronously after match results were finalized. This kept the application responsive while processing many predictions and ranking updates in the background.

::

### Backend (NestJS)

- Modular API design for authentication, predictions, matches, results, and standings
- Swagger documentation for endpoint visibility and faster maintenance
- MongoDB data modeling aligned with tournament entities and prediction workflows
- Queue-based asynchronous processing for result finalization and scoring updates

### Frontend (Vue.js + Quasar)

- Responsive UI for desktop and mobile participation during the tournament
- Tournament-focused screens for bets, results, standings, and rules
- Dynamic state-driven updates based on match lifecycle and user predictions

---

## What This Project Demonstrates

- Full-stack ownership of an application used during a live event timeline
- Implementation of competitive scoring and ranking logic
- Secure internal authentication with OAuth 2.0
- Asynchronous backend workflows for data processing
- Modular backend architecture and API documentation
- Interactive frontend development for real-time tournament participation

---

## Impact

Bet.Monks gave Media.Monks employees a dedicated internal platform to participate in a tournament-long prediction competition, combining a polished user experience with reliable scoring and leaderboard updates throughout the FIFA Women's World Cup 2023.
