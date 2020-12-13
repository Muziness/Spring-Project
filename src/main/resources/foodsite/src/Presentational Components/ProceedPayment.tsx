// @ts-ignore
import React, { Component } from 'react'
import { Payment } from '../Container Components/Payment'
import { Front, Header, Logo } from '../Container Components/Front'
// import { PayPalButton } from 'react-paypal-button-v2'
import { Order } from '../Container Components/RequestOrder'
import {Category} from "../Container Components/Category";
import {BrowserRouter as Router} from "react-router-dom";


export class ProceedPayment extends Component<{}, {scriptLoaded: boolean}> {
    constructor(props){
        super(props)
        this.state = {
            scriptLoaded : false
        }
    }
    // componentDidMount(){
        
    //     const script = document.createElement('script')
    //     script.src = "https://www.paypal.com/sdk/js?Acjjlnvu2fsncrnohwk9xYqHUe47okJBQDEvdlPVshLhdenSfWUYZ1xDp2ZTmOIuwcuY06aavGxhwflp"
    //     script.addEventListener("load",  () => this.setState({scriptLoaded: true}))
    //     document.body.appendChild(script)

    //     if(this.state.scriptLoaded){
    //         setTimeout(() => {
    //             window.paypal.Buttons({
    //                 create.order: (data, actions) => {
    //                     return actions.order.create({
    //                         purchase_unit: [
    //                             {
    //                                 // descriotion: product.descritption,
    //                                 amount: {
    //                                     currency_code : 'EUR',
    //                                     value: "10"
    //                                 }
    //                             }
    //                         ]
    //                     })
    //                 },
    //                 onApprove: async (data, actions) => {
    //                     const order = await actions.order.capture()
    //                     console.log(order)
    //                 }
    //             }).render("#order")
    //         })
    //     }

    // }
    render() {
        const amount = "100"
        return (
            <Payment>
                <Front>
                    <Header>
                        <Logo></Logo>
                    </Header>
                    <Order ammount={amount} ></Order>
                </Front>
            </Payment>
        )
    }
}
