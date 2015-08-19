var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var myAction = require("../actions/myAction");
var fluxible_addons_react_1 = require('fluxible-addons-react');
var MyStore = require("../stores/MyStore");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        _super.apply(this, arguments);
    }
    Home.prototype.click = function () {
        this.context.executeAction(myAction, "hkd");
    };
    Home.prototype.render = function () {
        return (React.createElement("p", {"onClick": this.click.bind(this)}, this.props.time));
    };
    Home.contextTypes = {
        getStore: React.PropTypes.func.isRequired,
        executeAction: React.PropTypes.func.isRequired
    };
    return Home;
})(React.Component);
module.exports = fluxible_addons_react_1.connectToStores(Home, [MyStore], function (context) {
    return { time: context.getStore(MyStore).getState() };
});
//# sourceMappingURL=Home.js.map