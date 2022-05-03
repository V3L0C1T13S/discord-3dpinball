import RikkaPlugin from "@rikka/Common/entities/Plugin";

export default class pinball extends RikkaPlugin {
    Manifest = {
        name: "3dpinball",
        description: "3dpinball",
        version: "0.0.1",
        license: "GPL-3.0",
        author: "V3L0C1T13S",
        dependencies: [],
    };

    inject() {
        // First we need to create a iframe
        const iframe = document.createElement("iframe");
        iframe.src = "https://alula.github.io/SpaceCadetPinball/";
        iframe.style.top = "0";
        iframe.style.right = "0";
        iframe.style.position = "fixed";
        iframe.style.cursor = "pointer";
        iframe.style.zIndex = "1000";
        iframe.style.width = "50%";
        iframe.style.height = "50%";
        document.body.appendChild(iframe);
    }
}