// @ts-ignore
import React, { Component } from 'react'
import Toast  from 'light-toast'
import axios from 'axios';
import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'

let iconImage = require("../images/add.png")
let itemList = []

export class MenuItem extends Component<IMenuItems> {
    constructor(props){
        super(props)
        this.getItem = this.getItem.bind(this)
    }

    getItem(item): any{
        const param = encodeURIComponent(this.props.Id)
        axios.post('http://localhost:8080/Item/Select/' + param, {
        })
            .then(function (response) {
                if(response.status == 200){
                    Toast.success(item.category + ' added to basket', 3000)
                }else {
                    Toast.fail(item.category + ' unable to add in the basket', 3000)
                }
            })
            .catch(function (error) {
                Toast.fail(error, 3000)
            });
    }
    render() {
        return (
                <div className="meal-menu container card">
                <div className="row p-4">
                    <div className="col-lg-10 pt-4">
                        <div className="row pb-4">
                            <h5> {this.props.category}</h5>
                        </div>
                        <div className="row">
                            <label className="Description"> {this.props.family}</label>
                        </div>
                        <div className="row">
                            <label> {this.props.price} €</label>
                        </div>
                    </div>
                    <div className="col-lg-2 btn-container">
                        <img key={this.props.Id}
                             id={this.props.Id}
                             onClick={()=>{this.getItem(this.props)}}
                             className="addItem "
                             src={iconImage}
                             alt="No Image" />
                    </div>
                </div>
                </div>
        )
    }
}

export interface IMenuItems{
    category: string,
    family: string,
    price: number,
    Id: string
}
