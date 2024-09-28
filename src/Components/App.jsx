import React from "react";
import ReactDOM from "react-dom";
import "../App.css"
import Apps from './Part1.jsx';
import Part2 from './Part2.jsx'
import Carts from './Part3.jsx';
import Nav from './Part4.jsx';
import Details from './Part5.jsx';
import data from "./Card.js"

export default class App extends React.Component{
    render(){
        return(
            <>
            <Apps></Apps>
            <Part2></Part2>
            <div id="bg3">
            {data.map(x=>{
                return(
                    <Carts img={x.imgSrc} alt={x.altName} head={x.head} para={x.para} anchor={x.anchor} button={x.button}></Carts>
                )
            })}</div>
            <Details></Details>
            <Nav></Nav>
            </>
        )
    }
}