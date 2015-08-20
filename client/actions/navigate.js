module.exports = function (actionContext, payload, done) {
    if(payload.pathname ==='/'){
        setTimeout(() => {
            actionContext.dispatch('LOAD_HOME', Date.now().toString());
            done();
        }, 500);

    }
    actionContext.dispatch('CHANGE_ROUTE', payload);

};
