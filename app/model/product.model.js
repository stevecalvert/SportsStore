/* Every data model needs classes that describe the types of data that will be contained in the data model. For the SportsStore application,
this means classes that describe the products sold in the store and the orders that are received from customers.

The question marks (the ? characters) that follow the parameter names indicate that these are optional parameters that can be omitted when
creating new objects using the Product class, which can be useful when writing applications where model object properties will be populated using HTML forms.
*/
"use strict";
var Product = (function () {
    function Product(id, name, category, description, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
