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
    alert("BUY BUTTON CLICKED MOTHER FUCKER");
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
