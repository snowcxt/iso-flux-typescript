var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TypedReact = require("typed-react");
var myAction = require("../actions/myAction");
var MyStore = require("../stores/MyStore");
var fluxible_addons_react_1 = require('fluxible-addons-react');
var H = (function (_super) {
    __extends(H, _super);
    function H() {
        _super.apply(this, arguments);
    }
    H.prototype.getInitialState = function () {
        return {
            name: ""
        };
    };
    H.prototype.click = function () {
        this.context.executeAction(myAction, this.state.name);
    };
    H.prototype.nameChanged = function (e) {
        this.setState({ name: e.target.value });
    };
    H.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("p", null, "Hello: ", this.props.hello), React.createElement("input", {"value": this.state.name, "onChange": this.nameChanged}), React.createElement("button", {"onClick": this.click}, "say hello")));
    };
    return H;
})(TypedReact.Component);
var h = TypedReact.createClass(H);
h.contextTypes = {
    getStore: React.PropTypes.func.isRequired,
    executeAction: React.PropTypes.func.isRequired
};
module.exports = fluxible_addons_react_1.connectToStores(h, [MyStore], function (context) {
    return { hello: context.getStore(MyStore).getState() };
});
//# sourceMappingURL=Home.js.map