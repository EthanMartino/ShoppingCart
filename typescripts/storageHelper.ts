class ProductStorage{
    /**
     * Adds a given Product to local storage
     * @param p Product to be added to storage
     */
    static addProduct(p:Product):void{
        //get existing products
        let prods = ProductStorage.getAllProducts(); // OR this.getAllProducts();
        //Adds new product to the array
        prods.push(p);

        let data = JSON.stringify(prods);
        localStorage.setItem("prods", data);
    }

    /**
     * Returns all products or an empty array if none are stored
     */
    static getAllProducts():Product[]{
        let data = localStorage.getItem("prods");

        if(data == null){
            return new Array<Product>();
        }

        return <Product[]>JSON.parse(data);
    }

    /**
     * Returns the number of products in local storage
     */
    static getNumberOfProducts():number{
        let prods = ProductStorage.getAllProducts();
        return prods.length;
    }
}