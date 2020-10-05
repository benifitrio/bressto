class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
              <nav class="sidenav" id="mobile-nav" >
                <a href="#" class="brand" aria-label="logo">
                    Bresto
                    <label class="fas fa-times"></label>
                </a>
                <ul aria-label="navigasi" tabindex="0">
                    <li><i class="fas fa-home"></i><a href="#/home">Home</a></li>
                    <li><i class="fas fa-heart"></i><a href="#/favorite">Favorites</a></li>
                    <li><i class="fas fa-question"></i><a href="https://github.com/beni1999">About Us</a></li>
                </ul>
            </nav>
            <nav class="top-nav" id="desktop-nav">
                <div class="container">
                    <button class="burger" tabindex="0" aria-label="button navigasi">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="logo">
                        <a href="#">
                            Bresto
                        </a>
                    </div>
                    <ul id="top-hidden">
                        <li><a href="#/home"  class="nav-link" >Home</a></li>
                        <li><a href="#/favorite" class="nav-link">Favorites</a>
                        </li>
                        <li><a href="https://github.com/beni1999"  class="nav-link">About Us</a></li>
                    </ul>
                    <div>
                        <button class="mode" tabindex="0" aria-label="klik untuk mengaktifkan mode dark atau light">
                            <label  class="theme-switch" for="check">
                                <input type="checkbox" id="check">
                                <div class="slider round"></div>
                            </label>
                        </button>
                    </div>
                </div>
            </nav>`;
  }
}

customElements.define('app-bar', AppBar);
