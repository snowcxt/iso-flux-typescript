/// <reference path="../../node_modules/typed-react/typed-react.d.ts"/>
var React = require("react");
var TypedReact = require("typed-react");
function addContext(clazz) {
    var h = TypedReact.createClass(clazz);
    h.contextTypes = {
        getStore: React.PropTypes.func.isRequired,
        executeAction: React.PropTypes.func.isRequired
    };
    return h;
}
exports.addContext = addContext;
//# sourceMappingURL=helper.js.map