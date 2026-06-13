# Theme System

This portfolio uses one visual style: the retro pixel theme. The only supported color schemes are light and dark.

## Source Files

- `src/lib/theme-config.ts` defines the pixel light and pixel dark token sets.
- `src/lib/generate-theme-css.ts` can turn those token sets into CSS custom properties.
- `src/app/globals.css` contains the active CSS variables and pixel-specific utility classes.
- `src/components/theme-switcher.tsx` toggles between light and dark mode through `next-themes`.

## CSS Selectors

The light scheme is defined on `:root`.

The dark scheme is defined on `.dark`, which is managed by `next-themes`.

There is no secondary style selector or style toggle.

## Token Groups

- Colors: backgrounds, text, accent, border, overlays, timeline, and skill badges.
- Spacing: border widths, shadow offset, and scrollbar width.
- Typography: pixel font weights.
- Visuals: square timeline dots and pixelated image rendering.

When changing the look, update `src/lib/theme-config.ts` first, then mirror the active variables in `src/app/globals.css` if the generator is not wired into the build.
