
// @ts-ignore
import React, { useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MenuItem } from '../Container Components/MenuItem'
import { Items } from '../packages/helper/Data'
import Toast  from 'light-toast'
import '../main.css'
let iconImage = require("../images/add.png")


export function Front(props) {
    return (
        <div>
            {props.children}
        </div>
    )
}

export function Header(props) {
    return (
            <div className="card fixed-top">
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Link to="/">
                        <Navbar.Brand>
                            {props.children}
                        </Navbar.Brand>
                    </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="mr-auto services">
                    <Link to="/Döner"> Döner </Link>
                    <Link to="/Finger-Food"> Finger Food </Link>
                    <Link to="/Schnitzel"> Schnitzel </Link>
                    <Link to="/Pizza"> Pizza </Link>
                    <Link to="/Pasta"> Pasta </Link>
                    <Link to="/Salate"> Salate </Link>
                    <Link to="/Aufläufle"> Aufläufle </Link>
                    <Link to="/Burger"> Burger </Link>
                    <Link to="/Indisch"> Indisch </Link>
                    <Link to="/Asiatisch"> Asiatisch </Link>
                    <Link to="/Getränke"> Getränke </Link>
                    <Link to="/Vegetarischche-Falafel"> Vegetarischche Falafel </Link>

                    </Nav>
                    <Nav>
                        <Link to="/Signin">
                            <li className="navBar-last">Login</li>
                        </Link>
                        <Link to="/ShoppingCart">
                            <li className="navBar-last">Show Order</li>
                        </Link>
                        <Link to="/">
                            <li className="navBar-last">ENG</li>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
    )
}

export function Logo() {
    return (
        <div className="rest-logo">
            <div className="rest-logo-container">
                <div className="rest-logo-inner card">
                    <div className="logo"></div>
                </div>
            </div>      
        </div>
    )
}

// export function MenuItem(props: IMenuItems) {
//     return (
//         <div key={props.Id} className="meal-menu container card">
//                 <div className="row p-4">
//                     <div className="col-lg-10 pt-4">
//                         <div className="row pb-4">
//                             <h5> {props.category}</h5>
//                         </div>
//                         <div className="row">
//                             <label className="Description"> {props.family}</label>
//                         </div>
//                         <div className="row">
//                             <label> {props.price} €</label>
//                         </div>
//                     </div>
//                     <div className="col-lg-2 btn-container">
//                         <Link to=""> <img className="addItem" src="src/images/add.png" alt="No Image" /> </Link>                    
//                     </div>
//                 </div>
//         </div>
//     )
// }
function getItem(item): any{
    Toast.success(item.category + ' added to basket', 3000)
}

export function MenuItemWithKG(props: IMenuItemsWithKG) {
    return (
        <div key={props.Id} className="meal-menu container card">
                <div className="row p-4">
                    <div className="col-lg-10 pt-4">
                        <div className="row pb-4">
                            <h5> {props.category}</h5>
                        </div>
                        <div className="row">
                            <label className="Description"> {props.family}</label>
                        </div>
                        <div className="row">
                            <p><span> klein : {props.kleinPrice} €, Größ : {props.größPrice} €</span></p>
                        </div>
                    </div>
                    <div className="col-lg-2 btn-container">
                        <img className="addItem" src={iconImage} onClick={() => {getItem(props)}} alt="No Image" />                    
                    </div>
                </div>
        </div>
    )
}

