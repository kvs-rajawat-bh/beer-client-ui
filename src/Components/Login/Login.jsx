import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';
import "./login.css"

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            loginFailed: false,
            loginSuccess: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.validate = this.validate.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = () => {
        axios.get("http://localhost:8080/login",
            {
                params: {
                    username: this.state.username,
                    password: this.state.password
                }
            }).then(resolve => {
                console.log(resolve.data)
                if (Object.keys(resolve.data).length > 0) {
                    this.setState({
                        loginSuccess: true,
                        loginFailed: false
                    })
                    console.log("valid");
                    this.props.history.push("/beer")
                }
                else {
                    console.log(resolve)
                }
            })
    }

    render() {
        return (
            <div class="container">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header">
                            <h3>Sign In</h3>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="input-group form-group">
                                    {this.state.loginFailed && <p>Login Failed</p>}
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control" onChange={this.update} placeholder="username"/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" onChange={this.update} placeholder="password"/>
					            </div>
                                <div class="row align-items-center remember">
                                    <input type="checkbox"/>Remember Me
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right login_btn"/>
					            </div>
				            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account?<a href="#">Sign Up</a>
                            </div>
                            <div class="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}


export default Login