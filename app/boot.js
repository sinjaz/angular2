System.register(['angular2/platform/browser', './app-component/app.component', './my-service'], function(exports_1) {
    var browser_1, app_component_1, my_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (my_service_1_1) {
                my_service_1 = my_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [my_service_1.MyService]);
        }
    }
});
//# sourceMappingURL=boot.js.map