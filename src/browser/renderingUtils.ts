/**
 * Andrea Tino - 2018
 */

export function isElementInDom(element: HTMLElement): boolean {
    return !!element && !!element.parentElement;
}
