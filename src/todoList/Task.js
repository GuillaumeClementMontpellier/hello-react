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
      <li className="Task clearfix"><span className="TaskText">{this.props.name} </span><input type="submit" value="Delete Task" onClick={this.remove} className="Delete TaskDelete"></input>
      </li>
    )
  }
}

export default Task
