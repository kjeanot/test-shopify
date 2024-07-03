const addToWishlistButton = document.querySelector('#wish');

let product;

if (addToWishlistButton) {

const productId = addToWishlistButton.dataset.product;
const productTitle = addToWishlistButton.dataset.productTitle;
const productUrl = addToWishlistButton.dataset.productUrl;
const productImage = addToWishlistButton.dataset.productImage;

product = {
  id: productId,
  title: productTitle,
  url: productUrl,
  image: productImage
};

}

const wishlistContainer = document.querySelector('.wishlist-container');

const wish = {

  init: function() {

    if (addToWishlistButton) {
      addToWishlistButton.addEventListener('click', wish.handleClick);
      wish.isInWishlist(product.id);
    }
    
    if(wishlistContainer) {
      wish.displayWishlist();
    }
    console.log(wishlistContainer);
   
  },

  list: JSON.parse(localStorage.getItem("wishlist")) ?? [],

  handleClick: function(evt) {
    
    if (wish.isInWishlist(product.id)) {
      
      addToWishlistButton.classList.remove('in-wishlist');

      wish.list = wish.list.filter(el => el.id !== product.id);
    }

    else {
      wish.list.push(product);
    }

    wish.list ? localStorage.setItem("wishlist", JSON.stringify(wish.list)) : [];
    wish.isInWishlist(product.id);
  
  },

  isInWishlist: function(productId) {

    let result = false;

    wish.list.forEach(el => {
      if(el.id === productId) {
        addToWishlistButton.classList.add('in-wishlist');
        result = true;
      }
    });
    
    return result;
  },

  displayWishlist: function() {

      wish.list.forEach(el => {

      const product = document.createElement('div');

      const productUrlNode = document.createElement('a');
      productUrlNode.href = el.url;

      const productImageNode = document.createElement('img');
      productImageNode.src = el.image;

      const productTitleNode = document.createElement('h3');
      productTitleNode.textContent = el.title;

      product.classList.add('product');
      product.appendChild(productUrlNode);

      productUrlNode.appendChild(productImageNode);
      productUrlNode.appendChild(productTitleNode);

      wishlistContainer.appendChild(product);
    });



  },

}

wish.init();