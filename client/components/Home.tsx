import React = require("react");

import myAction = require("../actions/myAction");
import {connectToStores} from 'fluxible-addons-react';
import MyStore = require("../stores/MyStore");

class Home extends React.Component<any, any>{
    static contextTypes = {
        getStore: React.PropTypes.func.isRequired,
        executeAction: React.PropTypes.func.isRequired
    };

    click() {
        this.context.executeAction(myAction, "hkd");
    }
    render() {
        return (
            <p onClick={this.click.bind(this)}>{this.props.time}</p>);
    }
}


export = connectToStores(Home, [MyStore], (context) => {
    return { time: context.getStore(MyStore).getState() }
});
