// @ts-ignore
import React, { Component } from 'react'

export function Cart(props) { // Cart main component
    return (
        <div>
            {props.children}
        </div>
    )
}

export function Details(props: ICart) { // shows your order list
    return(
        <div className="container">
            <tr>
                <div className="row">
                    <td>
                        <div className="col-md">
                            <label> Subtotal </label>
                        </div>
                    </td>
                    <td id="td1">
                        <div className="col-md detail-space">
                            <label id="subTotal" > {props.subTotal} </label>
                        </div>
                    </td>
                </div>
            </tr>
            <tr>
                <div className="row">
                    <td>
                        <div className="col-md">
                            <label> Shipping Cost </label>
                        </div>
                    </td>
                    <td id="td2">
                        <div className="col-md detail-space">
                            <label> {props.shippingCost} </label>
                        </div>
                    </td>
                </div>
            </tr>
            <tr>
                <div className="row">
                    <td>
                        <div className="col-md">
                            <label> Total </label>
                        </div>
                    </td>
                    <td id="td3">
                        <div className="col-md detail-space">
                            <label id="totalPrice"> {props.totalCost} </label>
                        </div>
                    </td>
                </div>
            </tr>
        </div>
    )
}

export function ProceedOrder(){ // confirm your order (Order button)
    return(
        <form action="/ProceedPayment">
            <input className="btn btn-primary" id="order" type="submit" value="Proceed Order" />
        </form>
    )
}

export function ItemTable(props){
    return(
        <table className="table table-borderless">
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {props.children}
            </tbody>
        </table>
    )
}

export function Quantity(props: IQuantity){
    return(
        <form>
            <div className="value-button" id="decrease"
                 onClick={props.decrease}>-
            </div>
            <input className="number" type="number" id={props.Id} value={props.count}/>
            <div className="value-button" id="increase"
                 onClick={props.increase}>+
            </div>
        </form>
    )
}

interface ICart{
    subTotal: number | string,
    shippingCost: number | string,
    totalCost: number | string
}
interface IQuantity {
    count: number,
    Id: string,
    increase: any,
    decrease: any
}