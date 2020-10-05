class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            width: 100%;
            text-align: center;
            font-size: 1.6rem;
            padding: 1rem 0 2.4rem!important;
            color:var(--font-color);
            transition: .5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }


        </style>
        <hr>
        <p>Bressto PWA <br> designed by ❤️ Beni</p>
        `;
  }
}

customElements.define('my-footer', MyFooter);
