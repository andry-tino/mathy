/**
 * Andrea Tino - 2018
 */

/**
 * Describes a control to be rendered on screen.
 */
export interface BrowserControl {
    element: HTMLElement;
    render(): void;
    detach(): void;
}
