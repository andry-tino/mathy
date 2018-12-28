/**
 * Andrea Tino - 2018
 */

import { InputStub } from "./inputStub";

// Start
window.addEventListener("load", (e) => {
    initialize();
});

function initialize() {
    attachBrowserEvents();
}

function attachBrowserEvents() {
    window.addEventListener("click", () => {
        onBodyClicked();
    });
}

function onBodyClicked() {
    document.body.textContent += "A";
    const a: interact.Position = null;
    const b: InputStub = new InputStub();
}
