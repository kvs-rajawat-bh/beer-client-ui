import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Counter.css';


export default class Counter extends Component{

    constructor()
    {
        super();
        this.state={
            counter : 0
        }
        this.increment = this.increment.bind(this);
    }

    render(){
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment}></CounterButton>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }

    increment(by)
    {
        this.setState({
            counter:this.state.counter+by
        })
    }
}

export class CounterButton extends Component{

    //Define initial state in constructor
    //state => counter 0

    constructor(){
        super(); 
        this.state={
            counter:0
        }
        this.increment = this.increment.bind(this);
    }

    render() {
        return(
            <div className="counterButton">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }
    increment()
    {
        this.setState({
            counter:this.props.by
        });
        this.props.incrementMethod(this.props.by);
    }
}




