import React, { Component } from "react";
import PropTypes from 'prop-types';

class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id)
  }
  render() {
    return <li className="projectItem">
        <strong>{this.props.project.title}</strong> - {this.props.project.category} 
      <button className="deleteBtn" onClick={this.deleteProject.bind(this, this.props.project.id)}>
          X
        </button>
      </li>;
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
};

export default ProjectItem;