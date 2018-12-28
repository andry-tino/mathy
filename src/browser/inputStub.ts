/**
 * Andrea Tino - 2018
 */

import { BrowserControl } from "./browserControl";
import { isElementInDom } from "./renderingUtils";

/**
 * Represents the UI artifact for inserting content.
 */
export class InputStub implements BrowserControl {
    private parentElement: HTMLElement;
    private _element: HTMLElement;

    constructor(parent?: HTMLElement) {
        this.parentElement = parent;
        this._element = null;
    }

    public render() {
        if (isElementInDom(this._element)) {
            return;
        }

        const parent = this.parentElement || document.body;
    }

    public detach() {
        if (!isElementInDom(this._element)) {
            return;
        }

        // TODO
    }

    public get element(): HTMLElement {
        return this._element;
    }
}
