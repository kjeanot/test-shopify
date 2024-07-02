new Carousel(document.getElementById("productCarousel"), {
  Dots: false,
    Thumbs: {
      type: 'classic',
      Carousel: {
        axis: 'x',
        breakpoints: {
          '(min-width: 750px)': {
            axis: 'y',
          },
        },
      },
    },
}, { Thumbs });

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});