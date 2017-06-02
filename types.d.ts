export interface Properties {
    [name: string]: string;
}
export interface Selectors {
    [selector: string]: Properties;
}
export interface Jss {
    /**
     * Retrieve all rules added via JSS, organized by selectors
     */
    get(): Selectors;
    /**
     * Retrieve rules added via JSS for a given selector
     * @param s CSS selector
     */
    get(s: string): Properties;
    /**
     * Retrieve all rules specified for a given selector (not necessarily added via JSS)
     * @param s CSS selector
     */
    getAll(s: string): Properties;
    /**
     * Remove all rules added via JSS
     */
    remove(): void;
    /**
     * Remove all rules added via JSS for the given selector
     */
    remove(s: string): void;
    /**
     * Add or extend an existing rule
     * @param s CSS selector
     * @param p CSS properties
     */
    set(s: string, p: Properties): void;
}
export interface StyleManagerOptions {
    jss: any;
    theme: any;
}
export interface StyleManager {
    sheetMap: Array<SheetMapping>;
    sheetOrder: Array<string>;
    setSheetOrder: (styles: Array<string>) => void;
    jss: Jss;
    theme: any;
    render: (sheet: ThemeReactorStyleSheet) => any;
    reset: () => void;
    rerender: () => void;
    getClasses: (sheet: ThemeReactorStyleSheet) => any | null;
    updateTheme: (state: any, opt?: boolean) => void;
    prepareInline: (styles: CSSStyleDeclaration | Function) => CSSStyleDeclaration;
    sheetsToString: () => string;
}
export interface ThemeReactorStyleSheet {
    name: string;
    options: any;
    createRules: (styles: any) => any;
}
export interface SheetMapping {
    name: string;
    classes: any;
    styleSheet: ThemeReactorStyleSheet;
    jssStyleSheet: StyleSheet;
}
