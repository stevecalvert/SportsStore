// The lite-server package that I am using as a development HTTP server builds on the BrowserSync package. 
// To configure the way that the browser is updated when a change to a project file is detected, I created a
// file called bs-config.js

module.exports = {
    ghostMode: false,
    reloadDelay: 1000,
    reloadDebounce: 1000,
    injectChanges: false,
    minify: false
}