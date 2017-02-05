/*
data and logic to an HTML template, which contains data bindings that generate content dynamically.
The @Component decorator has been applied to the StoreComponent class, which tells Angular that it is a component. 
The decorator’s properties tell Angular how to apply the component to HTML content (using an element called store) 
and how to find the component’s template (in a file called store.component.html).
The StoreComponent class provides the logic that will support the template content.
The class constructor receives a ProductRepository object as an argument, provided through dependency injection
The component defines products and categories properties that will be used to generate HTML content in the template, 
using data obtained from the repository
*/

import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html"
})

export class StoreComponent {
    constructor(private repository: ProductRepository) { }
    
    get products(): Product[] {
        return this.repository.getProducts();
	}

    get categories(): string[] {
        return this.repository.getCategories();
	} 
}