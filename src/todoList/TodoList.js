import React from 'react'

import Task from './Task'
import Form from './TaskForm'

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { tasks: [] }
    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.remove = this.remove.bind(this)
    this.uuid = 0
  }

  addTask(taskName) {
    this.setState(prev => prev.tasks.push({ name: taskName, key: this.uuid }))
    this.uuid += 1
  }

  removeTask(taskKey) {
    this.setState(prev => {
      const state = { tasks: prev.tasks.filter(item => item.key !== taskKey) }
      return state
    })
  }

  remove(event) {
    this.props.remove(this.props.id)
  }

  render() {
    return (
      <div className="TodoList">
        <div className="clearfix">
          <h2 className="ListTitle">{this.props.name}</h2> <input className="ListDelete Delete" type="submit" value="Delete List" onClick={this.remove}></input>
        </div>
        <ul className="ListTasks">
          {this.state.tasks.map(t =>
            <Task name={t.name} id={t.key} key={t.key} remove={this.removeTask} />)}
        </ul>
        <div className="ListForm">
          <Form handleSubmit={this.addTask} text="Add Task" />
        </div>
      </div>
    )
  }
}

export default TodoList
