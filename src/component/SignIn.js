import React, {Component} from 'react';
import Head from './part/Head'
import './css/sign.css'

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            alertIsHidden: true
        }
    }

    componentWillMount(){
        let info = document.URL+"";
        console.log(info);
        if (info.indexOf("error")+1){
            this.setState({
                alertIsHidden: false
            })
        }
    }

    btnClick(){
        this.setState({
            alertIsHidden: true
        })
    }

    render() {
        return (
            <div>
                <Head ref="head"/>
                <div hidden={this.state.alertIsHidden} onClick={this.btnClick.bind(this)} className="alert alert-dismissible alert-danger alert-message">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Invalid username or password!</strong>  Repeat please.
                </div>
                <div className="jumbotron login-content padding-top">
                    <form>
                        <fieldset>
                            <legend align="center">Авторизация</legend>
                            <div className="form-group">
                                <label>Логин</label>
                                <input type="text" name="username" className="form-control" placeholder="Введите ваш логин"/>
                            </div>
                            <div className="form-group">
                                <label>Пароль</label>
                                <input type="password" name="password" className="form-control" placeholder="Введите ваш пароль"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Оправить</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignIn;
