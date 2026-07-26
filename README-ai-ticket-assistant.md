# AI-Powered Ticket Management Assistant

**Live demo:** https://nathanhutton-design.github.io/ai-ticket-assistant-1-/

## Problem

Help desk teams lose time and blow SLAs when tickets bounce between technicians, stall in a single status for hours, or pile up unevenly on one person's queue. Managers typically catch these problems only after an SLA has already been breached, and support tickets routinely contain PII/PHI that shouldn't leave the help desk unmasked.

## Solution

A manager-facing dashboard that surfaces SLA risk and reassignment problems before they become breaches, recommends AI-driven ticket routing based on technician performance history, and scans ticket content for exposed PII/HIPAA data before it's shared or used to train models.

## Key Features

- **Live metrics dashboard** — active tickets, at-SLA-risk count, average reassignments, and SLA compliance rate against target
- **Critical alerts feed** — flags tickets reassigned excessively or stalled in one status well past the historical average, with time-to-breach estimates
- **AI routing recommendations** — suggests the best technician per ticket based on past resolution rates and current capacity, with a confidence score and manual override
- **Team workload view** — highlights uneven ticket distribution and burnout risk
- **AI ticket assistant chat** — Claude-powered chat for querying tickets, SLA risk, and team performance in natural language
- **PII/HIPAA scanner** — checks ticket data across six categories (identity, contact info, credentials/access, device/asset data, healthcare-specific PHI, and performance data) and blocks routing on flagged healthcare tickets until compliance clears them

## Tech Stack

- Frontend: HTML/CSS/JavaScript
- AI: Anthropic Claude API for the assistant chat and routing engine (rule-based MVP + AI-assisted layer)
- Deliverables: PRD and a Secure Build Checklist (27 items across 5 compliance categories)
- Design system: shared navy/teal/mint visual language

## Screenshot

<!-- Add a screenshot of the dashboard here, e.g.: -->
<!-- ![AI Ticket Assistant dashboard screenshot](./screenshot.png) -->

## Notes

The health-system branding shown in the demo is a sample scenario used for the Pursuit build, not an actual client deployment.

## Team

Built during the Pursuit AI-Native Fellowship with Jason Gibbs.
