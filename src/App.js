import React from 'react'

import './App.css'

import Form from './todoList/TaskForm'
import TodoList from './todoList/TodoList'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { listOfList: [] }
    this.addList = this.addList.bind(this)
    this.removeList = this.removeList.bind(this)
    this.uuid = 0
  }

  addList(newName) {
    this.setState(prev => prev.listOfList.push({ name: newName, key: this.uuid }))
    this.uuid += 1
  }

  removeList(listKey) {
    this.setState(prev => {
      const state = { listOfList: prev.listOfList.filter(item => item.key !== listKey) }
      return state
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="AppTitle AppElement">Todo List</h1>
        <div className="AppForm AppElement">
          <Form handleSubmit={this.addList} text="Add List" />
        </div>
        {this.state.listOfList.map(t =>
          <TodoList name={t.name} id={t.key} key={t.key} remove={this.removeList} />
        )}
      </div>
    )
  }
}

export default App
