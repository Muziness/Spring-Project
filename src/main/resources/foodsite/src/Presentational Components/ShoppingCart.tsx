// @ts-ignore
import React, { Component } from 'react'
import {Cart, Details, ItemTable, ProceedOrder, Quantity} from '../Container Components/Cart'
import { Front, Header, Logo } from '../Container Components/Front'
import axios from 'axios'
import Toast from "light-toast";

export class ShoppingCart extends Component<{}, {OrderedItems, hasErrors}>{
    constructor(props) {
        super(props);
        this.loadData = this.loadData.bind(this)
        this.withShippment = this.withShippment.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.increament = this.increament.bind(this)
        this.decreament = this.decreament.bind(this)
        this.subTotal = this.subTotal.bind(this)
        this.updateSubTotal = this.updateSubTotal.bind(this)
        this.state = {
            OrderedItems: [],
            hasErrors: false
        }
    }

    componentDidMount(){
        this.loadData()
    }

    loadData(){
        const url = "http://localhost:8080/Item/true";
        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({OrderedItems: response}))
            .catch(() => this.setState({hasErrors: true}))
    }

    removeItem(id){
        axios.post("http://localhost:8080/Item/remove/" + id, {
        }).then(function(response){
            if(response.status == 200){
                Toast.success("Item removed successfully..", 4000)
                window.location.reload()

            }else{
                Toast.fail("Something went wrong..", 3000)
            }
        }).catch(function(error){
            Toast.fail(error, 3000)
        })
    }

    withShippment(subtotal, charge){
        return (parseFloat(subtotal) + charge)
    }

    increament(elem){
        var itemQuantity = document.getElementById(elem + "Quantity")
        var itemPrice = document.getElementById("item" + elem)
        var subtotal = document.getElementById("subTotal")
        var totalPrice = document.getElementById("totalPrice")

        var val = parseFloat(itemPrice.innerHTML)
        // @ts-ignore
        itemPrice.innerHTML = (this.state.OrderedItems[elem].price + val).toFixed(2)

        // @ts-ignore
        itemQuantity.value++
        this.updateSubTotal(subtotal, totalPrice)
    }

    decreament(elem){
        var itemQuantity= document.getElementById(elem + "Quantity")
        var itemPrice = document.getElementById("item" + elem)
        var subtotal = document.getElementById("subTotal")
        var totalPrice = document.getElementById("totalPrice")
        // @ts-ignore
        if(itemQuantity.value != 1){

            var val = parseFloat(itemPrice.innerHTML)
            itemPrice.innerHTML = ((val - this.state.OrderedItems[elem].price).toFixed(2)).toString()
            // @ts-ignore
            itemQuantity.value--
            this.updateSubTotal(subtotal, totalPrice)
        }
    }

    updateSubTotal(subtotal, totalPrice){
        var prices = [], sum = 0
        for(var i = 0; i < this.state.OrderedItems.length; i++){
            prices[i] = parseFloat(document.getElementById("item" + i).innerHTML)
            sum += prices[i]
        }
        subtotal.innerHTML = sum.toFixed(2) + " €"
        totalPrice.innerHTML = this.withShippment(sum, 2).toFixed(2) + " €"
        return sum
    }

    subTotal(){
        var sum = 0
        for(var i = 0; i < this.state.OrderedItems.length; i++){
            sum = sum + this.state.OrderedItems[i].price
        }
        return sum
    }

    render(){
        const ItemsList = this.state.OrderedItems.map((arr, i) => {
            return(
                <tr id={this.state.OrderedItems[i].item_id}>
                    <th scope="row">{i + 1}</th>
                    <td>{this.state.OrderedItems[i].item_name}</td>
                    <td>
                        <Quantity Id={i + "Quantity"}
                                  count={1}
                                  increase={()=>this.increament(i)}
                                  decrease={()=>this.decreament(i)}/>
                    </td>
                    <td id ={"item" + i}>{this.state.OrderedItems[i].price.toFixed(2)}</td>
                    <td><i className="fa trash"
                           onClick={() => this.removeItem(this.state.OrderedItems[i].item_id)} >&#xf014;</i></td>
                </tr>
            )
        });
        return (
            <Cart>
                <Front>
                    <Header>
                        <Logo></Logo>
                    </Header>
                    <div id="shop-cart" className="container">
                        <div id="cart-title" className="row">
                            <h3> Your Order, please re-check and proceed! </h3>
                        </div>
                        <br/>
                        <div className="row">
                            <ItemTable>
                                {ItemsList}
                            </ItemTable>
                        </div>
                        <hr/>
                        <div id="shop-detials" className="row">
                            <Cart>
                                <table>
                                    <Details subTotal={(this.subTotal()).toFixed(2).toString() + " €"}
                                             shippingCost="2.00 €"
                                             totalCost={(this.withShippment(this.subTotal(),2.00)).toFixed(2).toString() + " €"} />
                                </table>
                            </Cart>
                        </div>
                        <hr/>
                        <div id="shop-btn" className="row">
                            <ProceedOrder></ProceedOrder>
                        </div>
                    </div>
                </Front>
            </Cart>
        )
    }
}
