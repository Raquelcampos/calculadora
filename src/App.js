import React, { Component } from "react";
import styled from 'styled-components';
export const Calculadora = styled.div`
width: 350px; 
height: 350px;
border:solid 2px blueviolet; 
align-items:center;
display:flex;
flex-direction:column;
margin:0 auto;
background-color:lightseagreen;
section{
  display: flex;
  align-items:center;
  justify-content: space-around;
  height:25vh;
  width:250px;
  background-color:yellow;

}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input{
  margin-top:-30px;
  width:40px;
  height:40px;
  color:white;
  border-radius:50%;
  text-align:center;
  background-color:black;
  border:none;
}

 `
 export const Boca = styled.div`
width:30px;
height:5px;
border:solid 2px;
margin-top:-40px;
border-radius:0px 0px 50% 50%;
 
 `
 export const Btn1 = styled.button` 
 width:30px;
 height:25px;
 border: none;
 position:absolute;
 left:30px;
 top:0;
 color:white;
 background:blue;
 cursor:pointer;
 `
 export const Btn2 = styled.button` 
 width:30px;
 height:25px;
 border: none;
 position:absolute;
 left:0;
 top:25px;
 color:white;
 background:blue;
 cursor:pointer;
 `
 export const Btn3 = styled.button` 
 width:30px;
 height:25px;
 border: none;
 position:absolute;
 left:60px;
 top:25px;
 color:white;
 background:blue;
 cursor:pointer;
 `
 export const Btn4 = styled.button` 
 width:30px;
 height:25px;
 border: none;
 position:absolute;
 left:30px;
 top:50px;
 color:white;
 background:blue;
 cursor:pointer;
 `
 export const Btn5 = styled.button` 
 width:30px;
 height:25px;
 border: none;
 position:absolute;
 left:30px;
 top:25px;
 color:white;
 background:blue;
 cursor:pointer;
 `
 export const Btn = styled.div` 
 position:relative;
 width:250px;
 top:12%;
 height:12vh;
 h2{
  position: absolute;
  right:0;
  top:5px;
 }
 h3{
  position: absolute;
  right:5%;
  top:30px;
 }
 `

export default class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: "",
    operator:""
  };
  soma = () => {
    this.setState({
      result: this.state.n1 + this.state.n2,
      operator:"+"
    });
  };
  sub = () => {
    this.setState({
      result: this.state.n1 - this.state.n2,
      operator:"-"
    });
  };
  mult = () => {
    this.setState({
      result: this.state.n1 * this.state.n2,
      operator:"*"
    });
  };
  div = () => {
    this.setState({
      result: this.state.n1 / this.state.n2,
      operator:"/"
    });
  };
  clear = () => {
    this.setState({
      n1: "",
      n2: "",
      result: ""
    });
  };
  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };
  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  render() {
    return (
      <Calculadora>
        <h1>Calculadora</h1>
        <section>
        <input
          onChange={this.handleChange1}
          type="number"
          value={this.state.n1}
        />
        <h3>{this.state.operator}</h3>
        <input
          onChange={this.handleChange2}
          type="number"
          value={this.state.n2}
        />
        </section>
        <Boca></Boca>
        <Btn>
        <Btn1 onClick={this.soma}>+</Btn1 >
        <Btn2 onClick={this.sub}>-</Btn2>
        <Btn3 onClick={this.mult}>*</Btn3 >
        <Btn4 onClick={this.div}>/</Btn4>
        <Btn5 onClick={this.clear}>c</Btn5>
        <h2>Resultado</h2>
        <h3>{this.state.result}</h3>
        </Btn>
      </Calculadora>
    );
  }
}

