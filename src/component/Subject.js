import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Head from './part/Head';
import './css/subject.css'
import sections from "../reducer/section";
import $ from "jquery";

const urlData = "https://dota2.ru/";

class Subject extends Component{
    constructor(){
        super();
        this.state = {
            url: "http://localhost:8000/get/sections",
        };
        this.addSection = this.addSection.bind(this);
    }

    componentDidMount(){
        if (this.props.sections.length === 0){
            this.addSection();
        }
    }

    addSection(){
        $.ajax({
            url: (this.state.url),
            dataType: 'json',
            cache: false,
            success: function (data) {
                data.forEach((section) => {
                    this.props.onAddSection(section);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.state.url);
            }.bind(this)
        });
    }

    render(){
        return(
            <div>
                <Head/>
                <div class="second-header-subject">
                    <h3 class="hero-list-header">
                        <small>Dota 2 Database</small>
                        <br/>
                        All Items<br/>
                        <small>different sections</small>
                    </h3>
                </div>
                <div class="content-table jumbotron content-subject">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            {this.props.sections.map((section) =>
                            <th><img src={urlData + section.img}/></th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.sections.map((section) =>
                        <th>
                            {section.subjects.map((subject) =>
                            <tr><div class="subjects-item">
                                <img class="subject-image" src={urlData + subject.img}/>
                                <div hidden={true}></div>
                            </div></tr>)}>
                        </th>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        sections: state.sections,
    }),
    dispatch => ({
        onAddSection: (section) => {
            dispatch({type: "ADD_SECTION", payload: section})
        }
    })
)(Subject);
