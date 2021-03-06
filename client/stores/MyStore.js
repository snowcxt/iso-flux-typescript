var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var addons = require('fluxible/addons');
var MyStore = (function (_super) {
    __extends(MyStore, _super);
    function MyStore() {
        _super.apply(this, arguments);
    }
    MyStore.prototype.initialize = function () {
        this.time = new Date().toString();
        this.name = "body";
    };
    MyStore.prototype.handleChange = function (payload) {
        this.name = payload;
        this.time = new Date().toString();
        this.emitChange();
    };
    MyStore.prototype.londServerData = function (data) {
        this.server = data;
        this.emitChange();
    };
    MyStore.prototype.getState = function () {
        return "Hello: " + this.name + " @ " + this.time;
    };
    MyStore.prototype.getServer = function () {
        return this.server;
    };
    MyStore.prototype.dehydrate = function () {
        return this.server;
    };
    MyStore.prototype.rehydrate = function (state) {
        this.server = state;
    };
    MyStore.storeName = "MyStore";
    MyStore.handlers = {
        'MY_ACTION': "handleChange",
        'LOAD_HOME': 'londServerData',
    };
    return MyStore;
})(addons.BaseStore);
module.exports = MyStore;
//# sourceMappingURL=MyStore.js.map