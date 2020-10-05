const DarkMode = {
  init({ toggle, currentTheme }) {
    toggle.addEventListener('change', (event) => {
      this._switchTheme(event);
    });
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
        toggle.checked = true;
      }
    }
  },

  _switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  },
};

export default DarkMode;
