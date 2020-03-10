import React, { Component } from "react"
import axios from "axios";
import PriceList from "../PriceList/PriceList";



export default class SearchBrewery extends Component {

    constructor()
    {
        super();
        this.state={
            breweryName:"",
            beerList:[]
        }
        this.handler = this.handler.bind(this)
        this.search = this.search.bind(this)

    }

    handler(event)
    {
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    search()
    {
        axios.get("http://localhost:8080/getBeerList", 
        {
            params:{
                breweryName:this.state.breweryName
            }
        }).then(resolve=>{
                // this.setState({
                //     beerList:resolve.data
                // })
                console.log(typeof resolve.data)
        }
        )

    }
    render() {
        return (
            <div>
                <input type="text" placeholder="search" name="breweryName" onChange={this.handler}></input>
                <button type="submit" onClick={this.search}>search</button>

                {Object.keys(this.state.beerList).length>0 && 
                
                    <PriceList data={this.state.beerList}/>
                }
                
            </div>
        )
    }
}