new Carousel(document.getElementById("productCarousel"), {
  Dots: false,
    Thumbs: {
      type: 'classic',
      Carousel: {
        enabled: false,
        breakpoints: {
          '(min-width: 750px)': {
            axis: 'y',
            enabled: true,
            navigation: true
          },
        },
      },
    },
}, { Thumbs });

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});