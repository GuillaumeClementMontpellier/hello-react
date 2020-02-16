import React from 'react'

import Task from './Task'
import TaskForm from './TaskForm'

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
      <div style={{ display: 'inline-block' }}>
        <h2>{this.props.name}</h2> <input type="submit" value="Delete List" onClick={this.remove}></input>
        <ul>{this.state.tasks.map(t => <Task name={t.name} id={t.key} key={t.key} remove={this.removeTask} />)}</ul>
        <TaskForm handleSubmit={this.addTask} text="Add Task" />
      </div>
    )
  }
}

export default TodoList
