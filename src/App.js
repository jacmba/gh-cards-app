import React from 'react';
import './App.css';
import { CardList } from './CardList';
import Form from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }

  addNewProfile = (profileData) => {
    console.log('App', profileData)
    this.setState({profiles: [...this.state.profiles, profileData]})
  }

  render() {
    return (
      <div>
        <div className='header'>
          {this.props.title}
        </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}
