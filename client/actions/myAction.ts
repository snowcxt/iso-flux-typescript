export = function myAction(actionContext, payload, done) {
    setTimeout(function () { // simulate async
        actionContext.dispatch('MY_ACTION', payload);
        done();
    }, 10);
}
