// @ts-ignore
import React, {Component} from 'react';
import {Items} from "../packages/helper/Data";
import {MenuItem} from "./MenuItem";

export class Category extends Component<ICategory, {DATA, hasErrors}> {
    constructor(props) {
        super(props);
        this.state = {
            hasErrors: false,
            DATA: []
        }
    }
    componentDidMount() {
        const param = encodeURIComponent(this.props.category)
        const url = "http://localhost:8080/Item/allItems/" + param
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ DATA: response }))
            .catch(() => this.setState({ hasErrors: true }));
    }
    render() {
        const getItems = this.state.DATA.map((arr, i) => {
            return(
                <MenuItem category={this.state.DATA[i].item_name}
                          key = {i}
                          family={this.state.DATA[i].item_Description}
                          price={this.state.DATA[i].price}
                          Id={this.state.DATA[i].item_id}></MenuItem>
            )
        })
        return (
            <div id = {this.props.id} className={"section " + this.props.section}>
                <div className="container">
                    <div className="row pack">
                        <div className={"Cat-Image img" + this.props.imgNo}></div>
                        <h1 className="centered"> {this.props.imgTitle} </h1>
                    </div>
                    <div key={Math.floor(Math.random() * 2)} className="row">
                        {getItems}
                    </div>
                    <hr/>
                </div>
            </div>
        );
    }
}

interface ICategory {
    category: string,
    id: string,
    section: string,
    imgNo: string,
    imgTitle: string
}