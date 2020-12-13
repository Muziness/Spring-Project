// @ts-ignore
import React, { Component } from 'react'
import { placeOrder } from '../packages/helper/checkout.js'

export class Order extends Component <IOrder> {

    componentDidMount(){
        placeOrder(this.props.ammount)
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

interface IOrder{
    ammount: string
}