export const Döner = Items[0].Döner.map((arr, i) => {
    return(
        <MenuItem key={i} Id={Items[0].Döner[i].key}
                  category={Items[0].Döner[i].Flavor}
                  family={Items[0].Döner[i].Dressing}
                  price={Items[0].Döner[i].Price} />
    )
})
export const FingerFood = Items[1]["Finger Food"].map((arr, i) => {
    return(
        <MenuItemWithKG key={i} Id={Items[1]["Finger Food"][i].key}
                  category={Items[1]["Finger Food"][i].Flavor}
                  family={Items[1]["Finger Food"][i].Dressing}
                  größPrice={Items[1]["Finger Food"][i]["Groß Price"]}
                  kleinPrice={Items[1]["Finger Food"][i]["Klein Price"]} />
    )
})
export const schnitzel = Items[2].schnitzel.map((arr, i) => {
    return(
        <MenuItem key={i} Id={Items[2].schnitzel[i].key}
                  category={Items[2].schnitzel[i].Flavor}
                  family={Items[2].schnitzel[i].Dressing}
                  price={Items[2].schnitzel[i].Price} />
    )
})
export const Pizzas = Items[3].Pizza.map((arr, i) => {
    return(
        <MenuItem key={i} Id={Items[3].Pizza[i].key}
                  category={Items[3].Pizza[i].Flaour}
                  family={Items[3].Pizza[i].Dressing}
                  price={Items[3].Pizza[i].Price} />
    )
})
export const Pasta = Items[4].Pasta.map((arr, i) => {
    return(
        <MenuItem key={i} Id={Items[4].Pasta[i].key}
                  category={Items[4].Pasta[i].Flavor}
                  family={Items[4].Pasta[i].Dressing}
                  price={Items[4].Pasta[i].Price} />
    )
})
export const Salate = Items[5].Salate.map((arr, i) => {
    return(
        <MenuItemWithKG key={i} Id={Items[5].Salate[i].key}
                  category={Items[5].Salate[i].Flavor}
                  family={Items[5].Salate[i].Dressing}
                  größPrice={Items[5].Salate[i]["Groß Price"]}
                  kleinPrice={Items[5].Salate[i]["Klein Price"]} />
    )
})
export const Aufläufle = Items[6].Aufläufle.map((arr, i) => {
    return(
        <MenuItem key={i} Id={Items[6].Aufläufle[i].key}
                  category={Items[6].Aufläufle[i].Flavor}
                  family={Items[6].Aufläufle[i].Dressing}
                  price={Items[6].Aufläufle[i].Price} />
    )
})
export const Burger = Items[7].Burger.map((arr, i) => {
    return(
        <MenuItem key={i} Id={Items[7].Burger[i].key}
                  category={Items[7].Burger[i].Flavor}
                  family=""
                  price={Items[7].Burger[i].Price} />
    )
})
export const Indische = Items[8].Indische.map((arr, i) => {
    return(
        <MenuItem key={i} Id={Items[8].Indische[i].key}
                  category={Items[8].Indische[i].Flavor}
                  family={Items[8].Indische[i].Dressing}
                  price={Items[8].Indische[i].Price} />
    )
})
export const Asiatisch = Items[9].Asiatisch.map((arr, i) => {
    return(
        <MenuItem key={i} Id={Items[9].Asiatisch[i].key}
                  category={Items[9].Asiatisch[i].Flavor}
                  family={Items[9].Asiatisch[i].Dressing}
                  price={Items[9].Asiatisch[i].Price} />
    )
})
export const Getränke = Items[10].Getränke.map((arr, i) => {
    return(
        <MenuItemWithKG key={i} Id={Items[10].Getränke[i].key}
                  category={Items[10].Getränke[i].Flavor}
                  family={Items[10].Getränke[i].Dressing}
                  größPrice={Items[10].Getränke[i]["Groß Price"]}
                  kleinPrice={Items[10].Getränke[i]["Klein Price"]} />
    )
})
export const VegetarischeFalafel = Items[11]["Vegetarische falafel"].map((arr, i) => {
    return(
        <MenuItem key={i} Id={Items[11]["Vegetarische falafel"][i].key}
                  category={Items[11]["Vegetarische falafel"][i].Flavor}
                  family={Items[11]["Vegetarische falafel"][i].Dressing}
                  price={Items[11]["Vegetarische falafel"][i].Price} />
    )
})



export interface IMenuItems{
    category: string,
    family: string,
    price: number,
    Id: string
}
export interface IMenuItemsWithKG{
    category: string,
    family: string,
    kleinPrice: number,
    größPrice: number,
    Id: string
}


