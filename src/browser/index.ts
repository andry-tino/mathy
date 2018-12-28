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
    const stub = new InputStub();
    stub.render();
}
