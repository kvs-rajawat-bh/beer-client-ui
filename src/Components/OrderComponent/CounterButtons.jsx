import React, {Component} from 'react'

export default class CounterButton extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.add = this.add.bind(this)
        this.remove = this.remove.bind(this)
    }


    add()
    {
        this.setState({
            count:this.state.count+1
        })
        this.props.addMethod(this.state.count+1)
        
    }

    remove()
    {
        this.setState({
            count:this.state.count-1
        })
        this.props.removeMethod(this.state.count-1)
    }

    render() {
        return (
                <div class="col-lg-6">
                    <div className="input-group">
                        <span class="input-group-btn">
                            <button type="button" onClick={this.remove} className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="">
                                <span class="glyphicon glyphicon-minus"></span>
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" value={this.state.count} />
                            <span class="input-group-btn">
                                <button type="button" onClick={this.add} className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                    <span className="glyphicon glyphicon-plus"></span>
                                </button>
                            </span>
                    </div>
                </div>
                )
        }
}