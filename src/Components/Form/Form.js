/* Notes
We're going to create a class component, and within we'll use a constructor(), which we haven't done thus far. We'll need the constructor() to use this, and to receive the props of the parent.
We're going to set the initial state of the Form to be an object with some empty properties, and assign that initial state to this.state.
*/



import React, { Component } from 'react';
import './Form.css'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: ''
        }

        this.state = this.initialState
    }


    //The event will be passed through, and  set the state of Form to have the name (key) and value of the inputs.
    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }


    // get our two properties from state, and assign them as the values that correspond to the proper form keys.
    // We'll run the handleChange() method as the onChange of the input
    render() {
        const { name, job } = this.state;

        return (
            <form className="form">
                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label for="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
            </form>
        )
    }
}




