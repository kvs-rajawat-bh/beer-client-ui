import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Login from "../Login/Login"
import PriceList from '../PriceList/PriceList'
import first from "./image1.jpg"
import Navbar from "../Navbar/Navbar"


export default class Index extends Component {

    constructor() {
        super();
        this.state = {
            user: null
        }
        this.isLoggedIn = this.isLoggedIn.bind(this)
    }

    componentDidMount() {
        this.setState({
            user: sessionStorage.getItem("user")
        })
    }

    isLoggedIn() {
        if (sessionStorage.getItem("user") === null) {
            return <Login />
        }
        else {
            return <PriceList />
        }
    }

    render() {
        return (
            <div className="container-xl">
                <Navbar/>
                
                <div>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner" style={{ height: "1000px" }}>
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={first} alt="First slide" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}