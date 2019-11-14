window.onload = function(){
    initBuyButtons();
    displayNumberOfItems();

    let cartIcon = <HTMLDivElement>document.querySelector("div#shopping-cart");
    cartIcon.onclick = showCartContents;
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
    let currBtn = this;
    let prod = getProduct(currBtn);

    saveProductToCart(prod);

    displayNumberOfItems();
}

/**
 * Create a Product object from the webpage from the currently selected product
 */
function getProduct(currBuyBtn:HTMLDivElement):Product {
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
    ProductStorage.addProduct(p);
    return ProductStorage.getAllProducts();
}

function displayNumberOfItems():void{
    let numItems = ProductStorage.getNumberOfProducts();
    document.querySelector("div#shopping-cart > span").innerHTML = numItems.toString();
}

function showCartContents():void{
    //get display div and remove everything from it
    let displayDiv = document.querySelector("div#display-cart");
    displayDiv.innerHTML = "";

    let allProds = ProductStorage.getAllProducts();
    for(let i = 0; i < allProds.length; i++){
        //get product
        const prod = allProds[i];

        //create div to display product and add class to div
        let prodDiv = document.createElement("div");
        prodDiv.classList.add("display-product");

        //create h2 for product title and price and add it to the new div 
        let h2 = document.createElement("h2");
        h2.innerHTML = prod.title + " - $" + prod.price;
        prodDiv.appendChild(h2);

        //Add new div to display div on webpage
        displayDiv.appendChild(prodDiv);
    }
}