"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SourceController {
    constructor() {
        this.sourceList = [];
    }
    registerSource(source) {
        let duplicated = false;
        this.sourceList.forEach((elem) => {
            if (elem.name === source.name)
                duplicated = true;
        });
        if (!duplicated)
            this.sourceList.push(source);
        return !duplicated;
    }
}
var SourceBuilder;
(function (SourceBuilder) {
    function createSource(name, url, async) {
        return {
            async,
            name,
            routes: [],
            url,
        };
    }
    SourceBuilder.createSource = createSource;
})(SourceBuilder || (SourceBuilder = {}));
exports.sourceController = new SourceController();
function register(name, url, async = true) {
    const source = SourceBuilder.createSource(name, url, async);
    console.log(source);
    return exports.sourceController.registerSource(source);
}
exports.register = register;
