// @ts-ignore
import React, { Component } from 'react'
import { Front, Header, Logo, Döner, Pizzas,
         Aufläufle, Indische, Salate, FingerFood,
         Getränke, schnitzel, Pasta,
         Burger, Asiatisch, VegetarischeFalafel } from '../Container Components/Front'
import { Category } from '../Container Components/Category'
import { scroll } from '../packages/helper/scroll.js'
import '../main.css'
import { Items } from '../packages/helper/Data';

export class Index extends Component {
    componentDidMount() {
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerText = String(scroll());
        document.body.appendChild(s);
    }
      
    render() {
        const allItems = [ Döner, Pizzas, Aufläufle, Indische, Salate,
                           FingerFood, Getränke, schnitzel, Pasta, Burger,
                           Asiatisch, VegetarischeFalafel ]
                           
        const itemsTitles = [ "Döner", "Pizzas", "Aufläufle", "Indische", "Salate",
                              "FingerFood", "Getränke", "schnitzel", "Pasta", "Burger",
                              "Asiatisch", "VegetarischeFalafel" ]
        
        const displayAll = allItems.map((value, index) => {
            return(
                <div key={Items[index].key} className={"section " + itemsTitles[index]}>
                    <div className="container">
                            <div className="row pack">
                                <div className={"Cat-Image img" + (index + 1).toString()}></div>
                                <h1 className="centered"> {itemsTitles[index]} </h1>
                            </div>
                            <div key={Math.floor(Math.random() * 2)} className="row">
                                {value}
                            </div>
                        <hr/>
                    </div>
                </div>
            )
        })

        return (
            <Front>
                <div className="container-fuild">
                    <Header>
                        <Logo></Logo>
                    </Header>

                    <Category category={"doner"}
                              id={"1"}
                              section={"1"}
                              imgNo={"1"}
                              imgTitle={"Döner"}></Category>

                    <Category category={"burger"}
                              id={"2"}
                              section={"2"}
                              imgNo={"2"}
                              imgTitle={"Burger"}></Category>
                </div>
            </Front>
        )
    }
}


