# Odyssey

A starter project to get you up and running with **Svelte** and **PocketBase** for rapid full-stack development.

## About This Project

This project provides a foundation for building modern web applications with Svelte on the frontend and PocketBase as your backend. It helps you quickly scaffold a complete application with authentication, real-time data sync, and a simple deployment model—perfect for prototypes, MVPs, internal tools, and hobby projects.

## What is Svelte?

**Svelte** is a modern JavaScript framework for building user interfaces with remarkable efficiency. Unlike traditional frameworks that ship framework code to the browser, Svelte compiles your components to vanilla JavaScript at build time. This results in:
- **Smaller bundle sizes** — less code shipped to users
- **Better performance** — reactive updates without a virtual DOM
- **Easier to learn** — component syntax is closer to HTML and JavaScript you already know
- Built-in support for **animations**, **transitions**, and **state management**

Svelte works great with **SvelteKit**, a meta-framework that adds routing, server-side rendering, and deployment options on top. ([Learn more](https://svelte.dev))

## What is PocketBase?

**PocketBase** is a minimal, self-contained backend system that combines a database, authentication system, real-time APIs, and file storage in a single executable. It's designed for developers who want to avoid the complexity of managing separate services:
- **Single binary** — no Docker, Kubernetes, or complicated setup
- **Built-in authentication** — user management out of the box
- **Real-time subscriptions** — WebSocket support for live data
- **Admin dashboard** — visual UI for managing collections and users
- **Easy deployment** — runs on most platforms with minimal footprint

Perfect for getting to MVP quickly without DevOps overhead. ([Learn more](https://pocketbase.io))

## Quick Start

### SvelteKit Frontend

```bash
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
```

### PocketBase Backend

```bash
docker run --rm -it -p 8090:8090 -v "$PWD/pb_data:/pb_data" -e POCKETBASE_DISABLE_TELEMETRY=1 pocketbase/pocketbase serve
```

Then visit http://localhost:8090/\_/ to create collections and users.

## Resources

- **Svelte:** https://svelte.dev
- **SvelteKit:** https://kit.svelte.dev
- **PocketBase:** https://pocketbase.io
