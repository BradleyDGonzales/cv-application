import React, { Component } from "react";

class RenderEducation extends Component {
    render() {
        return(
        <div id="renderedEducationInfo">
            <p>{this.props.info.schoolName}</p>
            <p>{this.props.info.majorName}</p>
            <p>{this.props.info.dateStart}</p>
            <p>{this.props.info.dateEnd}</p>
            <p>{this.props.info.gpa}</p>
        </div>
        )
    }
}
export default RenderEducation;