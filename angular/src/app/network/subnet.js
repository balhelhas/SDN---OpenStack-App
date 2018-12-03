"use strict";
var Subnet = (function () {
    function Subnet(name, networkId, shared, tenantId, ip_version, cdir, enableDhcp) {
        this.name = name;
        this.networkId = networkId;
        this.shared = shared;
        this.tenantId = tenantId;
        this.ip_version = ip_version;
        this.cdir = cdir;
        this.enableDhcp = enableDhcp;
    }
    return Subnet;
}());
exports.Subnet = Subnet;
//# sourceMappingURL=subnet.js.map