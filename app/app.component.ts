/* I started with the root component, which is the Angular building block that will manage the contents of the app element in the HTML document. An application can contain many components, but there is always a root component that takes responsibility for the top-level content presented to the user. 
*/

import { Component } from "@angular/core";

@Component({
    selector: "app",
    template: "<store></store>"
  
	/* no longer required
	template: `<div class="bg-success p-a-1 text-xs-center">
                This really is SportsStore
               </div>`
    */
}) 

export class AppComponent { }