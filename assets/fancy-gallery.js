const container = document.getElementById("productCarousel");
const options = { 
  Thumbs: {
    type: "classic",
  },
 };

new Carousel(container, options);

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});