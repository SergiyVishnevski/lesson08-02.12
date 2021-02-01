const images = document.querySelectorAll(".section img");

const lazyLoad = (target) => {
  const options = { rootMargin: "30px 0px" };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const imagesURL = img.dataset.lazy;
        // img.setAttribute("src", imagesURL);
        img.src = imagesURL;
        img.classList.add("fade-in");
        observer.disconnect();
      }
    });
  }, options);
  io.observe(target);
};

images.forEach((image) => lazyLoad(image));
