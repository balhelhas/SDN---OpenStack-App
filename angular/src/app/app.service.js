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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.isLogged = function () {
        if (this.userLogged == 'logged') {
            return true;
        }
        else {
            return false;
        }
    };
    AppService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post('http://localhost:7777/api/login', { username: username, password: password })
            .map(function (response) {
            console.log(response.json());
            _this.userLogged = response.json();
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    AppService.prototype.getNetworks = function () {
        return this.http.get('http://localhost:7777/api/networks')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    AppService.prototype.getSubnet = function (subnet) {
        return this.http.get('http://localhost:7777/api/subnet/' + subnet)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    AppService.prototype.createNetwork = function (network) {
        return this.http.post('http://localhost:7777/api/networks', network)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    AppService.prototype.createSubnet = function (subnet) {
        return this.http.post('http://localhost:7777/api/subnets', subnet)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    AppService.prototype.getServers = function () {
        return this.http.get('http://localhost:7777/api/servers')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    AppService.prototype.getFlavors = function () {
        return this.http.get('http://localhost:7777/api/flavors')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    AppService.prototype.getImages = function () {
        return this.http.get('http://localhost:7777/api/images')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    AppService.prototype.createServer = function (server) {
        return this.http.post('http://localhost:7777/api/servers', server)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    AppService.prototype.deleteServer = function (server) {
        return this.http.post('http://localhost:7777/api/server/destroy', server)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    AppService.prototype.rebootServer = function (server) {
        return this.http.post('http://localhost:7777/api/server/reboot', server)
            .map(function (response) {
            console.log(response);
            return response;
        })
            .catch(function (error) {
            console.log(error);
            return Rx_1.Observable.throw(error);
        });
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map