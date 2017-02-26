/* define an Angular feature model that will allow the data model functionality to be easily used elsewhere in the application.import { NgModule } from "@angular/core";

The @NgModule decorator is used to create feature modules, and its properties tell Angular how the module should be used. There is only one property in this module, providers, and it tells Angular which classes should be used as services for the dependency injection feature
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
var product_repository_1 = require("./product.repository");
var static_datasource_1 = require("./static.datasource");
var cart_model_1 = require("./cart.model");
var ModelModule = (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        core_1.NgModule({
            providers: [product_repository_1.ProductRepository, static_datasource_1.StaticDataSource, cart_model_1.Cart]
        }), 
        __metadata('design:paramtypes', [])
    ], ModelModule);
    return ModelModule;
}());
exports.ModelModule = ModelModule;
