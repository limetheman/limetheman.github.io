# Portfolio development guide

## Mission

Maintain `limetheman.github.io` as a fast, accessible portfolio that clearly communicates Liem Tran's experience and projects. Prefer focused changes that improve the visitor experience over speculative abstractions.

## Technology baseline

- Write all new application code in TypeScript. Use `.tsx` for React components and `.ts` elsewhere.
- Use the latest stable releases of TypeScript and React when starting a migration or adding dependencies. For supporting tools, use the latest stable version compatible with the framework and its plugins. Never use preview, canary, beta, or release-candidate versions unless the task explicitly requires one.
- Use the Next.js App Router. Prefer Server Components and add `'use client'` only where browser APIs, state, or event handlers require it.
- Keep the application compatible with `output: 'export'`; do not use features that require a persistent Next.js server.
- Use functional React components and hooks. Keep components small, name them with PascalCase, and avoid default exports named `index`.
- Keep portfolio content in typed data modules rather than duplicating it inside view components.
- Prefer the platform and existing dependencies. Add a dependency only when it removes meaningful complexity and is maintained, compatible, and necessary.

## GitHub Pages constraints

- The production origin is `https://limetheman.github.io` and the site is served from the root path.
- The output must remain a static site; do not depend on a persistent application server or server-only runtime.
- Treat `out/` as generated deployment output and never edit it directly.
- Use root-relative public asset paths such as `/image.png` unless the build tool imports the asset.
- Never commit secrets. Browser-side environment values are public by definition.
- Before changing routing, verify that direct navigation and refresh behavior work on GitHub Pages.

## Quality rules

- Prettier is the formatting authority. Run `npm run format:check` before finishing a change; use `npm run format` to apply formatting.
- Run `npm run typecheck` for TypeScript changes and `npm run build` for behavior or dependency changes.
- Add or update tests for behavior with meaningful branching, user interaction, or regressions.
- Preserve semantic HTML, keyboard navigation, visible focus states, useful alternative text, and sufficient color contrast.
- Avoid `any`, non-null assertions, hidden side effects, and premature memoization. Model uncertain external data with explicit types and validation.
- Remove debug logging and dead imports before completing work.

## Working agreement for Codex

1. Inspect nearby code and repository status before editing.
2. State assumptions when requirements affect content, design, URLs, or deployment behavior.
3. Keep edits within the requested scope and preserve unrelated user changes.
4. Prefer the smallest coherent implementation, then verify it with the quality commands above.
5. Report what changed, what was verified, and any remaining risk or follow-up.

## Definition of done

A change is complete when it is formatted, type-safe for the touched TypeScript surface, production-buildable, accessible for its primary interaction, free of secrets/debug output, and documented when it changes the development workflow.
