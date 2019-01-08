/**
 * Andrea Tino - 2018
 */

import * as interact from "interactjs";
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

        interact(this._element).draggable({
            onmove: e => null,
            restrict: {
                restriction: "parent",
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
        }).resizable({
            // resize from all edges and corners
            edges: { left: true, right: true, bottom: true, top: true },

            // keep the edges inside the parent
            restrict: {
                restriction: "parent",
                endOnly: true,
            },

            inertia: true,
        }).on("resizemove", event => {
            const target = event.target;
            let x = (parseFloat(target.getAttribute("data-x")) || 0);
            let y = (parseFloat(target.getAttribute("data-y")) || 0);

            // update the element"s style
            target.style.width = event.rect.width + "px";
            target.style.height = event.rect.height + "px";

            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;

            target.style.webkitTransform = target.style.transform =
                "translate(" + x + "px," + y + "px)";

            target.setAttribute("data-x", x);
            target.setAttribute("data-y", y);
        });

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
