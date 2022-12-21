import React, { Component } from "react";

class RenderEducation extends Component {
    render() {
        return(
        <div className="testing">
            <p>School: {this.props.info.schoolName}</p>
            <p>Major: {this.props.info.majorName}</p>
            <p>Date Start: {this.props.info.dateStart}</p>
            <p>Date End: {this.props.info.dateEnd}</p>
            <p>GPA: {this.props.info.gpa}</p>
        </div>
        )
    }
}
export default RenderEducation;