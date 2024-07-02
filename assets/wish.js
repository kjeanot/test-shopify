const addToWishlistButton = document.querySelector('#wish');
const productId = addToWishlistButton.dataset.product;
const wishlist= JSON.parse(localStorage.getItem("wishlist")) ?? [];

console.log(wishlist);




const wish = {

  init: function() {

    addToWishlistButton.addEventListener('click', wish.handleClick);

    wish.isInWishlist(productId);
   
  },

  handleClick: function(evt) {

    let updatedWishlist = [];
    console.log(productId);
    
    if (wish.isInWishlist(productId)) {
      console.log('in wishlist');
      addToWishlistButton.classList.remove('in-wishlist');
      updatedWishlist = wishlist.map(el => el != productId ? el : '');
    } else {
      console.log('not in wishlist');
      addToWishlistButton.classList.add('in-wishlist');
      updatedWishlist.push(productId);
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    wish.isInWishlist(productId);
  
  },

  isInWishlist: function(id) {
    if (!wishlist.includes(id)) {
      return false;
    }
    return true;
  }

}

wish.init();
wish.isInWishlist(productId);