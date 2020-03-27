import React, { Component } from "react"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import { toast } from 'react-toastify';
import Bookings from "../Bookings/Bookings";

toast.configure()
export default class BreweryHome extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            beers: [],
            myBookings:[]
        }

        this.bookTable = this.bookTable.bind(this)
        this.myBookings = this.myBookings.bind(this)


    }

    componentDidMount() {

        console.log(this.props.match.params.breweryId)
        axios.get("http://localhost:8080/getBeerList",

            {
                params:
                {
                    breweryId: this.props.match.params.breweryId
                }
            }

        )
            .then(resolve => {
                this.setState({
                    beers: resolve.data,
                    id:this.props.match.params.breweryId
                })
                console.log(this.state.beers);
                console.log(resolve)
            })
    }

    myBookings()
    {
        this.props.history.push(window.location.pathname+"/bookings")
    }

    bookTable()
    {
        console.log(this.state.id)
        axios.get("http://localhost:8080/bookTable",
        {
            params:{
                breweryId:this.state.id,
                userId:JSON.parse(sessionStorage.getItem("user")).id

            }
        })
        .then(resolve=>{
            console.log(resolve)
            if(Object.keys(resolve.data).length>0)
            {
                toast.success("booking confirmed with Table No. "+resolve.data.tableNumber+" at "+resolve.data.breweryTable.name)
                toast.success("details have been sent to your registered email.")
                this.setState({
                    myBookings:resolve.data
                })
            }
            else
            {
                toast.error("Sorry!! No Table Available",{
                    hideProgressBar:true
                })
            }
        })
    }


    render() {
        return (
            <>
                <Navbar brewHome={true} bookMethod={this.bookTable} userId={JSON.parse(sessionStorage.getItem("user")).id}/><br/>
                <div class="container">
                    <div class="row">

                        {this.state.beers.map((value, index) => {
                            return (
                                <>
                                <div class="col-sm-3">
                                <div class="card" style={{ width: "300" }}>
                                    <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image" />
                                    <div class="card-body">
                                        <h4 class="card-title">{value.name}</h4>
                                        <p class="card-text">{value.style}</p>
                                    </div>
                                </div>
                                
                                
                                </div>

                                
                                </>
                            )
                        })}
                    </div>

                </div>
            </>
        )
    }
}