/**
 * Andrea Tino - 2018
 */

import { BrowserControl } from "./browserControl";
import { isElementInDom } from "./renderingUtils";
import { INPUT_STUB_CLASSNAME } from "./styleClasses";

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

        this._element = document.createElement("div");
        this._element.classList.add(INPUT_STUB_CLASSNAME);

        (this.parentElement || document.body).append(this._element);
    }

    public detach() {
        if (!isElementInDom(this._element)) {
            return;
        }

        this._element.parentElement.removeChild(this._element);
    }

    public get element(): HTMLElement {
        return this._element;
    }
}
