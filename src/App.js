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
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form />
      </div>
    )
  }
}