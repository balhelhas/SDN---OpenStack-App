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
var instance_1 = require("./instance");
var NewComputeComponent = (function () {
    function NewComputeComponent(route, router, appService) {
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.server = new instance_1.Instance('', '', '', '');
        this.images = [];
        this.flavors = [];
        this.networks = [];
    }
    NewComputeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getFlavors().subscribe(function (r) {
            r.forEach(function (flavor) {
                _this.flavors.push(flavor);
            });
            console.log(_this.flavors);
        });
        this.appService.getImages().subscribe(function (r) {
            r.forEach(function (image) {
                _this.images.push(image);
            });
            console.log(_this.images);
        });
        this.appService.getNetworks().subscribe(function (r) {
            r.forEach(function (network) {
                _this.networks.push(network);
            });
            console.log(_this.networks);
        });
    };
    NewComputeComponent.prototype.createCompute = function () {
        var _this = this;
        console.log(this.server);
        this.appService.createServer(this.server).subscribe(function (r) {
            _this.router.navigateByUrl('/compute');
        });
    };
    return NewComputeComponent;
}());
NewComputeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'new_compute',
        templateUrl: 'new_compute.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        app_service_1.AppService])
], NewComputeComponent);
exports.NewComputeComponent = NewComputeComponent;
//# sourceMappingURL=new_compute.component.js.map