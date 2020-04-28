import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
 


class Formulario extends Component{
 constructor (props){
   super(props);
   this.state = {
     email: '',
     password: ''
   }

 }


 syscChanges (value,property){
   let state = {};
   state[property] = value
   this.setState(state)
  
 }

 submitForm = ()=> {
  
  console.log(this.state)
 }
 
  render(){
    return <form>
      <input onChange={(ev) => {this.syscChanges(ev.target.value,'email')}}  type="email" value={this.state.email} placeholder="Email"/>

       <input onChange={(ev) => {this.syscChanges(ev.target.value,'password')}}  type="password" value={this.state.password} placeholder="******"/>

        <input type="submit" onClick={this.submitForm} value="Iniciar Sesion"  />
       
    </form>
  }
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Formulario/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
