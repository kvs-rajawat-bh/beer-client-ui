import React, {Component} from 'react'
import {Link} from "react-router-dom"

export default class Navbar extends Component{
    constructor()
    {
        super();
        this.state={
            isLoggedIn:false
        }
    }

    componentDidMount()
    {
        if(sessionStorage.getItem("user")!=null)
        {
            this.setState({
                isLoggedIn:true
            })
        }
    }
    render()
    {
        return(
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed">
                    <a class="navbar-brand" href={"/"}>BrewBeer</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="nav navbar-nav ml-auto">
                            {sessionStorage.getItem("user")==null && 
                            <>
                                <li class="nav-item">
                                    <Link className="nav-link" to={"/login"}>Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to={"/signup"}>SignUp</Link>
                                </li>
                            </>
                            }
                            {this.state.isLoggedIn && 
                                <li class="nav-item">
                                    <Link className="nav-link" to={"/logout"}>Logout</Link>
                                </li>
                            }
                            <li class="nav-item">
                                <Link className="nav-link" to={"/contact"}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}