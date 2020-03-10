import React, { Component } from 'react'
import axios from 'axios'
import CounterButton from "./CounterButtons"

export default class CounterComponent extends Component{

    constructor()
    {
        super();
        this.state={
            data:{}
        }
        this.show = this.show.bind(this)
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
    }

    add(count) {
        this.props.addMethod(this.props.data.name, count)
    }

    remove(count) {
        this.props.removeMethod(this.props.data.name, count)
    }

    show(new_data)
    {
        console.log(new_data)
        this.state.items.push({
            name:this.props.data.name,
            cost:new_data[this.props.data.name].cost,
            count:new_data[this.props.data.name].count
        })
        console.log(this.state)
        
    }

    render()
    {
        return(
            <>
                <CounterButton addMethod={this.add} removeMethod={this.remove}/>
            </>
        )
    }
}




export class OrderButton extends Component{
    constructor(){
        super()
        this.printCompleteOrder = this.printCompleteOrder.bind(this)
    }

    printCompleteOrder(){
        console.log("called")
        axios.get('http://localhost:8080/registerOrder',{
            params:{
                json:JSON.stringify({
                    drinkName:"Hello",
                    cost:10,
                    quantity:2
                })
            }
        })

    }

    render(){
        return(
            <button type="submit" onClick={this.printCompleteOrder}>Order</button>
        )
    }

}