import React, { Component } from "react";
import ReactDOM from "react-dom";
import RenderInfo from "./RenderInfo";

class PersonalInfo extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            description: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    handleChange(e) {
        switch (e.target.id) {
            case 'firstName':
                this.setState({
                    firstName: e.target.value,
                })
                break;
            case 'lastName':
                this.setState({
                    lastName: e.target.value,
                })
                break;
            case 'email':
                this.setState({
                    email: e.target.value,
                })
                break;
            case 'phoneNumber':
                this.setState({
                    phoneNumber: e.target.value,
                })
                break;
            case 'description':
                this.setState({
                    description: e.target.value,
                })
                break;
            default:
                return;
        }
    }
    render() {
        const info = this.state;
        return (
            <div className="personalInfo">
                <form className="infoForm" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' id='firstName' placeholder="First Name"/>
                    <input onChange={this.handleChange} type='text' id='lastName' placeholder="Last Name"/>
                    <input onChange={this.handleChange} type='text' id='email' placeholder="Email"/>
                    <input onChange={this.handleChange} type='text' id='phoneNumber' placeholder="Phone Number"/>
                    <input onChange={this.handleChange} type='text' id='description' placeholder="Description"/>
                </form>
                <div className="personalTest">
                <RenderInfo info={info} />
                </div>
            </div>
        )
    }
}
export default PersonalInfo;