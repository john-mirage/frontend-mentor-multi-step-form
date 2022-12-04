class WebStepIndicatorItem extends HTMLLIElement {
  #hasBeenMountedOnce = false;
  #numberElement;
  #textElement;
  #titleElement;
  #nameElement;

  static get observedAttributes() {
    return ["data-number", "data-name", "data-active"];
  }

  constructor() {
    super();
    const template = <HTMLTemplateElement>document.getElementById("template-web-step-indicator-item");
    this.#numberElement = <HTMLDivElement>(<HTMLDivElement>template.content.firstElementChild).cloneNode(true);
    this.#textElement = <HTMLDivElement>(<HTMLDivElement>template.content.lastElementChild).cloneNode(true);
    this.#titleElement = <HTMLDivElement>this.#textElement.querySelector('[data-js="title"]');
    this.#nameElement = <HTMLParagraphElement>this.#textElement.querySelector('[data-js="name"]');
  }

  get number() {
    return this.dataset.number;
  }

  set number(newNumber) {
    if (newNumber) {
      this.dataset.number = newNumber;
    } else {
      this.removeAttribute("data-number");
    }
  }

  get label() {
    return this.dataset.label;
  }

  set label(newLabel) {
    if (newLabel) {
      this.dataset.label = newLabel;
    } else {
      this.removeAttribute("data-label");
    }
  }

  get active() {
    return this.hasAttribute("data-active");
  }

  set active(isActive) {
    if (isActive) {
      this.setAttribute("data-active", "");
    } else {
      this.removeAttribute("data-active");
    }
  }

  connectedCallback() {
    if (!this.#hasBeenMountedOnce) {
      this.classList.add("web-step");
      this.replaceChildren(this.#numberElement, this.#textElement);
      this.#hasBeenMountedOnce = true;
    }
  }

  attributeChangedCallback(name: string, _oldValue: string | undefined, newValue: string | undefined) {
    switch (name) {
      case "data-number": {
        this.#numberElement.textContent = newValue ?? null;
        this.#titleElement.textContent = `step ${newValue}` ?? null;
        break;
      }
      case "data-name": {
        this.#nameElement.textContent = newValue ?? null;
        break;
      }
    }
  }
}

export default WebStepIndicatorItem;