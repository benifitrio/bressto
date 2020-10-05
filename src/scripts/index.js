import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/app-bar.css';
import App from './views/main';
import scrollToTop from './utils/scroll';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.burger'),
  drawer: document.querySelector('.sidenav'),
  content: document.querySelector('#main-content'),
  close: document.querySelector('.fa-times'),
  toggle: document.querySelector('.theme-switch input[type="checkbox"]'),
  currentTheme: localStorage.getItem('theme'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', async () => {
  await app.renderPage();
  scrollToTop();
  swRegister();
});
