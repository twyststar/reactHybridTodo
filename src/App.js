import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import Header from './Components/Header';
import uuid from 'uuid';
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state = { 
      projects: [],
      todos: []
    } 
  }

  getTodos(){
     $.ajax({
       url: 'https://jsonplaceholder.typicode.com/todos',
       dataType: 'json',
       cache: false,
       success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
       }.bind(this),
       error: function(xhr, satus, err){
         console.log(err);
       }
     })
  }

  getProjects(){
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Portfolio",
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          title: "Alice",
          category: "Game Design"
        },
        {
          id: uuid.v4(),
          title: "Business Website",
          category: "Web Design"
        }
      ]
    });
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

   componentDidMount() {
     this.getTodos();
   }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState(projects:projects)
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  handleAddTodo(todo) {
    let todos = this.state.todos;
    todos.push(todo);
    this.setState(todos: todos)
  }

  handleDeleteTodo(id) {
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    this.setState({ todos: todos });
  }

  render() {
    return <div className="App">
        <Header />
        <div className="wrapper">
          <div className="projectDiv">
            <AddProject addProject={this.handleAddProject.bind(this)} />
            <hr/>
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
          </div>
          <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} />
        </div>
      </div>;
  }
}

export default App;
