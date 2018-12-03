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
var ComputeComponent = (function () {
    function ComputeComponent(route, router, appService) {
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.servers = [];
        this.flavors = [];
    }
    ComputeComponent.prototype.ngOnInit = function () {
        this.refreshCompute();
    };
    ComputeComponent.prototype.refreshCompute = function () {
        var _this = this;
        this.servers = [];
        this.flavors = [];
        this.appService.getServers().subscribe(function (r) {
            r.forEach(function (server) {
                _this.servers.push(server);
            });
            console.log(_this.servers);
        });
        this.appService.getFlavors().subscribe(function (r) {
            r.forEach(function (flavor) {
                _this.flavors.push(flavor);
            });
            console.log(_this.flavors);
        });
    };
    ComputeComponent.prototype.createInstance = function () {
        this.router.navigateByUrl('/compute/new');
    };
    ComputeComponent.prototype.rebootInstance = function (server) {
        var _this = this;
        this.appService.rebootServer(server).subscribe(function (r) {
            _this.refreshCompute();
        });
    };
    ComputeComponent.prototype.deleteInstance = function (server) {
        var _this = this;
        this.appService.deleteServer(server).subscribe(function (r) {
            _this.refreshCompute();
        });
    };
    return ComputeComponent;
}());
ComputeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'compute',
        templateUrl: 'compute.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        app_service_1.AppService])
], ComputeComponent);
exports.ComputeComponent = ComputeComponent;
//# sourceMappingURL=compute.component.js.map