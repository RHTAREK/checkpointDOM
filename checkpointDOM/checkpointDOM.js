


// Get the like buttons
  var switchcolor = document.getElementsByClassName('btn-like')
  for (var i = 0 ;i < switchcolor.length;i++){
    var button = switchcolor[i]
  button.addEventListener('click', likeClicked)
  function likeClicked() {
 if (this.style.backgroundColor === 'black'){
    this.style.backgroundColor = 'red';}
else{this.style.backgroundColor = 'black';}
}}
// Delete a product
// Get the delete buttons
let deleteBtn = document.querySelectorAll('.btn-delete');
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
    deleteBtn[i].parentElement.parentElement.remove();

    // Update the total price
    totalPrice();
  });
}
// Add Quantity
// Get the plus buttons
var plusBtn = document.getElementsByClassName('btn-plus');
for (let i = 0 ; i < plusBtn.length ; i++) {
  plusBtn[i].addEventListener('click', function () {
    plusBtn[i].previousElementSibling.innerText++;

    // Update the total price
    totalPrice();
  });
}// Dimune Quantity
// Get the minus buttons
let minusBtn = document.getElementsByClassName('btn-moins');
for (let i = 0 ; i < minusBtn.length ; i++) {
    minusBtn[i].addEventListener('click', function () {
    if (minusBtn[i].nextElementSibling.innerText > 0) {
        minusBtn[i].nextElementSibling.innerText--;
    }

    // Update the total price
    totalPrice();
  });
}
// Calculate the total price
function totalPrice() {
    // Get the product price
    let productPrice = document.getElementsByClassName('prx');
    // Get the product quantity
    let productQuantity = document.getElementsByClassName('quantity');
    // Initilize the sum
    let sum = 0;
    for (let i = 0; i < productPrice.length; i++) {
      sum = productPrice[i].innerText * productQuantity[i].innerText;
    }
    document.getElementById('prix-total').innerText = sum;
  }