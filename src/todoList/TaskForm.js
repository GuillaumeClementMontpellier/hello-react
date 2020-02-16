import React from 'react'

class TaskForm extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.handleSubmit(event.target.form.textArea.value)
    event.target.form.textArea.value = ""
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="textArea"></input>
        <input type="submit" onClick={this.handleSubmit} value={this.props.text} ></input>
      </form>
    )
  }
}

export default TaskForm