import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()

// The Order class will be another service, which means that there will be one instance shared throughout the application. 
// When Angular creates the Order object, it will detect the Cart constructor parameter and provide the same Cart object 
// that is used elsewhere in the application
export class Order {
    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
    public shipped: boolean = false;

    constructor(public cart: Cart) { }
    clear() {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
	}
}