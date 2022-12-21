import React, { Component, useRef } from "react";
import RenderEducation from "./RenderEducation";

class Education extends Component {
    constructor() {
        super()

        this.state = {
            schoolName: '',
            majorName: '',
            dateStart: '',
            dateEnd: '',
            gpa: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    handleChange(e) {
        switch (e.target.id) {
            case 'schoolName':
                this.setState({
                    schoolName: e.target.value,
                })
                break;
            case 'majorName':
                this.setState({
                    majorName: e.target.value,
                })
                break;
            case 'dateStart':
                this.setState({
                    dateStart: new Date(e.target.value).toLocaleDateString('en-US', {timeZone: 'UTC'}),
                })
                break;
            case 'dateEnd':
                this.setState({
                    dateEnd: new Date(e.target.value).toLocaleDateString('en-US', {timeZone: 'UTC'}),
                })
                break;
            case 'gpa':
                this.setState({
                    gpa: e.target.value,
                })
                break;
            default:
                return;
        }
    }
    render() {
        const info = this.state;
        return (
            <div className="educationInfo">
                <form className="educationForm" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' id='schoolName' placeholder="Name of school"/>
                    <input onChange={this.handleChange} type='text' id='majorName' placeholder="Major"/>
                    <input onChange={this.handleChange} type='text' onFocus={(e) => (e.target.type = "date")} id='dateStart' placeholder="Start date"/>
                    <input onChange={this.handleChange} type='text' onFocus={(e) => (e.target.type = "date")} id='dateEnd' placeholder="End date"/>
                    <input onChange={this.handleChange} type='text' id='gpa' placeholder="GPA"/>
                </form>
                <RenderEducation info={info} />
            </div>
        )
    }
}
export default Education;