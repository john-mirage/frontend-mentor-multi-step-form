import "./main.css";
import WebApp from "@components/web-app";
import WebStepIndicator from "@components/web-step-indicator";
import WebStepIndicatorItem from "@components/web-step-indicator-item";
import WebStepView from "@components/web-step-view";
import WebStepPagination from "@components/web-step-pagination";
import WebStepPaginationButton from "@components/web-step-pagination-button";

customElements.define("web-app", WebApp);
customElements.define("web-step-indicator", WebStepIndicator);
customElements.define("web-step-indicator-item", WebStepIndicatorItem);
customElements.define("web-step-view", WebStepView);
customElements.define("web-step-pagination", WebStepPagination);
customElements.define("web-step-pagination-button", WebStepPaginationButton);

const app = document.getElementById("app");
const webApp = document.createElement("web-app");
app?.replaceChildren(webApp);
