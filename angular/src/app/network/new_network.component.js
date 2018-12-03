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
var network_1 = require("./network");
var subnet_1 = require("./subnet");
var NewNetworkComponent = (function () {
    function NewNetworkComponent(route, router, appService) {
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.network = new network_1.Network('', true, false, '');
        this.subnet = new subnet_1.Subnet('', '', false, '', '', '', true);
    }
    NewNetworkComponent.prototype.createNetwork = function () {
        var _this = this;
        this.appService.createNetwork(this.network).subscribe(function (r) {
            if (r != null) {
                console.log(r);
                _this.subnet.networkId = r.id;
                console.log(_this.subnet);
                _this.appService.createSubnet(_this.subnet).subscribe(function (r) {
                    if (r != null) {
                        _this.router.navigateByUrl('/networks');
                    }
                });
            }
        });
    };
    return NewNetworkComponent;
}());
NewNetworkComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'new_network',
        templateUrl: 'new_network.component.html',
        styleUrls: ['network.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        app_service_1.AppService])
], NewNetworkComponent);
exports.NewNetworkComponent = NewNetworkComponent;
//# sourceMappingURL=new_network.component.js.map