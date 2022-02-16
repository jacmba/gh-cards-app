import React from "react";
import axios from "axios";

export default class Form extends React.Component {
  state = { username: '' }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    const resp = await axios.get(`https://api.github.com/users/${this.state.username}`)
    this.props.onSubmit(resp.data)
    this.setState({username: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.username}
          onChange={evt => this.setState({username: evt.target.value})}
          required
        />
        <button>Add card</button>
      </form>
    )
  }
}