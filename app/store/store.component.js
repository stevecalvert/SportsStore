"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_repository_1 = require("../model/product.repository");
/*import { Cart } from "../model/cart.model";*/
// The @Component decorator has been applied to the StoreComponent class, which tells Angular that it is a component. The decorator’s properties tell Angular how to apply the component to HTML content (using an element called store) and how to find the component’s template (in a file called store.component.html).
// The StoreComponent class provides the logic that will support the template content.
var StoreComponent = (function () {
    // The class constructor receives a ProductRepository object as an argument, provided through the dependency injection feature
    function StoreComponent(repository) {
        this.repository = repository;
        this.selectedCategory = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
    }
    Object.defineProperty(StoreComponent.prototype, "products", {
        get: function () {
            var pageIndex = (this.selectedPage - 1) * this.productsPerPage;
            return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    // invoked by keypress
    StoreComponent.prototype.changeCategory = function (newCategory) {
        this.selectedCategory = newCategory;
    };
    StoreComponent.prototype.changePage = function (newPage) {
        this.selectedPage = newPage;
    };
    StoreComponent.prototype.changePageSize = function (newSize) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    };
    Object.defineProperty(StoreComponent.prototype, "pageNumbers", {
        get: function () {
            return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)).fill(0).map(function (x, i) { return i + 1; });
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent = __decorate([
        core_1.Component({
            selector: "store",
            moduleId: module.id,
            templateUrl: "store.component.html"
        }), 
        __metadata('design:paramtypes', [product_repository_1.ProductRepository])
    ], StoreComponent);
    return StoreComponent;
}());
exports.StoreComponent = StoreComponent;
