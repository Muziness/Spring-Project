// @ts-ignore
import React, { Component } from 'react'
// @ts-ignore
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Index } from '../Presentational Components/Index'
import { Login } from '../Presentational Components/Login'
import { ShoppingCart } from '../Presentational Components/ShoppingCart'
import { ProceedPayment } from '../Presentational Components/ProceedPayment'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <Route path="/" exact component={Index} />

                <Route path="/Döner" exact component={Index} />
                <Route path="/Pizza" exact component={Index} />
                <Route path="/Aufläufle" exact component={Index} />
                <Route path="/Indisch" exact component={Index} />
                <Route path="/Salate" exact component={Index} />

                <Route path="/Finger-Food" exact component={Index} />
                <Route path="/Getränke" exact component={Index} />
                <Route path="/Schnitzel" exact component={Index} />
                <Route path="/Pasta" exact component={Index} />
                <Route path="/Burger" exact component={Index} />
                <Route path="/Asiatisch" exact component={Index} />
                <Route path="/Vegetarischche-Falafel" exact component={Index} />

                <Route path="/Signup" exact component={Login} />
                <Route path="/Signin" exact component={Login} />
                <Route path="/ShoppingCart" exact component={ShoppingCart} />
                <Route path="/ProceedPayment" exact component={ProceedPayment} />
                </Switch>
            </Router>
        )
    }
}

const app = document.getElementById("home")
ReactDOM.render(<App />, app)

 