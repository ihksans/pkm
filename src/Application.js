//Template for Paging

import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Switch, Route, HashRouter} from 'react-router-dom';
import Main from './Router';


class Application extends Component {
    constructor(){
        super();
        this.state = {
          
        };
    }

    componentDidMount(){
       
    }

    render() {
        return (
            <div>
                <HashRouter>
                  
                    <Route default component={Main}/>
                    
                </HashRouter>
            </div>
        );
    }
}

export default Application;