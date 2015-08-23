export = function(actionContext, payload: ReactRouter.RouterState, done) {

    actionContext.dispatch('CHANGE_ROUTE', payload);
    if (payload.pathname === '/') {
        setTimeout(() => {
            actionContext.dispatch('LOAD_HOME', Date.now().toString());
            done();
        }, 500);
    } else {
        done();
    }

};
