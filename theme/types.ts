import defaultTheme from './defaultTheme';
export interface Theme {
    colors: typeof defaultTheme.colors;
    typography: typeof defaultTheme.typography;
}
