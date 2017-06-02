import { ThemeReactorStyleSheet } from './types';
export declare function createStyleSheet(name: string, callback: Object | ((theme: Object) => Object), options?: {
    insertionPoint?: any;
}): ThemeReactorStyleSheet;
