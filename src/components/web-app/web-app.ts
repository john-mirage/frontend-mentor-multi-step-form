class WebApp extends HTMLElement {
  #hasBeenMountedOnce = false;
  #headerElement;
  #bodyElement;
  #webStepIndicator;
  #webStepView;
  #webStepPagination;

  static get observedAttributes() {
    return ["data-step"];
  }

  constructor() {
    super();
    const template = <HTMLTemplateElement>document.getElementById("template-web-app");
    this.#headerElement = <HTMLElement>(<HTMLElement>template.content.firstElementChild).cloneNode(true);
    this.#bodyElement = <HTMLDivElement>(<HTMLDivElement>template.content.lastElementChild).cloneNode(true);
    this.#webStepIndicator = <HTMLElement>this.#headerElement.querySelector("web-step-indicator");
    this.#webStepView = <HTMLElement>this.#bodyElement.querySelector("web-step-view");
    this.#webStepPagination = <HTMLElement>this.#bodyElement.querySelector("web-step-pagination");
  }

  get step() {
    return this.dataset.step;
  }

  set step(newStep) {
    if (newStep) {
      this.dataset.step = newStep;
    } else {
      this.removeAttribute("data-step");
    }
  }

  connectedCallback() {
    if (!this.#hasBeenMountedOnce) {
      this.classList.add("web-app");
      this.step = "1";
      this.replaceChildren(this.#headerElement, this.#bodyElement);
      this.#hasBeenMountedOnce = true;
    }
  }

  attributeChangedCallback(name: string, _oldValue: string | undefined, newValue: string | undefined) {
    switch (name) {
      case "data-step": {
        this.#webStepIndicator.dataset.step = newValue;
        this.#webStepView.dataset.step = newValue;
        this.#webStepPagination.dataset.step = newValue;
        break;
      }
    }
  }
}

export default WebApp;