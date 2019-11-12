window.onload = function () {
    initBuyButtons();
};
/**
 * Wires up the "Buy" buttons
 */
function initBuyButtons() {
    var buyBtns = document.querySelectorAll("div.buy");
    for (var i = 0; i < buyBtns.length; i++) {
        var currBtn = buyBtns[i];
        currBtn.onclick = buyProduct;
    }
}
function buyProduct() {
    //Get the Buy div that was clicked
    var currBuyBtn = this;
    console.log("The Div that was clicked:");
    console.log(currBuyBtn);
    //Get the Product Div that is the parent of the buy div
    var currProductDiv = currBuyBtn.parentElement;
    console.log("The Parent Product Div of the div that was clicked:");
    console.log(currProductDiv);
    //Create new Product object and 
    //assign title from inside the product div
    var prod = new Product();
    prod.title = currProductDiv.querySelector("div.title").innerHTML;
    //assign price from inside the product div
    var price = currProductDiv.querySelector("div.price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);
    //assign description from inside the product div
    prod.description = currProductDiv.querySelector("div.description").innerHTML;
    console.log(prod);
}
/**
 * Represents a single shopping cart item
 */
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
//Test Code
/*
let prod = new Product();
prod.title = "Thing";
prod.description = "Some shit";
prod.price = 12332.43;
*/ 
