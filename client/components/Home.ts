/// <reference path="../../node_modules/typed-react/typed-react.d.ts"/>
import React = require("react");
import TypedReact = require("typed-react");

class Home extends TypedReact.Component<void, void>{
    click() {
        alert("dkfjdkf");
    }
    render() {
        return (React.createElement("p", { onClick: this.click }, "adfdadfadfadfadfadad"));
    }
}

export = TypedReact.createClass(Home);
