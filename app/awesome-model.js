System.register([], function(exports_1) {
    var AwesomeModel;
    return {
        setters:[],
        execute: function() {
            AwesomeModel = (function () {
                function AwesomeModel(title) {
                    if (title === void 0) { title = ""; }
                    this.title = title;
                    this.status = "started";
                }
                return AwesomeModel;
            })();
            exports_1("AwesomeModel", AwesomeModel);
        }
    }
});
//# sourceMappingURL=awesome-model.js.map