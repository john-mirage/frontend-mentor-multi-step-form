class WebStepPagination extends HTMLElement {
  #hasBeenMountedOnce = false;

  static get observedAttributes() {
    return ["data-step"];
  }

  constructor() {
    super();
    //const template = <HTMLTemplateElement>document.getElementById("template-web-step-indicator");
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
      this.replaceChildren();
      this.#hasBeenMountedOnce = true;
    }
  }

  attributeChangedCallback(name: string, _oldValue: string | undefined, _newValue: string | undefined) {
    switch (name) {
      case "data-step": {
        break;
      }
    }
  }
}

export default WebStepPagination;