import React, { Component, createElement, useRef } from "react";
import { handleEduClick } from "../App";
import uniqid from 'uniqid'
class Education extends Component {
    render() {
        console.log('aheyyy', this.props)
        return (
            <div className="educationInfo">
                {this.props.info.education.map((education, index) => {
                    return (
                        <form className="educationForm">
                            <input defaultValue={education.schoolName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Name of school" key={uniqid()} type='text' id={'schoolName' + index}></input>
                            <input defaultValue={education.majorName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Major" key={uniqid()} type='text' id={'majorName' + index}></input>
                            <input defaultValue={education.dateEnd} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Year" key={uniqid()} type='text' id={'dateEnd' + index}></input>
                            <input defaultValue={education.gpa} onChange={(e) => this.props.onCompChange(e, index)} placeholder="GPA out of 4.0" key={uniqid()} type='number' id={'gpa' + index} min="1.0" max="4.0" step="0.1"></input>
                        </form>
                    )
                })}

            </div>
        )
    }
}
export default Education;