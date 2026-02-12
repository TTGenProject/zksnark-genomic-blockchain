# TTGen Project:  Blockchain-based Trustworthy Genomic Data Sharing Using Zero-Knowledge Proof for Improving Consumer Identity Protection.

## Overview
SUI blockchain network for multi-party genomic data sharing framework by leveraging zk-SNARKs to ensure confidential data access, integrity, and verifiable compliance without revealing genomic customer who want to access genome data to avoid any competiton traces for equally innovative medication treatment research. 
Our project will primarily base on monopolitic architecture with the view of modular microservices in the future terms.

The system allows all healthcare institutions to:
- Provide genomic data file (GDP) and store in Walrus decentralized storage
- Control and audit access of genomic consumer permissions on-chain
- Share sensitive genomic information across organizations
- Prove eligibility of genomic consumers who want to access using zero-knowledge proofs without revealing personal data.
More details in [Genomic Dat Presentation](https://ueve-my.sharepoint.com/:p:/r/personal/20245468_etud_univ-evry_fr/_layouts/15/Doc.aspx?sourcedoc=%7B635DCE7E-AF6F-4F48-A294-9236F969A58C%7D&file=Intern%20Project%20Understandings%20-%20Week%201.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1&web=1)

![Zero-Knowledge Smart Contract in Secure Genomic Data Sharing Systems](docs/general-architecture/architecture.png)
## High-Level Architecture

The repository is structured as a monorepo, separating concerns between:

- Application layer (UI + backend)
- On-chain logic (Move smart contracts)
- Zero-knowledge circuits
- Shared SDK and infrastructure logic

```text
.
├─ apps/
│  ├─ web/              # Main web application (dashboard + backend)
│  ├─ landing/          # Standalone landing page application
│  └─ prover/           # Fallback prover service (rapidsnark target)
├─ packages/
   ├─ contracts/        # Sui Move smart contracts
   ├─ zk-circuits/      # zkSNARK circuits and proving artifacts
   └─ d4gen-sdk/        # Shared TypeScript SDK (Sui, Walrus, Seal, zk)
└─ docs                 # Documentations (ZK Snark circuits, general architecture, etc)
```

## Development Requirements

### Global Requirements (all workspaces)

- Node.js `>=24`
- pnpm `10.x`
- Bash-compatible shell (for script execution)

Install dependencies once at repo root:

```bash
pnpm install
```

### Package-Specific Requirements

- `packages/contracts`
  - Sui CLI installed (verified with `sui --version`)
- `packages/zk-circuits`
  - `cargo` installed (used by `bootstrap` to install `circom` locally when needed)
  - `snarkjs` is installed from workspace dependencies via `pnpm install`
  - `circom` can be either:
    - globally installed in your PATH, or
    - locally installed by `pnpm --filter ./packages/zk-circuits bootstrap`
- `packages/genomic-sdk`
  - Node.js + pnpm only (current scaffold stage)
## Applications

### apps/web - Web Application (Dashboard + Backend)

This is the main application entry point.

#### Responsibilities

- Genomic provider-facing UI:
  - Dashboard for genomic organizational consumer
  - Landing pages and genomic file managemnt overview
- Backend logic (implemented via Next.js server-side routes):
  - Uploading and retrieving encrypted medical data from decentralized storage
  - Interacting with Sui smart contracts
  - Requesting decryption capabilities via Seal
  - Generating and submitting zero-knowledge proofs
- Lightweight indexing:
  - Reading on-chain events and objects
  - Building queryable views for records, shares, and audit logs
  - Improving UX without exposing sensitive data

#### Key Principles

- No plaintext genomic data is persisted on-chain
- Backend logic relies exclusively on shared SDKs
- All cryptographic operations are delegated to dedicated packages
## Packages

### packages/contracts - Sui Move Smart Contracts

This package contains all on-chain logic deployed to the Sui network.

#### Responsibilities

- Definition of EHR record objects (metadata only)
- Access control and sharing logic
- Policy enforcement hooks for Seal
- Verification of zkSNARK proofs on-chain
- Emission of audit events for:
  - Record creation
  - Record sharing
  - Access revocation

#### Design Goals

- Minimal, auditable, and deterministic logic
- No storage of PII or PHI on-chain
- On-chain data acts only as:
  - Pointers
  - Commitments
  - Policies
  - Immutable audit trails

### packages/zk-circuits - Zero-Knowledge Circuits

This package defines all zkSNARK circuits and related artifacts used by the system.

#### Responsibilities

- Definition of zero-knowledge constraints (for example, national identifier number eligibility and consent validity)
- Compilation and setup of zkSNARK circuits
- Generation of proofs and public signals
- Export of verification keys compatible with Sui Move verification

#### Design Goals

- Enable selective disclosure of sensitive attributes
- Bind proofs to specific records or policies to prevent reuse
- Keep circuit scope minimal and verifiable within on-chain constraints

### packages/ttgen-sdk - Shared SDK and Infrastructure Layer

This package provides a unified TypeScript SDK used by both frontend and backend code.

#### Responsibilities

- Sui blockchain interaction:
  - Transaction builders
  - Event and object readers
- Walrus storage integration:
  - Encrypted blob upload/download
  - Hashing and commitment helpers
- Seal integration:
  - Client-side encryption helpers
  - Access policy handling
- Zero-knowledge helpers:
  - Proof generation orchestration
  - Formatting proofs and public inputs for on-chain verification
- Shared domain types:
  - Records
  - Policies
  - Audit events
  - Organization and subject identifiers

#### Design Goals

- Single source of truth for protocol-level logic
- Prevent duplication of cryptographic or blockchain code
- Allow future replacement of infrastructure components with minimal refactoring

## How To Run Workspaces

### Root Commands

```bash
pnpm run dev          # run all workspace dev scripts in parallel
pnpm run dev:web      # run only apps/web
pnpm run dev:landing  # run only apps/landing
pnpm run build        # run build for all workspaces via turbo
pnpm run test         # run test for all workspaces via turbo
```

### `packages/contracts` (Sui Move)

```bash
pnpm --filter ./packages/contracts build          # sui move build
pnpm --filter ./packages/contracts test           # sui move test
pnpm --filter ./packages/contracts test:coverage  # sui move test --coverage
pnpm --filter ./packages/contracts check          # build + test
```

Current example module:
- `ttgen::ehr` with record creation, consent update, share, and delete flows
- Includes Move unit tests that pass with `pnpm --filter ./packages/contracts check`

### `packages/zk-circuits` (Groth16 / circom / snarkjs)

First-time setup:

```bash
pnpm --filter ./packages/zk-circuits bootstrap
```

Run pipeline:

```bash
pnpm --filter ./packages/zk-circuits build       # compile + setup
pnpm --filter ./packages/zk-circuits test        # prove + verify
pnpm --filter ./packages/zk-circuits export:vkey # export move-friendly vkey json
pnpm --filter ./packages/zk-circuits full        # build + test + export:vkey
```

Current example circuit:
- `private_multiplier.circom` proves knowledge of private `a`, `b` such that `a * b = product` (public)

Main generated outputs:
- `packages/zk-circuits/artifacts/private_multiplier/proof.json`
- `packages/zk-circuits/artifacts/private_multiplier/public.json`
- `packages/zk-circuits/artifacts/private_multiplier/verification_key.json`
- `packages/zk-circuits/artifacts/private_multiplier/verification_key.move.json`

### `packages/ttgen-sdk` (TypeScript SDK)

Current SDK workspace is scaffolded and ready for next implementation phase.

```bash
pnpm --filter ./packages/ttgen-sdk build
pnpm --filter ./packages/ttgen-sdk test
pnpm --filter ./packages/ttgen-sdk typecheck
```

### `apps/prover` (Fallback Prover Service)

Current service scaffold:

```bash
pnpm --filter ./apps/prover dev
pnpm --filter ./apps/prover start
```

Genomic endpoint:
- `GET /genomic`

## Core Design Principles

### Privacy by design

No personally identifiable or medical data is stored on-chain.

### Decentralized storage, centralized UX

Data is decentralized and encrypted, while the application provides a coherent user experience.

### Explicit access control

All data access is gated by on-chain policies and auditable events.

### Verifiable compliance

Zero-knowledge proofs allow compliance checks without disclosure.

### Pragmatic architecture

Designed to be implemented end-to-end within a short development cycle while remaining extensible.

## Intended Scope

This repository is designed as:

- A functional end-to-end prototype
- A foundation for a consortium-based genomic data sharing system
- A reference architecture for privacy-preserving data sharing on Sui

It intentionally avoids over-engineering while preserving correctness and extensibility.
