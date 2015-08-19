import addons = require('fluxible/addons');

export = addons.createStore({
    storeName: 'MyStore',
    initialize: function() {
        this.time = new Date();
    },
    handleChange: function(payload) {
        this.name = payload;
        this.time = new Date();
        this.emitChange();
    },
    handlers: {
        'MY_ACTION': 'handleChange'
    },
    getState: function() {
        return this.time.toString() + this.name;
    },
    dehydrate: function() {
        return {
            time: this.time.toString()
        };
    },
    rehydrate: function(state) {
        this.time = new Date(state.time);
    }
});
