class WebApp extends HTMLElement {
  #hasBeenMountedOnce = false;
  readonly #headerElement;
  readonly #bodyElement;

  constructor() {
    super();
    const template = <HTMLTemplateElement>document.getElementById("template-web-app");
    this.#headerElement = (<HTMLElement>template.content.firstElementChild).cloneNode(true);
    this.#bodyElement = (<HTMLDivElement>template.content.lastElementChild).cloneNode(true);
  }

  connectedCallback() {
    if (!this.#hasBeenMountedOnce) {
      this.classList.add("web-app");
      this.replaceChildren(this.#headerElement, this.#bodyElement);
      this.#hasBeenMountedOnce = true;
    }
  }
}

export default WebApp;