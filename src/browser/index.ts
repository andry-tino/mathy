const os = require("os");

window.addEventListener("load", (e) => {
    document.body.textContent = "Hi " + os.constants.UV_UDP_REUSEADDR;
});