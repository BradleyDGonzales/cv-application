import React, { Component, createElement, useRef } from "react";
import { handleEduClick } from "../App";
import uniqid from 'uniqid'
class Experience extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         experience: [...this.props.info.experience]
    //     }
    //     this.handleInputChange = this.handleInputChange.bind(this)
    // }

    render() {
        console.log('in experience class', this.props)
        return (
            <div className="experienceInfo">
                {this.props.info.experience.map((exp, index) => {
                    return (
                        <form key={index} className="experienceForm">
                            <input defaultValue={exp.companyName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Company name" type='text' id={'companyName' + index}></input>
                            <input defaultValue={exp.roleName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Role" type='text' id={'roleName' + index}></input>
                            <input defaultValue={exp.roleDescription} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Description" type='text' id={'roleDescription' + index}></input>
                            <input defaultValue={exp.roleStartDate} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Start date" type='date' id={'roleStartDate' + index} min="1.0" max="4.0" step="0.1"></input>
                            <input defaultValue={exp.roleEndDate} onChange={(e) => this.props.onCompChange(e, index)} placeholder="End date" type='date' id={'roleEndDate' + index}></input>
                        </form>
                    )
                })}

            </div>
        )
    }
}
export default Experience;