import addons = require('fluxible/addons');

class MyStore extends addons.BaseStore {
  static storeName = "MyStore";
  static handlers = {
    'MY_ACTION': "handleChange",
    'LOAD_HOME': 'londServerData',
  }

  public time: string;
  public name: string;
  public server: string;
  initialize() {
    this.time = new Date().toString();
    this.name = "body";
  }

  handleChange(payload: string) {
    this.name = payload;
    this.time = new Date().toString();
    this.emitChange();
  }
  londServerData(data) {
    this.server = data;
    this.emitChange();
  }
  getState() {
    return "Hello: " + this.name + " @ " + this.time;
  }
  getServer() {
    return this.server;
  }

  dehydrate() {
    return this.server;
  }

  rehydrate(state) {
    this.server = state;
  }
}

export = MyStore
