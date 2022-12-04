class WebApp extends HTMLElement {
  #hasBeenMountedOnce = false;

  constructor() {
    super();
  }

  connectedCallback() {
    if (!this.#hasBeenMountedOnce) {
      this.#hasBeenMountedOnce = true;
    }
  }
}

export default WebApp;