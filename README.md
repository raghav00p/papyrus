# Odyssey

Tiny-solutions starter: quick, composable web tooling using Alpine.js, PocketBase, and SvelteKit.

Why this repo
- Focus: small, focused tools that compose into productive apps. Less boilerplate, faster iteration.
- Use-cases: prototypes, admin UIs, microsites, and hobby projects where simplicity matters.

Core technologies
- Alpine.js — lightweight reactive UI for sprinkles of interactivity. (https://alpinejs.dev)
- PocketBase — single binary realtime backend with auth and file storage. (https://pocketbase.io)
- SvelteKit — fast, minimal framework for building full apps when you need routing and SSR. (https://kit.svelte.dev)

Quickstarts

SvelteKit (recommended for apps)

```bash
npm create svelte@latest my-sveltekit-app
cd my-sveltekit-app
npm install
npm run dev -- --open
```

Alpine.js (micro-interactivity)

Add the CDN and use `x-data`/`x-bind`/`@click` directly in HTML:

```html
<script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">Hello from Alpine</div>
</div>
```

PocketBase (local dev backend)

Run the official Docker image for quick local testing:

```bash
docker run --rm -it -p 8090:8090 -v "$PWD/pb_data:/pb_data" -e POCKETBASE_DISABLE_TELEMETRY=1 pocketbase/pocketbase serve
```

File layout suggestion
- `apps/` — SvelteKit apps or small frontends
- `functions/` — server helpers or adapters
- `db/` — PocketBase schema or exported data
- `examples/` — Alpine.js snippets, components, and small demos

Guiding principles
- Keep things minimal: prefer small libraries and clear boundaries.
- Compose, not heap: pair PocketBase for backend data with SvelteKit or plain HTML + Alpine for UI.
- Make examples runnable: include a tiny demo and clear commands.

Resources
- Alpine.js: https://alpinejs.dev
- PocketBase: https://pocketbase.io
- Svelte & SvelteKit: https://svelte.dev and https://kit.svelte.dev

Next steps
- Scaffold a `my-sveltekit-app` starter and an `examples/alpine` demo in this repo. Ask if you want me to create them now.
