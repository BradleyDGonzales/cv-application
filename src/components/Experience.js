import React, { Component, createElement, useRef } from "react";
import { handleEduClick } from "../App";
import uniqid from 'uniqid'
class Experience extends Component {
    render() {
        console.log('in experience class', this.props)
        return (
            <div className="experienceInfo">
                {this.props.info.experience.map((exp, index) => {
                    return (
                        <form key={index} className="experienceForm">
                            <input defaultValue={exp.companyName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Company Name" type='text' id={'companyName' + index}></input>
                            <input defaultValue={exp.companyCity} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Company City" type='text' id={'companyCity' + index}></input>
                            <input defaultValue={exp.companyState} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Company State" type='text' id={'companyState' + index}></input>
                            <input defaultValue={exp.roleName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Role" type='text' id={'roleName' + index}></input>
                            <textarea defaultValue={exp.roleDescription} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Role description" id={'roleDescription' + index} rows="5"></textarea>
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