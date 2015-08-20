import React = require("react");
import TypedReact = require("typed-react");

import myAction = require("../actions/myAction");
import MyStore = require("../stores/MyStore");

import {connectToStores} from 'fluxible-addons-react';
import {provideContext} from 'fluxible-addons-react';

import helper = require("./helper");

interface IHome {
    hello: string;
}

class H extends TypedReact.Component<IHome, {
    name: string
}>{
    // static contextTypes = {
    //     getStore: React.PropTypes.func.isRequired,
    //     executeAction: React.PropTypes.func.isRequired
    // };
    getInitialState() {
        return {
            name: ""
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
            <p>Hello: {this.props.hello}</p>
            <input value={this.state.name} onChange={this.nameChanged }/>
            <button onClick={this.click}>say hello</button>
            </div>
        );
    }
}

export = connectToStores(helper.addContext(H), [MyStore], (context) => {
    return { hello: context.getStore(MyStore).getState() }
});
