import React, {Component} from 'react';
import Head from './part/Head'
import {connect} from 'react-redux';
import './css/hero.css'

class Hero extends Component{

    inputChange() {
    }

    render(){
        return(
            <div>
                <Head/>
                <div class="content-header">
                    <div class="content-header-left slash dota2">
                        <h1 class="hero-list-header">
                            <small>Dota 2 Database</small>
                            All Heroes
                            <small>Power Agility Intelligence</small>
                        </h1>
                    </div>
                </div>
                <div class="content-table">
                    <ul class="list-group">
                        <li class="heroes-search padding-0">
                            <div class="row padding-15">
                                <div class="col-md-10">
                                    <input class="filter form-control" type="text" placeholder="Filter By Name"
                                           ref={(input) => {
                                               this.findInput = input;
                                           }}
                                           onChange={this.inputChange.bind(this)}/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        state: state.hero,
    }),
    dispatch => ({
        onAddHero: (hero) => {
            dispatch({type: 'ADD_HERO', payload: hero})
        }
    })
)(Hero);
