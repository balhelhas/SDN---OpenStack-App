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
var router_1 = require("@angular/router");
var app_service_1 = require("../app.service");
var LoginComponent = (function () {
    function LoginComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.appService.login(this.username, this.password).subscribe(function (r) {
            if (r) {
                _this.loginFailed = false;
                _this.router.navigateByUrl('/networks');
            }
            else {
                _this.loginFailed = true;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css']
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map