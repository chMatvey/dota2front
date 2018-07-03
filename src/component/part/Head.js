import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css'

class Head extends Component{

    render(){
        return(
            <div>
                <ul class="dark-header">
                    <li><h1><Link to="/">
                        <img src="http://wallpaperstock.ru/tmp/D/16295_5.jpg"/>
                    </Link></h1></li>
                    <li><Link to="/heroes">Heroes</Link></li>
                    <li><Link to="/items">Items</Link></li>
                    <li><Link to="/memes">Memes</Link></li>
                    <li><Link to="/signin">Sign in</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li class="last-child"><h1><Link to="/">
                        <img src="http://wallpaperstock.ru/tmp/D/16295_5.jpg"/>
                    </Link></h1></li>
                </ul>
            </div>
        )
    }
}

export default Head;
