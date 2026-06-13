/**
 * Theme Configuration System
 *
 * This is the single source of truth for all theme values.
 * Each theme is a complete, isolated configuration that defines:
 * - Colors (backgrounds, foregrounds, accents)
 * - Spacing (borders, shadows, offsets)
 * - Typography (weights, families)
 * - Visual style (border radius, image rendering)
 */

export type ThemeMode = 'pixel'
export type ColorScheme = 'light' | 'dark'

/**
 * Complete theme token definition
 */
export interface ThemeTokens {
  // Color tokens
  colors: {
    background: string
    secondaryBackground: string
    foreground: string
    mainForeground: string
    main: string
    accent: string
    border: string
    ring: string
    overlay: string

    // Timeline-specific colors
    timelineConnector: string
    timelineBorder: string
    companyTitle: string

    // Skill badge colors
    skillBg: string
    skillText: string
    skillBorder: string

    // Grid background (pixel mode only)
    grid?: string

    // Pixel mode vibrant colors
    pixelGold?: string
    pixelPurple?: string
    pixelCyan?: string
    pixelPink?: string
    pixelOrange?: string
    pixelYellow?: string
    pixelRed?: string
    pixelBlue?: string
  }

  // Spacing tokens
  spacing: {
    borderWidth: string
    buttonBorderWidth: string
    shadowOffset: string
    scrollbarWidth: string
  }

  // Shadow tokens
  shadows: {
    default: string
  }

  // Typography tokens
  typography: {
    weightBase: string
    weightHeading: string
    fontFamily: string
  }

  // Visual style tokens
  visual: {
    borderRadius: string
    dotRadius: string
    imageRendering?: string
  }
}

/**
 * Pixel Light Theme
 */
const pixelLight: ThemeTokens = {
  colors: {
    background: '#f8f9ff',
    secondaryBackground: '#ffffff',
    foreground: '#1a1a2e',
    mainForeground: '#000000',
    main: '#ffd700',
    accent: '#ff6b35',
    border: '#2d2d44',
    ring: '#ffd700',
    overlay: 'rgba(255, 255, 255, 0.9)',
    timelineConnector: '#91a3c2',
    timelineBorder: '#2d2d44',
    companyTitle: '#91a3c2',
    skillBg: '#ffd700',
    skillText: '#000000',
    skillBorder: '#2d2d44',
    grid: 'rgba(45, 45, 68, 0.1)',

    // Vibrant pixel colors
    pixelGold: '#ffd700',
    pixelPurple: '#9d4edd',
    pixelCyan: '#00d9ff',
    pixelPink: '#ff006e',
    pixelOrange: '#ff6b35',
    pixelYellow: '#FFDB58',
    pixelRed: '#FF4911',
    pixelBlue: '#3300FF',
  },
  spacing: {
    borderWidth: '2px',
    buttonBorderWidth: '2px',
    shadowOffset: '2px',
    scrollbarWidth: '16px',
  },
  shadows: {
    default: '2px 2px 0px 0px',
  },
  typography: {
    weightBase: '400',
    weightHeading: '400',
    fontFamily: 'var(--font-pixel)',
  },
  visual: {
    borderRadius: '4px',
    dotRadius: '0%',
    imageRendering: 'pixelated',
  },
}

/**
 * Pixel Dark Theme
 */
const pixelDark: ThemeTokens = {
  colors: {
    background: '#090a12',
    secondaryBackground: '#151622',
    foreground: '#f2f0ff',
    mainForeground: '#05060d',
    main: '#58f5ff',
    accent: '#d64cff',
    border: '#38415f',
    ring: '#58f5ff',
    overlay: 'rgba(9, 10, 18, 0.9)',
    timelineConnector: '#38415f',
    timelineBorder: '#58f5ff',
    companyTitle: '#f4c95d',
    skillBg: '#211b35',
    skillText: '#58f5ff',
    skillBorder: '#d64cff',
    grid: 'rgba(88, 245, 255, 0.08)',

    // Neo-noir pixel colors
    pixelGold: '#f4c95d',
    pixelPurple: '#8d5cff',
    pixelCyan: '#58f5ff',
    pixelPink: '#d64cff',
    pixelOrange: '#ff8a3d',
    pixelYellow: '#f4c95d',
    pixelRed: '#ff4f6d',
    pixelBlue: '#4f7dff',
  },
  spacing: {
    borderWidth: '2px',
    buttonBorderWidth: '2px',
    shadowOffset: '2px',
    scrollbarWidth: '16px',
  },
  shadows: {
    default: '2px 2px 0px 0px',
  },
  typography: {
    weightBase: '400',
    weightHeading: '400',
    fontFamily: 'var(--font-pixel)',
  },
  visual: {
    borderRadius: '4px',
    dotRadius: '0%',
    imageRendering: 'pixelated',
  },
}

/**
 * Theme registry - maps theme combinations to their configurations
 */
export const themes = {
  pixel: {
    light: pixelLight,
    dark: pixelDark,
  },
} as const

/**
 * Get theme configuration for a specific mode and color scheme
 */
export function getThemeConfig(mode: ThemeMode, colorScheme: ColorScheme): ThemeTokens {
  return themes[mode][colorScheme]
}

/**
 * Helper to get all theme modes
 */
export const themeModes: ThemeMode[] = ['pixel']

/**
 * Helper to get all color schemes
 */
export const colorSchemes: ColorScheme[] = ['light', 'dark']
