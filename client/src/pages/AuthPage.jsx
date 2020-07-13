import React, {useState} from "react";
import axios from 'axios';

const AuthPage = () => {

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = () => {
        axios.post(`/api/auth/register`, {...form}).then(response => {
            return response.data
        })
    }
    const loginHandler = () => {
        axios.post(`/api/auth/login`, {...form}).then(response => {
            return response.data
        })
    }
    axios.get(`/api/auth/users`,{withCredentials:true}).then(response => {
        console.log(response.data)
        return response.data
    })

    return (
        <div className='row'>
            <div className='col s6 offset-s3'>
                <h3> Сократит Ссылку </h3>
                <div className="card blue darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input id="email"
                                       type="email"
                                       placeholder="введите email"
                                       className="yellow-input"
                                       name="email"
                                       onChange={changeHandler}
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input id="password"
                                       type="password"
                                       placeholder="введите пароль"
                                       className="yellow-input"
                                       name="password"
                                       onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className='btn yellow darken-4'
                            onClick={loginHandler}> Войти
                        </button>
                        <button
                            className='btn grey lighten-2 black-text'
                            onClick={registerHandler}> Регистрироваться
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage