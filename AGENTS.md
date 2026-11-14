<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the imported sales page and its existing section styles; content updates stay localized to avoid layout regressions.
- Serve sales-page raster images via CDN pointers in WebP; convert original PNGs losslessly without resizing or flattening so artwork pixels and bonus transparency remain intact, and retain old assets for previous deployments.
- Apply sales-page identity through scoped semantic theme overrides in the global stylesheet; preserve imported layout utilities and interactions to prevent visual-update regressions.
- Keep offer prices and checkout destinations in a shared browser-safe offers module; derive savings from those values to prevent inconsistent pricing.
- The committed global stylesheet is prebuilt Tailwind output that the build does not regenerate, so utility classes not already present there silently do nothing; style new sections with plain CSS rules added to that file rather than new utility classes.
- Preload only the current hero image in the sales route head, matching its CDN pointer and eager/high-priority image, to avoid duplicate downloads or competition from below-fold media.
- Exception to the lossless rule: the 1672x941 slide illustrations compress to ~6x their PNG size as lossless WebP, so encode those as high-quality lossy WebP (q85) with no resizing, and keep transparency intact where the source has it.
- Keep the post-purchase upsell in its own route and scoped stylesheet, reusing existing tokens and UI controls without changing the main sales page.
- Install only supplied official Hotmart funnel snippets in the isolated upsell widget; execute scripts after hydration in source order, cancel pending work on unmount, and leave acceptance/refusal to Hotmart.
- Implement the upsell lesson carousel with Embla's continuous auto-scroll plugin and eight CDN image pointers; avoid cloned accessible slides, and control playback after hydration for reduced motion, visibility and interaction.
