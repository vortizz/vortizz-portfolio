---
title: Cooltopia - Cool Cats NFT
tagline: Full-stack NFC-powered event platform for a large-scale interactive live experience
tags: ["Node.js", "NestJS", "MongoDB", "RabbitMQ", "MQTT", "SendGrid", "Vue.js", "Quasar Framework", "Electron", "Ionic Vue", "JavaScript/TypeScript"]
featured: true
---

<div class="mb-8 flex items-center gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50">
  <img
    src="/images/logos/coolcats.png"
    alt="Cool Cats"
    class="h-12 w-auto object-contain"
  />

  <div class="flex flex-col leading-tight">
    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
      Client
    </span>
    <span class="text-sm font-semibold text-slate-900 dark:text-slate-100">
      Cooltopia 2022 - New York, USA
    </span>
  </div>
</div>

::stack-chips{:items='["Node.js", "NestJS", "MongoDB", "RabbitMQ", "MQTT", "SendGrid", "Vue.js", "Quasar Framework", "Electron", "Ionic Vue", "JavaScript/TypeScript"]'}
::

::screenshot{src="/images/projects/cooltopia/overview.mp4" type="video" caption="Application layer powering NFC check-ins, game participation, scoring, and reward redemption during the Cooltopia live event"}
::

::callout{type="info" title="Context"}
Cooltopia was a large physical Cool Cats NFT event held in July 2022 at Center415 in New York City (30,000 sq ft venue). The event operated as an immersive mini amusement park where each attendee used an NFC-enabled bracelet to access activities, track points, and redeem rewards across the venue.
::

---

## Overview

Cooltopia was a connected physical-to-digital event system where attendees used NFC bracelets to start games, track performance, accumulate points in real time, and redeem merchandise or food rewards. The platform acted as the operational application layer for participant identity, scoring, activity tracking, and reward redemption across multiple stations in the venue.

I built the full application layer of the system, including backend APIs, scoring logic, participant tracking, totem interfaces, a reward redemption app, and an event CMS. The result was a real-world event platform designed to support high traffic, distributed interactions, and real-time state consistency during live operations.

---

## My Role

::contribution{role="Full-Stack Engineer"}

- Designed and implemented backend APIs using `Node.js`, `NestJS`, `MongoDB`, and `TypeScript`
- Built participant identity and activity tracking flows based on NFC bracelet scans
- Implemented game scoring logic, including time-based scoring and accumulated points management
- Ingested score data from multiple sources, including external digital game systems
- Stored participant activity history and synchronized score/points updates across the event system
- Integrated backend workflows with event devices and partner systems, including treasure chest integration via `MQTT` and API-based integrations for totems and other event flows
- Built totem frontend applications (`Vue.js` + `Quasar` + `Electron`) for participant interactions
- Built a separate reward redemption app (`Ionic Vue`) with real-time point deduction and backend sync
- Built an event CMS for participant management, activity administration, email sending, and manual point adjustments

::

---

## Problem

The event needed a reliable application system to coordinate participant activity across many physical stations in real time. Each attendee used a single NFC bracelet identity across games, scoring stations, and reward redemption, so the platform had to maintain consistent participant state while handling high event traffic and multiple score sources.

The engineering challenge was to connect physical interactions and digital systems into one operational workflow without delays, double counting, or point inconsistencies during a live event.

---

## Solution

I built a full-stack event platform centered on NFC-based participant identity and real-time point tracking. The backend handled participant state, score ingestion, scoring rules, activity history, and redemption logic, while the frontend applications handled participant-facing totems, reward redemption interactions, and event operations through a CMS.

The system was designed to support live-event reliability by:

- Using a centralized participant record tied to NFC bracelet scans
- Processing score updates from time-based activities and external digital games
- Synchronizing points and redemption state across totems, reward devices, and admin tools
- Separating operational interfaces by role (participant totems, redemption app, CMS)
- Integrating treasure chest communication (`MQTT`) and participant email workflows (`RabbitMQ` + `SendGrid`) alongside API-based event integrations

This approach made the platform the operational brain of the event, connecting physical installations and digital experiences through a shared application layer.

---

## Application Features

### NFC Bracelet Identity & Participant Tracking

- NFC scan-based participant identification across games, activities, and reward redemption
- Centralized participant profile and points tracking across the venue
- Full activity history storage for auditing and operational support

### Totem Applications (Vue + Quasar + Electron)

- Participant-facing totem interfaces to start and finish activities
- Real-time display of results and accumulated points
- Fast, simple interactions designed for high throughput during live event traffic

### Scoring & Score Ingestion System

- Time-based game scoring logic managed in the backend
- Score ingestion from external digital games and integrated partner systems
- Point accumulation updates synchronized to participant records and frontends

### Reward Redemption App (Ionic Vue)

- Separate redemption application for merchandise and food selection
- NFC scan to identify participant and fetch current points
- Automatic point deduction and real-time backend synchronization during redemption

### Event CMS & Operations

- CMS for participant management and activity administration
- Email sending workflows for event operations and communication
- Manual point adjustment tools for operational corrections when needed

---

## Technical Highlights

::decision{title="Using the right integration path for each event workflow" tradeoff="Multiple integration patterns → clearer responsibilities and more reliable operations"}

I used `MQTT` specifically for the treasure chest integration, while totems and other event interactions used normal API-based communication. `RabbitMQ` was used for asynchronous participant email workflows. This separation matched the runtime needs of each integration and kept the system easier to reason about during live operations.

::

### Backend Application Layer (NestJS + MongoDB)

- API design for participant tracking, activities, scoring, redemption, and CMS operations
- Centralized participant state management tied to NFC bracelet identity
- Storage of detailed activity history and accumulated points
- Integration points for external digital game systems, API-based event clients (including totems), treasure chest communication (`MQTT`), and email workflows (`RabbitMQ` + `SendGrid`)

### Real-Time Event Integration & Consistency

- Multi-source score ingestion (time-based games + external game APIs)
- `MQTT` integration for the treasure chest physical interaction workflow
- Consistency of points and redemption state across distributed devices and apps
- Cross-team integration with digital game systems, totem/client API flows, and physical installation workflows

### Frontend Applications (Totems, Redemption App, CMS)

- `Vue.js` + `Quasar` + `Electron` totem interfaces optimized for event-floor usage
- `Ionic Vue` redemption app for staff-operated reward and food redemption flows
- Admin CMS interfaces supporting live event operations and exception handling
- UI behavior designed for quick interactions, clear feedback, and continuous operation

---

## What This Project Demonstrates

- Full-stack ownership of a real-world event platform application layer
- Real-time systems engineering for live operational environments
- NFC-based identity management and physical-to-digital workflow integration
- Backend architecture for distributed scoring, participant tracking, and redemption logic
- Cross-team technical integration with digital game teams and physical installation teams
- Event-scale reliability and state consistency across multiple apps and devices

---

## Impact

Cooltopia demonstrates full-stack engineering ownership in a high-scale live event environment. The system successfully connected NFC identity, scoring, participant tracking, and reward redemption across physical stations and digital applications, enabling the event to operate as a unified gamified experience in real time.

---
