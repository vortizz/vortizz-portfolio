---
title: Valorant Live Interaction System
tagline: Real-time audience control platform for a live Twitch broadcast
tags: ["Node.js", "NestJS", "WebSocket", "MongoDB", "JavaScript/TypeScript"]
---

<div class="mb-8 flex items-center gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50">
  <img
    src="/images/logos/riot.png"
    alt="Riot Games"
    class="h-12 w-auto object-contain"
  />

  <div class="flex flex-col leading-tight">
    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
      Client
    </span>
    <span class="text-sm font-semibold text-slate-900 dark:text-slate-100">
      Riot Games - São Paulo, Brazil
    </span>
  </div>
</div>

::stack-chips{:items='["Node.js", "NestJS", "WebSocket", "MongoDB", "JavaScript/TypeScript"]'}
::

::media-carousel{:items='[{"type": "image", "src": "/images/projects/riot/cover.jpeg", "caption": "Live Valorant broadcast setup where selected Twitch viewers controlled a physical studio robot."}, {"type": "image", "src": "/images/projects/riot/fromrobot.jpeg", "caption": "Robot perspective during the live challenge track controlled by a remote participant."}, {"type": "image", "src": "/images/projects/riot/chat.jpeg", "caption": "Twitch chat participation flow used to select viewers for the live control session."}, {"type": "video", "src": "/images/projects/riot/overview.mp4", "poster": "/images/projects/riot/overviewcover.png", "caption": "End-to-end interaction: participant selection, joystick control, backend bridge, and robot response in real time."}]'}
::

::callout{type="info" title="Context"}
This system was built for a live Valorant broadcast on Twitch. Selected viewers from chat could control a physical car robot in the studio using a joystick on mobile or desktop.
::

---

## Overview

The Valorant Live Interaction System was built for a live Twitch broadcast. During the show, selected viewers from chat could remotely control a physical car robot inside the studio using a joystick interface on mobile or desktop.

The goal was to complete a physical track as fast as possible.

The project created a real-time connection between an online audience and a physical setup in a live studio.

I built the full application layer: joystick frontend and backend bridge.

---

## My Role

::contribution{role="Full-Stack Engineer"}

- Built the joystick web interface used by selected participants
- Built the backend system that received joystick data and forwarded it to the robot
- Managed real-time communication between participant and robot using WebSocket
- Implemented participant registration and unique access link flow
- Managed active session control so only the selected user could drive the robot
- Added validation to prevent multiple users controlling the robot at the same time
- Focused on frontend and backend application logic for live broadcast reliability

::

---

## Problem

The live show needed a reliable way for a selected viewer to control a physical robot remotely. The system had to keep commands fast, block non-selected users, and stay stable during the broadcast.

Any delay or control conflict would affect the live segment immediately.

---

## Solution

I built a simple real-time flow at the application level:

The workflow operated as follows:

1. A viewer was selected from Twitch chat.
2. Our team confirmed their participation.
3. I registered the participant in the system.
4. The participant received a unique link.
5. The link opened a joystick interface in the browser.
6. The joystick sent X and Y movement values to the backend.
7. The backend forwarded those values to the robot via WebSocket.
8. The robot responded in real time.

The backend acted as the bridge between the joystick interface and the physical robot.

---

## Application Features

### Joystick Frontend

- Browser-based joystick accessible from mobile or desktop
- Sent X and Y movement values in real time
- WebSocket connection from frontend to backend
- Participant ID validation before control started
- Smooth interaction designed for live use

### Backend Bridge

- WebSocket server for real-time communication
- Forwarded joystick input to the robot
- Managed active participant sessions
- Restricted control to one selected user at a time

### Session & Access Control

- Only the active participant could send control commands
- Blocked simultaneous control attempts from other users
- Controlled start and end of each live session

### Live Broadcast Flow

- Participant registration and unique control link generation
- Quick handoff from Twitch selection to joystick access
- Stable command flow during the on-air segment

---

## Technical Highlights

::decision{title="Real-time communication using WebSocket with control restricted to the active participant" tradeoff="Strict session control logic → reliable live interaction"}

WebSocket handled the live joystick stream. Session checks ensured only the selected participant could control the robot at any time.

::

### Real-Time Communication

- WebSocket communication from joystick frontend to backend bridge
- Low-latency transfer of joystick X/Y values
- Real-time forwarding from backend to robot

### Frontend

- Simple joystick interface for mobile and desktop
- Participant ID validation in the control flow
- Focused UI to reduce mistakes during live interaction

### Backend

- Active participant session management
- Control restriction to one user at a time
- Reliable bridge between web interface and robot controller
- Stable behavior under live broadcast conditions

---

## What This Project Demonstrates

- Real-time system design
- WebSocket implementation
- Hardware control via backend bridge architecture
- Live broadcast engineering
- Session control and validation
- Full-stack application ownership
- Low-latency interaction handling
- Production reliability during live event conditions

---

## Impact

The system enabled selected Twitch viewers to control a physical robot during a live broadcast with low latency and stable control.

My work ensured reliable real-time communication, correct session control, and smooth live operation at the application layer.
