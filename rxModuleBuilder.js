// Angular depends on Reactive Extensions, which is a package for managing events and change notifications. 
// Some Angular features require you to work directly with Reactive Extensions, but the NPM package doesn’t contain 
// the information that the SystemJS JavaScript module loader requires to load a module and resolve its dependencies. 
// That means I need to create my own JavaScript module containing the Reactive Extensions code. 
// The systemjs-builder package that I added to the project in Listing 7-1 is used to build modules,
// and to configure it, I added a file called rxModuleBuilder.js

var Builder = require("systemjs-builder");
var builder = new Builder("./");
builder.config({
    paths: {
        "rxjs/*": "node_modules/rxjs/*.js"
}, map: {
        "rxjs": "node_modules/rxjs"
    },
    packages: {
        "rxjs": { main: "Rx.js", defaultExtension: "js" }
} });
builder.bundle("rxjs", "rxjs.module.min.js", {
    normalize: true,
    runtime: false,
    minify: true,
    mangle: false
});