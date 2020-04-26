import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

// variables
let nombre = 'Componente'
//Practica 1

function MiComponente(){
  return <p>Hola este es mi primer componente funcional </p>
}

class MiComponenteDeClase extends Component{
  render(){
    return <p>Hola este es mi primer componente de clase. Su principal caracteristica es que posee un metodo <b>render()</b> </p>
  }
}

//Practica 2 - Props
//Aplicando el principio de Independencia dentro de react

function MiComponenteConProps(props){
 //console.log(props.children)
  return <p>Props: UN {props.nombre} PADRE PASA INFORMACION A UN {props.nombre} HIJO Nota: un componente no puede modificar sus propias props solo las puede.Son "Read Only"</p>
}

class Contador extends Component{

  constructor(props){
    super(props);

    this.state = {
      contador: 0
    };
  }

  aumentarContador = ()=> {
    this.setState({
        contador: 
        this.state.contador + 1
      }
    )
  }

  render(){

    return ( 
     <div>
     
     <p>El contador es igual a: {this.state.contador}</p>
      <button onClick={this.aumentarContador} > Aumentar </button>
     </div>
      
      )
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
       <Contador/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
