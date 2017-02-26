/* I started with the root component, which is the Angular building block that will manage the contents of the app element in the HTML document. An application can contain many components, but there is always a root component that takes responsibility for the top-level content presented to the user.
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
// This is an example of a decorator, which provides metadata about a class. This is the @Component decorator, and, as its name suggests, it tells Angular that this is a component. The decorator provides configuration information through its properties, which in the case of @Component includes properties called selector and templateUrl.
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            // The selector property specifies a CSS selector that matches the HTML element to which the component will be applied
            // When an Angular application starts, Angular scans the HTML in the current document and looks for elements that correspond to components. It will find the app element and know that it should be placed under the control of this component.
            selector: "app",
            // the templateUrl property is used to tell Angular how to find the component’s template. 
            template: "<router-outlet></router-outlet>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
