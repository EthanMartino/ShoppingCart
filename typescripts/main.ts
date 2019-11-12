window.onload = function(){
    initBuyButtons();
}

/**
 * Wires up the "Buy" buttons 
 */
function initBuyButtons() {
    let buyBtns = document.querySelectorAll("div.buy");
    for (let i = 0; i < buyBtns.length; i++) {
        let currBtn = <HTMLDivElement>buyBtns[i];
        currBtn.onclick = buyProduct;
    }
}

function buyProduct(){
    alert("BUY BUTTON CLICKED MOTHER FUCKER");
}