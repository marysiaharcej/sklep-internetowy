
// ***************************************************************
// SHOPPING CART FUNCTION
var ShoppingCart = {};
ShoppingCart.cart = [];

ShoppingCart.Item = function (name, price, count) {
  this.name= name
  this.price = price
  this.count = count
};


ShoppingCart.addItemToCart = function(name, price, count) {
  for(var i in this.cart) {
    if (this.cart[i].name === name) {
      this.cart[i].count += count;
      this.saveCart();
      return;
    }
  }
  var item = new this.Item(name, price, count);
  this.cart.push(item);
  this.saveCart();
 }

ShoppingCart.setCountForItem = function(name, count){
  for (var i in this.cart) {
    if (this.cart[i].name === name) {
      this.cart[i].count = count;
      break;
    }
  }
  this.saveCart();
}

ShoppingCart.removeItemFromCart = function(name){
 for (var i in this.cart) {
  if (this.cart[i].name === name) {
      this.cart[i].count --;
      if(this.cart[i].count === 0) {
        this.cart.splice(i, 1); //remove this item from cart
      }
      break;
  }
 }
 this.saveCart();
}

ShoppingCart.removeItemFromCartAll = function(name){
  for (var i in this.cart) {
    if (this.cart[i].name === name) {
      this.cart.splice(i, 1);
      break;
    }
  }
  this.saveCart();
}

ShoppingCart.clearCart = function() {
  this.cart=[];
  this.saveCart();
}

ShoppingCart.countCart = function() { //return total count. How many items i have in the cart
var totalCount = 0;
for (var i in this.cart) {
 totalCount += this.cart[i].count;
}
return totalCount;
};

ShoppingCart.totalCart = function() { //total cost of the entire cart
 var totalCost = 0;
 for (var i in this.cart) {
  totalCost += this.cart[i].price * this.cart[i].count;
 }
 return totalCost.toFixed(2); //zwraca string zamiast number aby nie zepsuć liczby na jakąś z 10,77777777 czy coś - zaokrągla to do ile miejsc
};

ShoppingCart.listCart = function() { // kopia koszyka na której możemy działac bez wpływania na koszyk podstawowy
//aray of all items for which we will create programm to generate html to add to our page
//helps with debbuging, shows array in console
  var cartCopy = [];
  for (var i in this.cart) {
    var item = this.cart[i];
    var itemCopy = {};
      for (var p in item) {
        itemCopy[p] = item[p];
      }  //loop through every property
    itemCopy.total = (item.price * item.count).toFixed(2);
    cartCopy.push(itemCopy);
  }
  return cartCopy;
};


ShoppingCart.saveCart = function(){
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
    // json converts objects to string
    //zapisujemy koszyk za każdym razem gdy coś się w nim zmieni
};

ShoppingCart.loadCart =function(){
  this.cart= JSON.parse(localStorage.getItem("shoppingCart"));
};


ShoppingCart.loadCart();
displayCart();
