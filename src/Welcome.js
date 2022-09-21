import React,{Component} from "react";

function WelcomeFunction(props) {
    return <h1>Hello, {props.name} {props.surname}</h1>;
  }

  class WelcomeClass extends React.Component {
    render() {
      return <h1>Hello, {this.props.name} {this.props.surname}</h1>;
    }
  }

  export{WelcomeClass, WelcomeFunction}