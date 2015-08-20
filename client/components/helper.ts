/// <reference path="../../node_modules/typed-react/typed-react.d.ts"/>

import React = require("react");
import TypedReact = require("typed-react");

export function addContext<P>(clazz: {
    new (): TypedReact.Component<P, any>;
}): new () => __React.Component<P, any> {
    var h = TypedReact.createClass(clazz);
    h.contextTypes = {
        getStore: React.PropTypes.func.isRequired,
        executeAction: React.PropTypes.func.isRequired
    };

    return h;
}
