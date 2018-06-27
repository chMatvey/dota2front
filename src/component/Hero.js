import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import Head from './part/Head'
import {connect} from 'react-redux';
import './css/hero.css';
import Navbar from 'react-bootstrap/lib/Navbar';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import {Link} from 'react-router';

const url = "https://dota2.ru";

class Hero extends Component {

    inputChange() {
    }

    render() {
        return (
            <div>
                <Head/>
                <div class="second-header">
                    <h3 class="hero-list-header">
                        <small>Dota 2 Database</small>
                        <br/>
                        All Heroes<br/>
                        <small>Power Agility Intelligence</small>
                    </h3>
                </div>
                <nav class="navbar filter">
                    <input class="btn btn-primary search-by-name" type="text" placeholder="Filter By Name"
                           ref={(input) => {
                               this.findInput = input;
                           }}
                           onChange={this.inputChange.bind(this)}/>
                    <select class="dropdown-header list-group-item-dark select-type">
                        <option>All</option>
                        <option>Power</option>
                        <option>Agility</option>
                        <option>Intelligence</option>
                    </select>
                </nav>
                <div class="hero-table jumbotron">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Type</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody class="table-active">
                        {this.props.heroes.map((hero) =>
                            <tr>
                                <th><img class="hero-image" src={url + hero.img}/></th>
                                <th><span class="hero-name">{hero.tooltipe}</span></th>
                                <th><span class="span-right">{hero.role}</span></th>
                                <th><span class="span-right">{hero.type}</span></th>
                                <th><img class="hero-type-img" src={url + hero.typeImg}/></th>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        heroes: state.heroes,
    }),
    dispatch => ({
        onAddHeroes: (heroes) => {
            dispatch({type: 'ADD_HERO', payload: heroes})
        }
    })
)(Hero);
