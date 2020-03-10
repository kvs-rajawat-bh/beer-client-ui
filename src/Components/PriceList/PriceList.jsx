import React, { Component } from 'react'
import axios from 'axios'
import "./PriceList.css"
import CounterButton from "../OrderComponent/CounterButtons"
import CounterComponent from "../OrderComponent/OrderComponents"

export default class PriceList extends Component {

    constructor() {
        super();
        this.state = {
            breweryName: "",
            beerList:[],
            data:{}
        }

        this.update = this.update.bind(this);
        this.searchBrewery = this.searchBrewery.bind(this);
        this.sendOrder = this.sendOrder.bind(this)
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
    }
    update(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    add(count, name)
    {
        let obj = this.state.data
        obj[count]=name
        this.setState({
            data:obj
        })
    }

    remove(count, name)
    {
        let obj = this.state.data
        obj[count] = name
        this.setState({
            data:obj
        })
    }

    sendOrder()
    {
        axios({url:"http://localhost:8080/registerOrder",
                method:"POST",
                params:{
                    breweryName:this.state.breweryName,
                    json:JSON.stringify(this.state.data)
                },
        })
    }

    searchBrewery() {
        axios.get("http://localhost:8080/getBeerList",

            {
                params:
                {
                    breweryName: this.state.breweryName
                }
            }

        )
            .then(resolve => {
                this.setState({
                    beerList: resolve.data
                })
                console.log(this.state.beerList);
            })
    }
    order(name) {
        console.log(name)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Search</h1>
                    <input type="text" onChange={this.update} name="breweryName" /><br />
                    <button type="text" onClick={this.searchBrewery}>Search</button>
                </div>
                
                    <div>
                    {Object.keys(this.state.beerList).length > 0 &&
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Cost</th>
                                                    <th>Order Now</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {this.state.beerList.map((value, index) => {
                                                    return (
                                                        <tr>
                                                            <td>{value.name}</td>
                                                            <td>{value.cost}$</td>
                                                            <td><CounterComponent addMethod={this.add} removeMethod={this.remove} data={value} /></td>
                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        }
                    </div>

                    <button onClick={this.sendOrder}>order</button>

            </div >
                                        
        )
}
}