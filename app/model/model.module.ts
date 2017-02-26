/* define an Angular feature model that will allow the data model functionality to be easily used elsewhere in the application.import { NgModule } from "@angular/core";

The @NgModule decorator is used to create feature modules, and its properties tell Angular how the module should be used. There is only one property in this module, providers, and it tells Angular which classes should be used as services for the dependency injection feature
*/

import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpModule } from "@angular/http";

@NgModule({
	imports: [HttpModule],

	// The change to the providers property tells Angular that when it needs to create an instance of a 
	// class with a StaticDataSource constructor parameter, it should use a RestDataSource instead.
    providers: [ProductRepository, Cart, Order, OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource } ]
})

export class ModelModule { }
