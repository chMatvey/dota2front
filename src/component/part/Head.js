import React, {Component} from 'react';
import {Link} from 'react-router';
import './css/head.css'

class Head extends Component{

    render(){
        return(
            <div>
                <header>
                    <nav>
                        <ul id="nav-menu-ul">
                            <li><h1><Link to="/">
                                <img src="http://wallpaperstock.ru/tmp/D/16295_5.jpg"/>
                            </Link></h1></li>
                            <li><Link to="/hero">Hero</Link></li>
                            <li><Link to="/subject">Subjects</Link></li>
                            <li><Link to="/hyde">Hydes</Link></li>
                            <li><Link to="/signin">Sign in</Link></li>
                            <li><Link to="/signup">Sign un</Link></li>
                            <li><h1><Link to="/">
                                <img src="http://wallpaperstock.ru/tmp/D/16295_5.jpg"/>
                            </Link></h1></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Head;
