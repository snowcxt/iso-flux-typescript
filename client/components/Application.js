/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import React from 'react';
import {Link} from 'react-router';
import ApplicationStore from '../stores/ApplicationStore';
import {connectToStores, provideContext} from 'fluxible-addons-react';
import {RouteHandler} from 'react-router';

@provideContext
class Application extends React.Component {
    static contextTypes = {
        getStore: React.PropTypes.func,
        executeAction: React.PropTypes.func,
        router: React.PropTypes.func.isRequired
    };

    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <ul className="pure-menu pure-menu-open pure-menu-horizontal">
                    <li className={this.context.router.isActive('/') ? 'pure-menu-selected' : ''}><Link to='/'>Home</Link></li>
                    <li className={this.context.router.isActive('/about') ? 'pure-menu-selected' : ''}><Link to='/about'>About</Link></li>
                </ul>
                <RouteHandler />
            </div>
        );
    }
}

export default Application;
