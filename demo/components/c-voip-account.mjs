
window.customElements.define('c-voip-account',
class extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.querySelector('[data-component=c-voip-account]');
    this.appendChild(template.content.cloneNode(true));

    const registerBtn = this.querySelector('[data-selector=register]');
    const unregisterBtn = this.querySelector('[data-selector=unregister]');
    const reconfigureBtn = this.querySelector('[data-selector=reconfigure]');
  }
});
