export default function scrollToTop() {
  const btnUp = document.querySelector('.scrollToTop');

  function scrollTo(element, to = 0, duration = 1000, scrollToDone = null) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = (() => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      } else if (scrollToDone) scrollToDone();
    });
    animateScroll();
  }

  Math.easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
      btnUp.style.display = 'block';
    } else {
      btnUp.style.display = '';
    }
  });

  btnUp.onclick = () => {
    scrollTo(document.documentElement, 5, 1000, () => { console.log('Done with scrolling !!!!'); });
  };
}
