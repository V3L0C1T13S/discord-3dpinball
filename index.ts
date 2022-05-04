import RikkaPlugin from "@rikka/Common/entities/Plugin";
import manifest from "./manifest.json";

export default class pinball extends RikkaPlugin {
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