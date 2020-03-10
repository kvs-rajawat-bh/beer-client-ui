import React, {Component} from 'react'
import axios from 'axios'
import "./Index.css"
import {Link} from 'react-router-dom'
import Login from "../Login/Login"
import SearchBrewery from "../SearchBrewery/SearchBrewery"
import PriceList from '../PriceList/PriceList'


export default class Index extends Component{

    constructor()
    {
        super();
        this.state={
            user:null
        }
        this.isLoggedIn = this.isLoggedIn.bind(this)
    }

    componentDidMount()
    {
        this.setState({
            user:sessionStorage.getItem("user")
        })
    }

    isLoggedIn()
    {
        if(sessionStorage.getItem("user")===null)
        {
            return <Login />
        }
        else {
            return <PriceList />
        }
    }

    render()
    {
        return(
            this.isLoggedIn()
        )
    }

}