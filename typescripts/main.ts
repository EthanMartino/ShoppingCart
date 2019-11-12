window.onload = function(){
    initBuyButtons();
}

/**
 * Wires up the "Buy" buttons 
 */
function initBuyButtons():void {
    let buyBtns = document.querySelectorAll("div.buy");
    for (let i = 0; i < buyBtns.length; i++) {
        let currBtn = <HTMLDivElement>buyBtns[i];
        currBtn.onclick = buyProduct;
    }
}

function buyProduct():void{
    let prod = getProduct();

    saveProductToCart(prod);
}

/**
 * Create a Product object from the webpage from the currently selected product
 */
function getProduct():Product {
    //Get the Buy div that was clicked
    let currBuyBtn = <HTMLElement>this;
    console.log("The Div that was clicked:");
    console.log(currBuyBtn);

    //Get the Product Div that is the parent of the buy div
    let currProductDiv = currBuyBtn.parentElement;
    console.log("The Parent Product Div of the div that was clicked:");
    console.log(currProductDiv);

    //Create new Product object and 
    //assign title from inside the product div
    let prod = new Product();
    prod.title = currProductDiv.querySelector("div.title").innerHTML;

    //assign price from inside the product div
    let price = currProductDiv.querySelector("div.price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);

    //assign description from inside the product div
    prod.description = currProductDiv.querySelector("div.description").innerHTML;
    console.log(prod);
    return prod;
}

function saveProductToCart(p:Product):Product[]{
    throw "Not Implemented";
}