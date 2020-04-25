import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


function MiComponente(){
  return <p>Hola este es mi primer componente funcional </p>
}

class MiComponenteDeClase extends Component{
  render(){
    return <p>Hola este es mi primer componente de clase. Su principal caracteristica es que posee un metodo <b>render()</b> </p>
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
        <MiComponente/>
        <MiComponenteDeClase/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
