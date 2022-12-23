import React, { Component, createElement, useRef } from "react";
import ReactDOM, { createPortal } from "react-dom";
import RenderEducation from "./RenderEducation";
import createRoot from 'react-dom/client'
import App from "../App";
import { render } from "@testing-library/react";
import RenderInfo from "./RenderInfo";
import ResumePreview from "./ResumePreview";


class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'First',
            lastName: 'Last',
            email: 'Email',
            phoneNumber: 'Phone',
            description: 'Description',
            isDefault: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        // console.log('updated preview?' , test.handlePreview());
        switch (e.target.id) {
            case 'firstName':
                const firstName = document.getElementById('myName');
                this.setState({
                    firstName: e.target.value
                }, () => firstName.textContent = this.state.firstName + " " + this.state.lastName)
                break;
            case 'lastName':
                const lastName = document.getElementById('myName');
                this.setState({
                    lastName: e.target.value,
                }, () => lastName.textContent = this.state.firstName + " " +  this.state.lastName)
                break;
            case 'email':
                const email = document.getElementById('myContact')
                this.setState({
                    email: e.target.value,
                }, () => email.textContent = this.state.email + " " + this.state.phoneNumber)
                break;
            case 'phoneNumber':
                const phone = document.getElementById('myContact');
                this.setState({
                    phoneNumber: e.target.value,
                }, () => phone.textContent = this.state.email + " " + this.state.phoneNumber)
                break;
            case 'description':
                this.setState({
                    description: e.target.value,
                })
                break;
            default:
                return;
        }
        const resume = new ResumePreview();
        resume.props = this.state;
        resume.render();
    }

    render() {
        const info = this.state;
        return (
            <div className="personalInfo">
                {/* {createPortal(<RenderInfo info={info} />, document.getElementById('renderedInfo'))} */}
                <form className="infoForm" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type='text' id='firstName' placeholder="First Name" />
                    <input onChange={this.handleChange} type='text' id='lastName' placeholder="Last Name" />
                    <input onChange={this.handleChange} type='text' id='email' placeholder="Email" />
                    <input onChange={this.handleChange} type='text' id='phoneNumber' placeholder="Phone Number" />
                </form>
                <textarea className="personalDescription" onChange={this.handleChange} id='description' placeholder="Description" />
                {/* {document.getElementById('renderedInfo').appendChild(<RenderInfo info={info}/>)} */}
            </div>
        )
    }
}
export default Personal;