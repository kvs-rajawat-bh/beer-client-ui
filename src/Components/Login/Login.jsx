import React, {Component} from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom';

class Login extends Component{

    constructor()
    {
        super();
        this.state={
            username : "",
            password : "",
            loginFailed : false,
            loginSuccess : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.validate = this.validate.bind(this)
    }

    handleChange(event)
    {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    validate = ()=>
    {
        axios.get("http://localhost:8080/login",
        {
            params : {
                username : this.state.username,
                password : this.state.password
            }
        }).then(resolve=>{
            console.log(resolve.data)
            if(Object.keys(resolve.data).length>0)
            {
                this.setState({
                    loginSuccess:true,
                    loginFailed:false
                })
                console.log("valid");
                this.props.history.push("/beer")
            }
            else
            {
                console.log(resolve)
            }
        })
    }

    render()
    {
        return(
            <div className="loginForm">
                {this.state.loginFailed && <div>Invalid Credentials</div>}
                Username : <input type="text" name="username" onChange={this.handleChange}/><br/>
                Password : <input type="password" name="password" onChange={this.handleChange}/><br/>
                <button onClick={this.validate}>Login</button>
            </div>
        )
    }
}


export default Login