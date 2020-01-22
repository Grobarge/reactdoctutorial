import React, { Component } from 'react'
import './App.css';

//Components 
import Table from './Components/Table/Table';
import Form from './Components/Form/Form';


export default class App extends Component {
  state = {
    characters: [
      {
        name: 'Gaje',
        job: 'Dev'
      },
      {
        name: 'jay',
        job: 'bae'
      }
    ]
  }

  // will update the state by taking the existing this.state.characters and adding the new character parameter, using the ES6 spread operator

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <h1>Simple Table App</h1>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}