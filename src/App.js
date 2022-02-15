import React from 'react';
import './App.css';
import Card from './Card';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className='header'>
          {this.props.title}
        </div>
        <Card />
      </div>
    )
  }
}
