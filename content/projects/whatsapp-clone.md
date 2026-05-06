---
title: WhatsApp Clone
tagline: Full-stack real-time messaging app with end-to-end encryption, group chats, and 161 automated tests
tags:
  [
    "Vue.js",
    "Nuxt.js",
    "NestJS",
    "MongoDB",
    "WebSockets",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "Playwright",
  ]
featured: false
sortOrder: 8
---

::stack-chips{:items='["Nuxt 4", "Vue 3", "NestJS", "MongoDB", "WebSockets", "TypeScript", "Tailwind CSS", "Pinia", "Docker", "Playwright", "Vitest", "Jest"]'}
::

::media-carousel{:items='[{"type": "image", "src": "/images/projects/whatsapp/group-chat-dark.png", "caption": "Group chat with multiple members in dark mode - real-time messaging with message status indicators."}, {"type": "image", "src": "/images/projects/whatsapp/1on1-chat-dark.png", "caption": "Private 1:1 conversation in dark mode - end-to-end encrypted messaging with delivery and read receipts."}, {"type": "video", "src": "/images/projects/whatsapp/1on1-chat-dark.mp4", "poster": "/images/projects/whatsapp/1on1-chat-dark-cover.png", "caption": "Real-time 1:1 encrypted messaging - two separate browser sessions exchanging messages instantly via WebSockets."}, {"type": "video", "src": "/images/projects/whatsapp/group-chat-light.mp4", "poster": "/images/projects/whatsapp/group-chat-light-cover.png", "caption": "Group chat with 4 members - real-time message delivery, reply, forward and delete across simultaneous sessions."}, {"type": "image", "src": "/images/projects/whatsapp/group-chat-light.png", "caption": "Group chat in light mode - full dark and light theme support."}, {"type": "image", "src": "/images/projects/whatsapp/group-chat-info-light.png", "caption": "Group info panel - member management, admin controls, and group settings."}]'}
::

---

## Overview

A full-stack WhatsApp Web clone built as a showcase project. The app replicates the core experience of WhatsApp Web - real-time encrypted messaging between users, group chats, message status indicators, and a UI that mirrors the original application.

Built to demonstrate full-stack development, WebSocket communication, client-side cryptography, and professional testing practices including unit, integration, and end-to-end tests with a CI pipeline.

::callout{type="info" title="Project Scope"}
This is a personal showcase project built entirely from scratch to demonstrate technical depth across the full stack - from cryptography and real-time communication to automated testing and CI pipelines.
::

---

## Technical Highlights

### End-to-End Encryption

The most technically demanding part of this project. Messages are encrypted client-side using the Web Crypto API before being sent to the server. The server never has access to plaintext message content.

::decision{title="Client-side E2EE using Web Crypto API" tradeoff="Implementation complexity → true end-to-end encryption without trusting the server"}

- RSA-OAEP key pairs generated per user on registration
- Per-conversation AES-256 keys encrypted with each member's public key
- Private keys encrypted with a user-defined passphrase using AES-GCM
- Keys stored locally in IndexedDB - never sent to the server in plaintext
- Recovery codes generated as alternative passphrase recovery options

::

### Real-Time Communication

WebSocket connections managed by a custom `WsClientManager` service on the backend. Handles connection lifecycle, online/offline status, message delivery, and group broadcast without any third-party real-time service.

### Testing - 161 Tests

| Suite              | Tests   | Tool       | What's covered                                                          |
| ------------------ | ------- | ---------- | ----------------------------------------------------------------------- |
| Backend unit       | 52      | Jest       | Services, guards, strategies, WebSocket manager                         |
| Frontend unit/nuxt | 69      | Vitest     | Stores, composables, E2EE crypto                                        |
| Frontend E2E       | 40      | Playwright | Auth, chat, messaging, block/unblock, profile, reply, forward, sign out |
| **Total**          | **161** |            |                                                                         |

The most notable tests are the multi-browser E2E tests - two and three simultaneous Playwright browser contexts exchanging real-time encrypted messages, verifying the full stack from registration through encryption and delivery.

### CI Pipeline

GitHub Actions runs all three test suites on every push. The E2E job starts MongoDB, the NestJS backend, and the Nuxt frontend via Docker Compose, then runs 40 Playwright tests in Chromium. Branch protection rules block merges unless all 161 tests pass.

---

## Application Features

### Messaging

- Real-time 1:1 and group messaging via WebSockets
- Message status indicators: Sent, Received, Read
- Reply to messages with quoted preview
- Forward messages to other chats
- Delete messages
- Message info (delivery and read receipts)

### Security & Encryption

- End-to-end encryption using the Web Crypto API
- JWT authentication with HTTP-only cookies
- Session token validation on every authenticated request
- Rate limiting on all API endpoints

### Users & Chats

- Registration with passphrase setup and recovery codes
- Profile management: name and about
- Block and unblock users
- Online/offline status with last seen timestamps
- 1:1 and group chats with admin management
- Add and remove group members

### UI

- Dark and light mode
- Emoji picker
- Message search within chats
- Typing indicators
- Unread message counts

---

## Architecture

```
Client (Browser)
├── Nuxt 4 + Vue 3 + Pinia
├── Web Crypto API - E2EE
├── IndexedDB - private key storage
└── WebSocket client
        │ HTTP / WebSocket
NestJS Backend
├── REST API (auth, users, chats, messages)
├── WebSocket Gateway (real-time events)
├── JWT + Cookie authentication
└── Rate limiting
        │ Mongoose
MongoDB
```

---

## What This Project Demonstrates

- Full-stack TypeScript development across NestJS and Nuxt 4
- Client-side cryptography using the Web Crypto API - RSA-OAEP + AES-256
- Real-time WebSocket communication with custom connection management
- Comprehensive testing: 161 tests across unit, integration, and E2E
- Multi-browser E2E testing with Playwright - simultaneous sessions verifying real-time encrypted delivery
- CI pipeline with Docker Compose running the full stack in GitHub Actions
- Professional engineering practices: branch protection, conventional commits, documented architecture

---

## Links

- [GitHub Repository](https://github.com/vortizz/whatsapp)
