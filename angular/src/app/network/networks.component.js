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
var NetworksComponent = (function () {
    function NetworksComponent(route, router, appService) {
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.networks = [];
        this.subnets = [];
    }
    NetworksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getNetworks().subscribe(function (r) {
            r.forEach(function (net) {
                _this.networks.push(net);
                net.subnets.forEach(function (subnet) {
                    _this.appService.getSubnet(subnet).subscribe(function (r) {
                        if (r != null) {
                            _this.subnets.push(r);
                        }
                    });
                });
            });
            console.log(_this.subnets);
            console.log(_this.networks);
        });
    };
    NetworksComponent.prototype.createNetwork = function () {
        this.router.navigateByUrl('/network/new');
    };
    return NetworksComponent;
}());
NetworksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'networks',
        templateUrl: 'networks.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        app_service_1.AppService])
], NetworksComponent);
exports.NetworksComponent = NetworksComponent;
//# sourceMappingURL=networks.component.js.map