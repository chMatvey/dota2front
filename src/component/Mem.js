import React, {Component} from 'react';
import Head from './part/Head'
import {connect} from 'react-redux';
import $ from 'jquery';
import './css/item.css'

const urlData = "https://dota2.ru/";

class Mem extends Component {
    constructor(){
        super();
        this.state = {
            url: "http://localhost:8000/get/memes/",
        };
        this.addMem = this.addMem.bind(this);
    }

    componentDidMount(){

    }

    addMem(id){
        $.ajax({
            url: (this.state.url),
            dataType: 'json',
            cache: false,
            success: function (data) {
                data.forEach((mem) => {
                    this.props.onAddMem(mem);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.state.url, status, err.toString());
            }.bind(this)
        });
    }

    render() {
        return (
            <div>
                <Head/>
            </div>
        )
    }
}

export default connect(
    state => ({
        memes: state.mem,
    }),
    dispatch => ({
        onAddMem: (mem) => {
            dispatch({type: 'ADD_MEM', payload: mem})
        },
    })
)(Mem);
