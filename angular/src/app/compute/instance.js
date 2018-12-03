"use strict";
var Instance = (function () {
    function Instance(name, flavor, image, networkId) {
        this.name = name;
        this.flavor = flavor;
        this.image = image;
        this.networkId = networkId;
    }
    return Instance;
}());
exports.Instance = Instance;
//# sourceMappingURL=instance.js.map