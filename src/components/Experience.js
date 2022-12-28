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
                        <form className="experienceForm">
                            <input defaultValue={exp.companyName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Company name" key={uniqid()} type='text' id={'companyName' + index}></input>
                            <input defaultValue={exp.roleName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Role" key={uniqid()} type='text' id={'roleName' + index}></input>
                            <input defaultValue={exp.roleDescription} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Description" key={uniqid()} type='text' id={'roleDescription' + index}></input>
                            <input defaultValue={exp.roleStartDate} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Start date" key={uniqid()} type='date' id={'roleStartDate' + index} min="1.0" max="4.0" step="0.1"></input>
                            <input defaultValue={exp.roleEndDate} onChange={(e) => this.props.onCompChange(e, index)} placeholder="End date" key={uniqid()} type='date' id={'roleEndDate' + index}></input>
                        </form>
                    )
                })}

            </div>
        )
    }
}
export default Experience;