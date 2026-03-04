---
title: BK Million Dollar Whopper Platform
tagline: Frontend experience for an AI-powered Burger King campaign
tags: ["React.js", "Redux", "Material UI", "Tailwind CSS", "JavaScript/TypeScript"]
featured: false
---

<div class="mb-8 flex items-center gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50">
  <img
    src="/images/logos/burger-king.png"
    alt="Burger King"
    class="h-12 w-auto object-contain"
  />

  <div class="flex flex-col leading-tight">
    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
      Client
    </span>
    <span class="text-sm font-semibold text-slate-900 dark:text-slate-100">
      Burger King - Global Marketing Campaign
    </span>
  </div>
</div>

::stack-chips{:items='["React.js", "Redux", "Material UI", "Tailwind CSS", "JavaScript/TypeScript"]'}
::

::screenshot{src="/images/projects/bk/overview.mp4" type="video" caption="Frontend campaign experience for burger customization, AI-generated content, and competition submission"}
::

---
## Overview

BK Million Dollar Whopper was a national campaign experience where users could build a custom Whopper, generate an AI image and jingle, and submit their creation to compete for a $1,000,000 prize.

I owned the frontend application and integration layer, building the full user experience and connecting it to backend APIs and AI generation services built by other teams.

::callout{type="info" title="Project Scope"}
This case study focuses on the frontend implementation work I delivered: building the experience from provided Figma designs, Redux state management, API integration, async AI response handling, and stable UI states during content generation.
::

---

## My Role

::contribution{role="Frontend Engineer"}

- Built the full frontend application in `React`, `Material UI`, and `Tailwind CSS` based on designs provided by the UI/UX team
- Implemented the multi-step burger configuration and submission flow
- Managed cross-step application state with `Redux`
- Integrated frontend flows with backend APIs and AI generation endpoints
- Handled asynchronous AI responses for image and audio generation
- Rendered AI-generated content dynamically within the user journey
- Implemented loading, error, and fallback states for network and generation steps
- Implemented a responsive, polished interface across devices following the approved Figma designs

::

---

## Problem

The campaign needed a consumer-facing experience that combined interactive customization with AI-generated outputs, while still feeling clear and responsive. The frontend had to manage several dependent steps, keep user selections across the flow, and maintain a good experience during AI processing delays.

---

## Solution

I built the frontend from the UI/UX team's Figma designs as a structured multi-step flow, using Redux for centralized state management and reliable transitions between configuration, generation, review, and submission steps.

The interface was designed to handle asynchronous AI generation well by:

- Keeping user progress while requests were in progress
- Showing clear loading states and next-step guidance
- Rendering AI-generated image and audio outputs dynamically when available
- Providing error and fallback states so users could recover without restarting

This approach kept the experience stable and polished even when AI responses had variable latency.

---

## Application Features

### Burger Configuration Flow

- Multi-step ingredient selection flow for building a custom Whopper
- Guided progression with state persistence across steps
- Validation to ensure users completed required inputs before continuing

### AI-Generated Burger Image

- Triggered image generation from selected burger ingredients
- Dynamic rendering of returned AI-generated visuals in the flow
- Loading and retry-friendly UI states during generation

### AI-Generated Jingle

- Triggered audio/jingle generation tied to the user burger concept
- Playback-ready rendering of generated content in the submission journey
- Graceful handling of delayed or failed responses

### Submission & Competition Flow

- Review step for confirming generated assets and ingredient selections
- Final submission flow connected to backend APIs
- UX continuity across step transitions, async responses, and completion states

---

## Technical Highlights

::decision{title="Centralized state management for a multi-step AI flow" tradeoff="More upfront state modeling → more predictable UX across async steps"}

Redux kept configuration data, generation status, returned AI assets, and submission state synchronized across the full flow. This reduced UI inconsistencies and made async transitions easier to manage.

::

### Frontend Architecture (React + Redux)

- Centralized state for ingredient selections, step progression, generated assets, and request status
- Predictable transitions between configuration, generation, preview, and submission steps
- UI implemented from Figma designs using `Material UI` and `Tailwind CSS` for consistent styling and layout

### Async UX & Reliability

- Loading state design for AI image/audio generation delays
- Error and fallback handling for failed or delayed API responses
- Dynamic rendering of generated content without breaking user progress
- Responsive layout behavior for mobile and desktop campaign participation

---

## What This Project Demonstrates

- Frontend ownership of a high-visibility campaign application
- Frontend implementation of product and UI/UX team designs in production-ready code
- Delivery of a complex multi-step UX with centralized state management
- Integration with backend APIs and AI-driven content generation systems
- Strong async handling, loading states, and recovery flows
- Responsive UI implementation for consumer-facing campaign experiences
- Ability to build polished interaction layers on top of AI-powered workflows

---

## Impact

The application delivered a polished frontend experience for a Burger King AI-driven campaign, guiding users from burger customization to AI-generated content and final competition submission in one clear flow.

---
