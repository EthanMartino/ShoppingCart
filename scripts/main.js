window.onload = function () {
    initBuyButtons();
    displayNumberOfItems();
    var cartIcon = document.querySelector("div#shopping-cart");
    cartIcon.onclick = showCartContents;
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
    var currBtn = this;
    var prod = getProduct(currBtn);
    saveProductToCart(prod);
    displayNumberOfItems();
}
/**
 * Create a Product object from the webpage from the currently selected product
 */
function getProduct(currBuyBtn) {
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
    return prod;
}
function saveProductToCart(p) {
    ProductStorage.addProduct(p);
    return ProductStorage.getAllProducts();
}
function displayNumberOfItems() {
    var numItems = ProductStorage.getNumberOfProducts();
    document.querySelector("div#shopping-cart > span").innerHTML = numItems.toString();
}
function showCartContents() {
    //get display div and remove everything from it
    var displayDiv = document.querySelector("div#display-cart");
    displayDiv.innerHTML = "";
    var allProds = ProductStorage.getAllProducts();
    for (var i = 0; i < allProds.length; i++) {
        //get product
        var prod = allProds[i];
        //create div to display product and add class to div
        var prodDiv = document.createElement("div");
        prodDiv.classList.add("display-product");
        //create h2 for product title and price and add it to the new div 
        var h2 = document.createElement("h2");
        h2.innerHTML = prod.title + " - $" + prod.price;
        prodDiv.appendChild(h2);
        //Add new div to display div on webpage
        displayDiv.appendChild(prodDiv);
    }
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
var ProductStorage = /** @class */ (function () {
    function ProductStorage() {
    }
    /**
     * Adds a given Product to local storage
     * @param p Product to be added to storage
     */
    ProductStorage.addProduct = function (p) {
        //get existing products
        var prods = ProductStorage.getAllProducts(); // OR this.getAllProducts();
        //Adds new product to the array
        prods.push(p);
        var data = JSON.stringify(prods);
        localStorage.setItem("prods", data);
    };
    /**
     * Returns all products or an empty array if none are stored
     */
    ProductStorage.getAllProducts = function () {
        var data = localStorage.getItem("prods");
        if (data == null) {
            return new Array();
        }
        return JSON.parse(data);
    };
    /**
     * Returns the number of products in local storage
     */
    ProductStorage.getNumberOfProducts = function () {
        var prods = ProductStorage.getAllProducts();
        return prods.length;
    };
    return ProductStorage;
}());
