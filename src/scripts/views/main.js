import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../router/url-parser';
import routes from '../router/routes';
import DarkMode from '../utils/dark-mode';
import '../component/App-bar';
import '../component/myFooter';
import '../component/hero';

class App {
  constructor({
    button, drawer, content, close, toggle, currentTheme,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._close = close;
    this._toggle = toggle;
    this._currentTheme = currentTheme;

    this._initialAppShell();
    this._initialDarkMode();
  }

  _initialDarkMode() {
    DarkMode.init({
      toggle: this._toggle,
      currentTheme: this._currentTheme,
    });
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      close: this._close,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
