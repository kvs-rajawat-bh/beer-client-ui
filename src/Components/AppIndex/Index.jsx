import React, { Component } from 'react'
//import axios from 'axios'
//import { Link } from 'react-router-dom'
import Login from "../Login/Login"
//import PriceList from '../PriceList/PriceList'
import BreweryCard from "../BreweryCard/BreweryCard"
import Navbar from "../Navbar/Navbar"
//import MainCarousel from "../MainCarousel/MainCarousel"


export default class Index extends Component {

    constructor() {
        super();
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.setState({
            user: sessionStorage.getItem("user")
        })
    }

    render() {
        return (

            <div className="container-xl">
                <Navbar/>
                {sessionStorage.getItem("user")!=null && <BreweryCard/>}

            </div>
        )
    }

}