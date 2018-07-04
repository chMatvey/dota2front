import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css'

class Head extends Component{
    constructor(props){
        super(props);
        this.state = {
            isAuth: false,
            login: "User",
        }
    }

    render(){
        return(
            <div className="main-header">
                <ul className="dark-header">
                    <li><h1><Link to="/">
                        <img src="http://wallpaperstock.ru/tmp/D/16295_5.jpg"/>
                    </Link></h1></li>
                    <li><Link to="/heroes">Heroes</Link></li>
                    <li><Link to="/items">Items</Link></li>
                    <li><Link to="/memes">Memes</Link></li>
                    <li hidden={this.state.isAuth}><Link to="/signin">Sign in</Link></li>
                    <li hidden={this.state.isAuth}><Link to="/signup">Sign up</Link></li>
                    <li hidden={!this.state.isAuth}><Link>{this.state.login}</Link></li>
                    <li className="last-child"><h1><Link to="/">
                        <img src="http://wallpaperstock.ru/tmp/D/16295_5.jpg"/>
                    </Link></h1></li>
                </ul>
            </div>
        )
    }
}

export default Head;
