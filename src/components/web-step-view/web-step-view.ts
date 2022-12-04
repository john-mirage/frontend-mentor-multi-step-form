class WebStepView extends HTMLElement {
  #hasBeenMountedOnce = false;
  #containerElement;
  #titleElement;
  #subtitleElement;

  static get observedAttributes() {
    return ["data-step"];
  }

  constructor() {
    super();
    const template = <HTMLTemplateElement>document.getElementById("template-web-step-view");
    this.#containerElement = <HTMLElement>(<HTMLElement>template.content.firstElementChild).cloneNode(true);
    this.#titleElement = <HTMLHeadingElement>this.#containerElement.querySelector('[data-js="title"]');
    this.#subtitleElement = <HTMLParagraphElement>this.#containerElement.querySelector('[data-js="subtitle"]');
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

  handleTitle(newStep: string) {
    switch (newStep) {
      case "1": {
        this.#titleElement.textContent = "Personal info";
        break;
      }
      case "2": {
        this.#titleElement.textContent = "Select your plan";
        break;
      }
      case "3": {
        this.#titleElement.textContent = "Pick add-ons";
        break;
      }
      case "4": {
        this.#titleElement.textContent = "Finishing up";
        break;
      }
      default: {
        throw new Error("The step number is not valid");
      }
    }
  }

  handleSubtitle(newStep: string) {
    switch (newStep) {
      case "1": {
        this.#subtitleElement.textContent = "Please provide your name, email address, and phone number.";
        break;
      }
      case "2": {
        this.#subtitleElement.textContent = "You have the option of monthly or yearly billing.";
        break;
      }
      case "3": {
        this.#subtitleElement.textContent = "Add-ons help enhance your gaming experience.";
        break;
      }
      case "4": {
        this.#subtitleElement.textContent = "Double-check everything looks OK before confirming.";
        break;
      }
      default: {
        throw new Error("The step number is not valid");
      }
    }
  }

  connectedCallback() {
    if (!this.#hasBeenMountedOnce) {
      this.classList.add("web-view");
      this.replaceChildren(this.#containerElement);
      this.#hasBeenMountedOnce = true;
    }
  }

  attributeChangedCallback(name: string, _oldValue: string | undefined, newValue: string | undefined) {
    switch (name) {
      case "data-step": {
        if (typeof newValue === "string") {
          this.handleTitle(newValue);
          this.handleSubtitle(newValue);
        } else {
          this.#titleElement.textContent = null;
          this.#subtitleElement.textContent = null;
        }
        break;
      }
    }
  }
}

export default WebStepView;