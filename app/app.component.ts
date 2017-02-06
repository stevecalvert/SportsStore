/* I started with the root component, which is the Angular building block that will manage the contents of the app element in the HTML document. An application can contain many components, but there is always a root component that takes responsibility for the top-level content presented to the user. 
*/

import { Component } from "@angular/core";

// This is an example of a decorator, which provides metadata about a class. This is the @Component decorator, and, as its name suggests, it tells Angular that this is a component. The decorator provides configuration information through its properties, which in the case of @Component includes properties called selector and templateUrl.
@Component({
	// The selector property specifies a CSS selector that matches the HTML element to which the component will be applied
	// When an Angular application starts, Angular scans the HTML in the current document and looks for elements that correspond to components. It will find the app element and know that it should be placed under the control of this component.
    selector: "app",
    
    // the templateUrl property is used to tell Angular how to find the component’s template. The store element replaces the previous content in the root component’s template and corresponds to the value of the selector property of the @Component decorator 
    template: "<store></store>"
  
	/* no longer required 
	template: `<div class="bg-success p-a-1 text-xs-center">
                This really is SportsStore
               </div>` */
    
}) 

export class AppComponent { }