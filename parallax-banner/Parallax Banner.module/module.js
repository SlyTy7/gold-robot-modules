(() => {
  const init = () => {
    window.goldrobot ? window.goldrobot : window.goldrobot = {};
    window.goldrobot.banners ? window.goldrobot.banners : window.goldrobot.banners = [];

    findBanners();
    addScrollListener();
    parallaxBanners();
  };

  const findBanners = () => {
    const banners = document.querySelectorAll(".gr-parallax-banner");

    if (!banners.length) return false;

    banners.forEach((banner, index) => {
      const bannerObj = {
        id: banner.id,
        index: index,
        element: banner
      };
      window.goldrobot.banners.push(bannerObj);
    });
  };

  const addScrollListener = () => {
    window.addEventListener("scroll", e => {
      parallaxBanners();
    });
  };

  const parallaxBanners = () => {
    const banners = window.goldrobot.banners;
    const scrollPosition = window.scrollY;
    const parallaxPos = scrollPosition / 4;

    banners.forEach((banner, index) => {
      const element = document.querySelector(`#${banner.id}`);

      element.style.backgroundPosition = `center ${parallaxPos}px`;
    });
  }

  return init();
})()