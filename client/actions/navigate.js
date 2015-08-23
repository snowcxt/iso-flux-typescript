module.exports = function (actionContext, payload, done) {
    actionContext.dispatch('CHANGE_ROUTE', payload);
    if (payload.pathname === '/') {
        setTimeout(function () {
            actionContext.dispatch('LOAD_HOME', Date.now().toString());
            done();
        }, 500);
    }
    else {
        done();
    }
};
//# sourceMappingURL=navigate.js.map