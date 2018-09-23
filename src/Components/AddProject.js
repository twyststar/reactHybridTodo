import React, { Component } from "react";
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title Is Required')
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject)
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div className="projectForm">
        <h3>
          Add Project
        </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" ref="title" />
            <br />
            <label>Category</label>
            <br />
            <select ref="category">
              {categoryOptions}
            </select>
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
};

export default AddProject;