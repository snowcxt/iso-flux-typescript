import addons = require('fluxible/addons');

class MyStore extends addons.BaseStore {
    public time: string;
    public name: string;
    initialize() {
        this.time = new Date().toString();
    }

    handleChange(payload: string) {
        this.name = payload;
        this.time = new Date().toString();
        this.emitChange();
    }
    static storeName = "MyStore";
    static handlers = {
        'MY_ACTION': "handleChange"
    }
    getState() {
        return "Hello: " + this.name + "@" + this.time;
    }
}

export = MyStore
