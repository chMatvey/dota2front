import React, {Component} from 'react';
import Head from './part/Head'
import {connect} from 'react-redux';
import $ from 'jquery';
import './css/mem.css'

const urlData = "https://dota2.ru/";

class Mem extends Component {
    constructor(){
        super();
        this.state = {
            url: "http://localhost:8000/get/memes/",
            countLike: 1,
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
            <div className="mem-page">
                <Head/>
                <div class="modal fade show sign-modal" hidden={false}>
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary">Save changes</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mem-content jumbotron">
                    <div className="card border-primary mb-3">
                        <div className="card-header">Admin</div>
                        <img className="mem-img" src="https://dota2.ru/img/memes/2018/07/53114.jpg?0"/>
                        <div className="mem-like-content">
                            <div className="mem-like-left">
                                <img className="like-img mem-padding-right" src="http://cdn.onlinewebfonts.com/svg/img_555587.png"/>
                                <h1>{this.state.countLike}</h1>
                            </div>
                            <div className="mem-like-right">
                                <button className="btn btn-primary mem-button-like">
                                    <img className="like-img" src="http://www.clipartbest.com/cliparts/bcy/xjq/bcyxjqxgi.png"/>
                                </button>
                                <button className="btn btn-primary mem-button-like mem-button-like">
                                    <img className="dislike-img" src="http://www.clipartbest.com/cliparts/bcy/xjq/bcyxjqxgi.png"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <label>Добавьте новый мем</label>
                            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                            <small id="fileHelp" className="form-text text-muted">Загрузите изображение и нажмите кнопку оправить</small>
                            <button className="btn btn-primary">Оправить</button>
                        </div>
                    </form>
                </div>
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
