import React from 'react'

class Task extends React.Component {

  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this)
  }

  remove(event) {
    this.props.remove(this.props.id)
  }

  render() {
    return (
      <li>{this.props.name} <input type="submit" value="Delete Task" onClick={this.remove}></input>
      </li>
    )
  }
}

export default Task
