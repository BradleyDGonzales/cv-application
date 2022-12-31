import React, { Component, createElement, useRef } from "react";
import { handleEduClick } from "../App";
import uniqid from 'uniqid'
class Education extends Component {
    render() {
        console.log('education', this.props)
        return (
            <div className="educationInfo">
                {this.props.info.education.map((education, index) => {
                    return (
                        <form key={index} className="educationForm">
                            <input defaultValue={education.schoolName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Name of school" type='text' id={'schoolName' + index}></input>
                            <input defaultValue={education.schoolCity} onChange={(e) => this.props.onCompChange(e,index)} placeholder="School city" type='text' id={'schoolCity' + index}></input>
                            <input defaultValue={education.schoolState} onChange={(e) => this.props.onCompChange(e,index)} placeholder="School state" type='text' id={'schoolState' + index}></input>
                            <input defaultValue={education.majorName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Major" type='text' id={'majorName' + index}></input>
                            <input defaultValue={education.dateEnd} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Year" type='text' id={'dateEnd' + index}></input>
                            <input defaultValue={education.gpa} onChange={(e) => this.props.onCompChange(e, index)} placeholder="GPA out of 4.0" type='number' id={'gpa' + index} min="1.0" max="4.0" step="0.1"></input>
                        </form>
                    )
                })}

            </div>
        )
    }
}
export default Education;