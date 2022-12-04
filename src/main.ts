import "./main.css";
import WebApp from "@components/web-app";
import WebStep from "@components/web-step";

customElements.define("web-app", WebApp);
customElements.define("web-step", WebStep, { extends: "li" });

const app = document.getElementById("app");
const webApp = document.createElement("web-app");
app?.replaceChildren(webApp);
