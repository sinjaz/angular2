System.register([], function(exports_1) {
    var AwesomeModel;
    return {
        setters:[],
        execute: function() {
            AwesomeModel = (function () {
                function AwesomeModel(title) {
                    if (title === void 0) { title = ""; }
                    this.title = title;
                    this.isDone = false;
                }
                AwesomeModel.prototype.toggle = function () {
                    this.isDone = !this.isDone;
                };
                AwesomeModel.prototype.getFontWeight = function () {
                    return this.isDone ? "bold" : "normal";
                };
                return AwesomeModel;
            })();
            exports_1("AwesomeModel", AwesomeModel);
        }
    }
});
//# sourceMappingURL=awesome-model.js.map