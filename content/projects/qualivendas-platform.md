---
title: QualiVendas Insurance Sales Platform
tagline: Enterprise insurance sales ecosystem for proposal workflow, governance, and operations at nationwide scale
tags: ["Node.js", "Vue.js", "Express.js", "Neo4j", "BootstrapVue", "Vuetify", "AWS S3", "JavaScript/TypeScript"]
featured: true
---

<div class="mb-8 flex items-center gap-4 rounded-xl border border-slate-200 bg-white/60 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50">
  <img
    src="/images/logos/qualicorp.png"
    alt="Qualicorp"
    class="h-8 w-auto object-contain"
  />

  <div class="flex flex-col leading-tight">
    <span class="text-xs font-medium text-slate-500 dark:text-slate-400">
      Client
    </span>
    <span class="text-sm font-semibold text-slate-900 dark:text-slate-100">
      Qualicorp - Brazil's largest health insurance administrator
    </span>
  </div>
</div>

::stack-chips{:items='["Node.js (Express.js)", "Vue.js", "Neo4j", "BootstrapVue", "Vuetify", "AWS S3", "JavaScript/TypeScript"]'}
::

::screenshot{src="/images/projects/qualivendas/overview.mov" type="video" caption="Enterprise application ecosystem for health insurance proposal creation, governance, and operational management"}
::

::callout{type="info" title="Context"}
QualiVendas is a nationwide digital ecosystem used to manage the full lifecycle of health insurance sales in Brazil. It includes a broker platform for proposal creation and submission, and an admin platform for governance, permissions, and operational control.
::

---

## Overview

QualiVendas is a nationwide digital platform used to manage the full lifecycle of health insurance sales in Brazil.

The system replaced manual and fragmented processes with a structured digital workflow capable of handling high proposal volume while enforcing strict business and regulatory rules.

The ecosystem includes two connected platforms:

- **Broker Platform** – used by brokers to create and submit health insurance proposals  
- **Admin Platform** – used by supervisors and managers to control permissions, monitor operations, and manage governance  

I worked on the project in two phases: first as a Full-Stack Engineer building core features, and later as a Technical Lead guiding technical decisions, code quality, and delivery execution.

---

## My Role

### Full-Stack Engineer

I built and maintained features across both frontend and backend layers.

My responsibilities included:

- Building scalable frontend flows using `Vue.js`
- Developing REST APIs using `Node.js` and `Express.js`
- Modeling complex business relationships in `Neo4j`
- Implementing proposal validations and eligibility rules
- Managing proposal status transitions (draft, submitted, approved, rejected, returned)
- Integrating document generation and `AWS S3` storage
- Supporting production issues and improving system stability

I worked across the full lifecycle of a proposal, from UI interaction to backend processing and database persistence.

---

### Technical Lead (Later Phase)

After transitioning into a Technical Lead role, I expanded my responsibilities to include:

- Defining technical approaches for new features
- Reviewing pull requests and maintaining code quality standards
- Coordinating frontend, backend, and QA teams
- Supporting sprint planning and technical discussions
- Ensuring delivery consistency across releases
- Acting as a bridge between business stakeholders and developers
- Managing urgent production issues and hotfixes

I continued contributing code while helping guide the technical direction of the platform.

---

## Problem

Health insurance sales require strict control over eligibility rules, billing logic, and proposal validation. Manual processes created delays, inconsistencies, and operational risk.

The platform needed to:

- Support high-volume proposal creation nationwide
- Enforce strict business and regulatory rules
- Serve multiple user roles with different permissions
- Track proposal status across its full lifecycle
- Allow corrections and resubmissions safely
- Provide governance and visibility for supervisors and managers

The challenge was building a reliable system that could handle operational complexity while remaining scalable and maintainable.

---

## Solution

I helped build and evolve both the broker and admin platforms with a focus on:

- Reliable proposal workflows
- Strong validation and rule enforcement
- Clear lifecycle control
- Scalable architecture
- Production stability

On the frontend, I implemented structured multi-step workflows and role-based UI restrictions.  
On the backend, I implemented business logic, validation layers, lifecycle transitions, and domain modeling.

As the platform matured, I also helped improve long-term maintainability through refactoring, code review, and technical leadership.

---

## Application Features

### Broker Platform

- Multi-step proposal creation workflow
- Policyholder and dependent registration
- Plan eligibility validation
- Billing configuration and data verification
- Digital document generation and storage (`AWS S3`)
- Proposal submission and status tracking
- Correction and resubmission flows

### Admin Platform

- Role-based access control
- Hierarchical permission management
- Operational oversight for supervisors and managers
- Proposal monitoring and workflow visibility
- Governance controls across broker structures

### Shared Workflow Across Platforms

- Consistent proposal status tracking across broker and admin systems
- Controlled status transitions with validation checks
- Centralized rule enforcement at the application level
- Production support tools to maintain operational continuity

---

## Technical Highlights

### Full-Stack Engineering (Vue + Express)

- `Vue.js` frontend architecture for scalable enterprise workflows
- REST API development with `Node.js` / `Express.js`
- Role-based UI and backend validation working together
- Continuous refactoring to maintain clarity in complex workflows

### Domain Modeling & Workflow Control

- `Neo4j` graph modeling for relationship-heavy insurance logic
- Controlled proposal lifecycle transitions
- Validation across proposal, dependents, billing, and document flows
- Strict enforcement of regulatory and business rules

### Delivery & Production Reliability

- Transition from feature development to technical leadership
- Code review and standards enforcement
- Cross-team coordination (frontend, backend, QA, PO, PM)
- Sprint planning and execution in a Scrum/Kanban hybrid model
- Rapid response to production issues and urgent fixes

---

## What This Project Demonstrates

- Full-stack engineering in a business-critical insurance domain
- Experience building high-volume production workflows
- Strong business rule enforcement and lifecycle management
- Graph database modeling (`Neo4j`) for complex relationships
- Governance-aware system design with hierarchical permissions
- Technical leadership progression within a live enterprise product
- Delivery ownership across development, maintenance, and production support

---

## Impact

QualiVendas is a large-scale production system directly supporting nationwide health insurance sales operations.

My contributions helped build, stabilize, and evolve the platform across multiple phases, from full-stack feature development to technical leadership, ensuring reliable proposal workflows, controlled governance, and consistent delivery in a complex enterprise environment.
