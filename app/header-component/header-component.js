System.register(['angular2/core', '../my-service', "../awesome-model"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, my_service_1, awesome_model_1;
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (my_service_1_1) {
                my_service_1 = my_service_1_1;
            },
            function (awesome_model_1_1) {
                awesome_model_1 = awesome_model_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent(myService) {
                    this.myService = myService;
                    this.myModel = new awesome_model_1.AwesomeModel();
                }
                HeaderComponent.prototype.onSubmit = function () {
                    this.myService.stuff.push(this.myModel);
                    console.log(this.myService.stuff);
                    this.myModel = new awesome_model_1.AwesomeModel();
                };
                HeaderComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/header-component/index.html',
                        selector: "header-component"
                    }), 
                    __metadata('design:paramtypes', [my_service_1.MyService])
                ], HeaderComponent);
                return HeaderComponent;
            })();
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header-component.js.map