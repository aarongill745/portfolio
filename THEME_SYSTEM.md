# Theme System Documentation

## Overview

The portfolio now uses a **centralized, type-safe theme system** that makes it trivial to extend themes without cross-contamination between aesthetic modes (pixel vs brutal) and color schemes (light vs dark).

## Architecture

### 1. Single Source of Truth: `src/lib/theme-config.ts`

All theme values are defined in TypeScript configuration objects. Each theme combination (pixel-light, pixel-dark, brutal-light, brutal-dark) has its own complete configuration.

**Key benefits:**
- Type-safe theme tokens with autocomplete
- No duplicate CSS variable definitions
- Easy to extend with new themes
- Clear separation between theme modes

### 2. CSS Variable Generation: `src/lib/generate-theme-css.ts`

Utility functions that convert TypeScript theme configs into CSS custom properties. While not currently auto-generated in the build, this provides the foundation for future automation.

### 3. Global Styles: `src/app/globals.css`

Organized into clear sections:
- **Theme CSS Variables**: CSS custom properties for all themes
- **Tailwind Theme Extension**: Maps theme vars to Tailwind utilities
- **Typography System**: Adaptive font weights and families
- **Visual Effects**: Aesthetic-specific treatments (grid backgrounds, etc.)
- **Utility Classes**: Reusable components (`.pixel-border`, `.pixel-button`)
- **Scrollbar Styling**: Theme-aware scrollbars

### 4. Component Utilities: `src/lib/theme-utils.ts`

Helper functions for building theme-responsive components:

```typescript
// Conditional classes based on aesthetic mode
themeAwareClass({
  base: 'p-4 border',
  pixel: 'rounded-sm text-sm',
  brutal: 'rounded-none font-bold'
})

// Pre-built component variants
themeVariants.card  // Adaptive card styling
themeVariants.button  // Adaptive button styling
```

## Adding a New Theme

### Step 1: Define Theme Config

Edit `src/lib/theme-config.ts`:

```typescript
const cyberpunkLight: ThemeTokens = {
  colors: {
    background: '#0a0e27',
    foreground: '#00ffff',
    main: '#ff00ff',
    // ... all required tokens
  },
  spacing: {
    borderWidth: '3px',
    // ...
  },
  // ...
}

// Add to registry
export const themes = {
  pixel: { light: pixelLight, dark: pixelDark },
  brutal: { light: brutalLight, dark: brutalDark },
  cyberpunk: { light: cyberpunkLight, dark: cyberpunkDark }, // NEW
}
```

### Step 2: Add CSS Variables

Edit `src/app/globals.css`:

```css
/* Cyberpunk light theme */
[data-aesthetic="cyberpunk"] {
  --background: #0a0e27;
  --foreground: #00ffff;
  --main: #ff00ff;
  /* ... all variables from theme config */
}

/* Cyberpunk dark theme */
[data-aesthetic="cyberpunk"].dark {
  /* ... dark variant */
}
```

### Step 3: Update Type Definition

Edit `src/lib/theme-config.ts`:

```typescript
export type ThemeMode = 'pixel' | 'brutal' | 'cyberpunk' // Add new mode
```

### Step 4: Update Aesthetic Provider

Edit `src/components/aesthetic-provider.tsx` to support the new mode in the type definition and toggle logic (if needed).

That's it! Your new theme now works across the entire app.

## Component Best Practices

### ✅ DO: Use CSS Variables and Tailwind Utilities

```tsx
<div className="bg-secondary-background text-foreground border-border">
  <h1 className="text-main">Hello</h1>
</div>
```

### ✅ DO: Use Theme-Aware Classes

```tsx
<div className={themeAwareClass({
  base: 'p-4',
  pixel: 'rounded text-sm',
  brutal: 'rounded-none font-bold'
})}>
  Content
</div>
```

### ❌ DON'T: Hardcode Colors

```tsx
// BAD
<div className="bg-[#facc15] border-black">

// GOOD
<div className="bg-main border-border">
```

### ❌ DON'T: Use Inline Styles for Theme Values

```tsx
// BAD
<div style={{ backgroundColor: '#facc15' }}>

// GOOD
<div className="bg-main">
// OR if inline is necessary:
<div style={{ backgroundColor: 'var(--main)' }}>
```

### ❌ DON'T: Mix Hardcoded and Variable Values

```tsx
// BAD
<div className="border-2 border-black shadow-[4px_4px_0px_0px_#000]">

// GOOD
<div className="border-border" style={{ borderWidth: 'var(--border-width)' }}>
```

## CSS Variable Reference

### Colors
- `--background` - Primary background
- `--secondary-background` - Cards, elevated surfaces
- `--foreground` - Primary text color
- `--main` - Primary accent color
- `--accent` - Secondary accent
- `--border` - Border color
- `--ring` - Focus ring color
- `--overlay` - Modal/overlay background

### Timeline-Specific
- `--timeline-connector` - Timeline line color
- `--timeline-border` - Timeline dot border
- `--company-title-color` - Company name color

### Skill Badges
- `--skill-bg` - Badge background
- `--skill-text` - Badge text
- `--skill-border` - Badge border

### Spacing
- `--border-width` - Standard border width (2px pixel, 4px brutal)
- `--button-border-width` - Button borders
- `--shadow-offset` - Shadow distance
- `--scrollbar-width` - Scrollbar size

### Typography
- `--font-weight-base` - Body text weight
- `--font-weight-heading` - Heading weight

### Visual
- `--dot-radius` - Timeline dot shape (0% pixel, 50% brutal)
- `--shadow` - Complete box-shadow value
- `--image-rendering` - Pixel art rendering mode

## Tailwind Utilities

All CSS variables are available as Tailwind utilities:

```tsx
<div className="bg-main text-foreground border-border">
  <div className="bg-skill-bg text-skill-text border-skill-border">
    Badge
  </div>
</div>
```

## Future Enhancements

1. **Auto-generate CSS from TypeScript**: Build script to generate `globals.css` theme blocks from `theme-config.ts`
2. **Theme preview tool**: Dev-only UI to visualize all themes side-by-side
3. **Dynamic theme switching**: Runtime theme injection without page reload
4. **Theme composition**: Mix and match color schemes with different aesthetic modes
5. **Custom properties export**: Generate TypeScript types from CSS variables for full type safety

## Maintenance Notes

- When adding new theme tokens, update both `ThemeTokens` interface and all theme objects
- Keep CSS variable names consistent with TypeScript config keys
- Test all theme combinations when adding new components
- Document any component-specific overrides in `globals.css`
