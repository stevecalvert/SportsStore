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
var StoreComponent = (function () {
    function StoreComponent(repository) {
        this.repository = repository;
    }
    Object.defineProperty(StoreComponent.prototype, "products", {
        get: function () {
            return this.repository.getProducts();
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
    StoreComponent = __decorate([
        core_1.Component({
            selector: "store",
            moduleId: module.id,
            templateUrl: "store.component.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof product_repository_1.ProductRepository !== 'undefined' && product_repository_1.ProductRepository) === 'function' && _a) || Object])
    ], StoreComponent);
    return StoreComponent;
    var _a;
}());
exports.StoreComponent = StoreComponent;
