var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../node_modules/typed-react/typed-react.d.ts"/>
var React = require("react");
var TypedReact = require("typed-react");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        _super.apply(this, arguments);
    }
    Home.prototype.click = function () {
        alert("dkfjdkf");
    };
    Home.prototype.render = function () {
        return (React.createElement("p", { onClick: this.click }, "adfdadfadfadfadfadad"));
    };
    return Home;
})(TypedReact.Component);
module.exports = TypedReact.createClass(Home);
//# sourceMappingURL=Home.js.map