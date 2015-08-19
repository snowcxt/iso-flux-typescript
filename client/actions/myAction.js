module.exports = function myAction(actionContext, payload, done) {
    setTimeout(function () {
        actionContext.dispatch('MY_ACTION', payload);
        done();
    }, 10);
};
//# sourceMappingURL=myAction.js.map