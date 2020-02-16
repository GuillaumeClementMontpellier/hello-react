import React from 'react'

class Form extends React.Component {

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
      <form onSubmit={this.handleSubmit} className="Form">
        <input type="text" name="textArea" className="FormTextInput"></input>
        <input type="submit" className="FormSubmit" onClick={this.handleSubmit} value={this.props.text} ></input>
      </form>
    )
  }
}

export default Form