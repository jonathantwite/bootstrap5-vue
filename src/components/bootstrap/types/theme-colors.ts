export const ALL_THEME_COLORS = [
    'primary',
    'secondary',
    'success', 
    'danger', 
    'warning',
    'info',
    'light', 
    'dark'
] as const;

export type ThemeColor = typeof ALL_THEME_COLORS[number];
    