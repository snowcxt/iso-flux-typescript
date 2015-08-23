import React = require("react");
import TypedReact = require("typed-react");

import myAction = require("../../actions/myAction");
import MyStore = require("../../stores/MyStore");

import {connectToStores} from 'fluxible-addons-react';
import {provideContext} from 'fluxible-addons-react';

import helper = require("./../helper");


class H extends TypedReact.Component<{
    server: string;
    hello: string;
}, {
    name: string
}>{
    getInitialState() {
        return {
            name: "my name"
        }
    }
    click() {
        this.context.executeAction(myAction, this.state.name);
    }
    nameChanged(e) {
        this.setState({ name: e.target.value });
    }
    render() {
        return (<div>
            <h1>home view</h1>
            <p>data from server {this.props.server}</p>
            <p>Hello: {this.props.hello}</p>
            <input value={this.state.name} onChange={this.nameChanged }/>
            <button onClick={this.click}>say hello</button>
            </div>
        );
    }
}

export = connectToStores(helper.addContext(H), [MyStore], (context) => {
    return {
        hello: context.getStore(MyStore).getState(),
        server: context.getStore(MyStore).getServer()
     }
});
