---
title: TwitchCon - The Emotifier
tagline: Real-time photo management platform built for a large-scale live event
tags: ["Node.js", "Vue.js", "NestJS", "MongoDB", "Quasar Framework", "SendGrid", "AWS S3", "JavaScript/TypeScript"]
featured: false
---

<div class="mb-8 flex items-center gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50">
  <img
    src="/images/logos/twitch.png"
    alt="Twitch"
    class="h-12 w-auto object-contain"
  />

  <div class="flex flex-col leading-tight">
    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
      Client
    </span>
    <span class="text-sm font-semibold text-slate-900 dark:text-slate-100">
      TwitchCon 2022 - San Diego, USA
    </span>
  </div>
</div>

::stack-chips{:items='["Node.js", "Vue.js", "NestJS", "Quasar Framework", "MongoDB", "SendGrid", "AWS S3", "JavaScript/TypeScript"]'}
::

::media-carousel{:items='[{"type": "image", "src": "/images/projects/twitchcon/stand.jpeg", "caption": "Main Emotifier display wall showing approved photos during TwitchCon event."}, {"type": "image", "src": "/images/projects/twitchcon/IMG_6305.jpg", "caption": "Built photo booth system managing captures, accessories, and processing pipeline."}, {"type": "video", "src": "/images/projects/twitchcon/visu.mov", "poster": "/images/projects/twitchcon/poster.png", "caption": "Touchscreen photo management interface used to customize and send images."}]'}
::

::callout{type="info" title="Context"}
Developed for TwitchCon 2022, this system powered an interactive event experience where attendees could take photos, apply digital accessories, and instantly view their images on large event screens while receiving personalized copies via email.
::

---

## Overview

The Emotifier was an interactive stand at TwitchCon 2022 in San Diego, USA. Visitors entered the experience, took a photo using a tablet, applied digital accessories (such as glasses and hats), and instantly saw their image displayed on large event screens. They also received a personalized copy of their photo via email.

The system required real-time image processing, moderation control, cloud storage, and live display integration during a high-traffic public event.

I was responsible for building the backend system and the CMS used to manage and moderate the experience.

---

## My Role

::contribution{role="Backend & CMS Developer"}

- Built the backend APIs for photo ingestion, moderation, and event screen delivery
- Received images from the tablet application and stored them in `AWS S3`
- Saved participant and photo data in the database
- Implemented moderation logic (approve/reject) before public display
- Sent approval-based email flows for participants
- Built the CMS moderation dashboard for event managers
- Enabled managers to review submissions, approve/reject photos, and monitor activity
- Ensured only approved images reached the live event screens

::

---

## Problem

The event needed a reliable system that could:

- Handle live photo submissions
- Display approved images instantly on large screens
- Send personalized emails automatically
- Prevent inappropriate content from being shown publicly
- Remain stable during high visitor traffic

Because this was a public live event, failures or delays would immediately impact the experience.

---

## Solution

I built a backend system that connected the tablet application, cloud storage, moderation dashboard, email system, and live display panels.

The workflow worked as follows:

1. User takes photo on tablet
2. Tablet sends image to backend API
3. Image is stored in AWS S3
4. Photo appears in CMS moderation dashboard
5. Admin approves or rejects the photo
6. Approved photos are pushed to the event display screens
7. User receives an automated email with their image

This created a controlled, real-time content pipeline for a live event environment.

---

## Application Features

### Live Photo Processing

- API-based image ingestion from external application
- Secure cloud storage via AWS S3
- Real-time moderation workflow

### Moderation & Content Control

- Admin approval / rejection system
- Prevention of inappropriate public display
- Separate email flows for approved and rejected photos

### Event Screen Integration

- Automatic push of approved images to large display panels
- Controlled content flow to public screens

### Email Automation

- Automated personalized email delivery
- Approval-based email logic

---

## Technical Highlights

::decision{title="Moderated publish flow before live screen display" tradeoff="Extra moderation step → safer public content and more reliable live operations"}

I implemented a moderation-first pipeline where photos were reviewed in CMS before being published to event screens. This reduced the risk of inappropriate content and kept operations controlled during peak traffic.

::

### Backend System Design

- REST API design for external application consumption
- Image upload handling and cloud storage integration
- Moderation state management
- Reliable email automation workflows

### CMS Development

- Built custom dashboard for live moderation
- Clear UI for fast decision-making during event traffic
- Real-time updates for image status changes

### Event Reliability

- Built for live production environment
- Stable under high user interaction
- Designed to prevent inappropriate public content

---

## What This Project Demonstrates

- Backend ownership for live event system
- Real-time media handling and moderation
- Cloud storage integration (AWS S3)
- API design for external client applications
- Email automation workflows
- Production reliability in high-traffic environments

---

## Impact

The Emotifier successfully powered a live interactive experience at TwitchCon 2022, allowing visitors to instantly see their customized images on public screens while receiving personalized digital copies.

My backend and CMS ensured content control, automation, and operational stability throughout the event.
