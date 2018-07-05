import React, {Component} from 'react';
import Head from './part/Head'
import './css/sign.css'

class SignIn extends Component {
    render() {
        return (
            <div>
                <Head/>
                <div className="jumbotron login-content padding-top">
                    <form method="post" action="http://localhost:8000/login">
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
