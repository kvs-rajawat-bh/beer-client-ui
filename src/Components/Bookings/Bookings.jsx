import React, {Component} from "react"
import Navbar from "../Navbar/Navbar"
import axios from "axios"


export default class Bookings extends Component{

    constructor()
    {
        super();
        this.state={
            bookings:[]
        }
    }

    componentDidMount()
    {
        axios.get("http://localhost:8080/getBookings",
        {
            params:{
                userId:JSON.parse(sessionStorage.getItem("user")).id
            }
        }).then(resolve=>{
            this.setState({
                bookings:resolve.data
            })
        })
    }


    render()
    {
        return(
            <div>
                <Navbar bookingPage={true}/>
                <ul>
                    {this.state.bookings.map((value, key)=>{
                        return(
                            <>
                            <li>Table NO : {value.tableNumber}</li>
                            <button className="btn btn-default" type="submit">Check In</button>
                            </>
                        )
                    })}
                    
                </ul>
            </div>
        )
    }
}