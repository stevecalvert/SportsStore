/* The @NgModule decorator configures the module, using the imports property to tell Angular that the store module depends on the model module as well as BrowserModule and FormsModule, which contain the standard Angular features for web applications and working with HTML form elements.
The decorator uses the declarations property to tell Angular about the StoreComponent class, which the exports property tells Angular can be also be used in other parts of the application, which is important because it will be used by the root module.
*/

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartsummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
})

export class StoreModule { }