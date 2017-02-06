import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository"; 
/*import { Cart } from "../model/cart.model";*/


// The @Component decorator has been applied to the StoreComponent class, which tells Angular that it is a component. The decorator’s properties tell Angular how to apply the component to HTML content (using an element called store) and how to find the component’s template (in a file called store.component.html).
// The StoreComponent class provides the logic that will support the template content.

@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html"
})

export class StoreComponent {
    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    // The class constructor receives a ProductRepository object as an argument, provided through the dependency injection feature
    constructor(private repository: ProductRepository) { }
    
    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
	}

    get categories(): string[] {
        return this.repository.getCategories();
	}

    // invoked by keypress
    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)).fill(0).map((x, i) => i + 1);
    }
}
