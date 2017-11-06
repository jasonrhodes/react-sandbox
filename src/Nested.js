import React from 'react';
import Subroute from './Subroute';

export default class Nested extends React.Component {

  componentDidMount() {
    console.log('Nested parent mounted');
  }
  
  render() {
    return (
      <div>
        <h1>Welcome to the cool nested routes section</h1>
        <Subroute path='/a' render={() => <p>Nested A</p>} />
        <Subroute path='/b' render={() => <p>Nested B</p>} />
      </div>
    )
  }
}