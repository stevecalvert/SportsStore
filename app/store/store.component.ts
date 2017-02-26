import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository"; 
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";


// The @Component decorator has been applied to the StoreComponent class, which tells Angular that it is a component. 
// The decorator’s properties tell Angular how to apply the component to HTML content (using an element called store) 
// and how to find the component’s template (in a file called store.component.html).
// The StoreComponent class provides the logic that will support the template content.

@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html"
})

// The export keyword relates to JavaScript modules. When using modules, each TypeScript or JavaScript file is considered to be a self-contained unit of functionality, and the export keyword is used to identity data or types that you want to use elsewhere in the application. JavaScript modules are used to manage the dependencies that arise between files in a project and avoid having to manually manage a complex set of script elements in the HTML file

export class StoreComponent {
    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    // The class constructor receives a ProductRepository object as an argument, provided through the dependency injection feature
    constructor(private repository: ProductRepository,
                private cart: Cart,
                private router: Router) { }
    
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

    get pageCount(): number {
        return Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productsPerPage)
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }

    // get pageNumbers(): number[] {
    //     return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
    //                            .fill(0).map((x, i) => i + 1);
    // }
}
