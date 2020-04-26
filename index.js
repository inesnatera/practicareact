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
  return props.children
  /*<p>Props: UN {props.nombre} PADRE PASA INFORMACION A UN {props.nombre} HIJO Nota: un componente no puede modificar sus propias props solo las puede.Son "Read Only"</p>*/
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
        <MiComponente/>
        <MiComponenteDeClase/>
        <MiComponenteConProps>
          <p> hola soy un hijo </p> 
          <p> hola soy un hijo {2+2} </p> 
        </MiComponenteConProps>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
