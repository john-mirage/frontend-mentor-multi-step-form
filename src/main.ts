import "./main.css";
import WebApp from "@components/web-app";

customElements.define("web-app", WebApp);

const app = document.getElementById("app");
const webApp = document.createElement("web-app");
app?.replaceChildren(webApp);
