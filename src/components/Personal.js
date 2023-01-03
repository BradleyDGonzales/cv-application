import React, { Component, createElement, useEffect, useRef, useState } from "react";
import ResumePreview from "./ResumePreview";
import uniqid from 'uniqid'
class Personal extends Component {
    render() {
        const info = this.state;
        return (
            <div className="personalInfo">
                <form className="infoForm">
                    <input onChange={(e) => this.props.onCompChange(e)} type='text' id='firstName' placeholder="First Name" />
                    <input onChange={(e) => this.props.onCompChange(e)} type='text' id='lastName' placeholder="Last Name" />
                    <input onChange={(e) => this.props.onCompChange(e)} type='text' id='city' placeholder="City" />
                    <input onChange={(e) => this.props.onCompChange(e)} type='text' id='state' placeholder="State" />
                    <input onChange={(e) => this.props.onCompChange(e)} type='text' id='title' placeholder="Title" />
                    <input onChange={(e) => this.props.onCompChange(e)} type='text' id='email' placeholder="Email" />
                    <input onChange={(e) => this.props.onCompChange(e)} type='tel' id='phoneNumber' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number (xxx-xxx-xxxx)" />
                    <textarea onChange={(e) => this.props.onCompChange(e)} placeholder="Objective description" id={'description'} rows="5"></textarea>
                </form>
            </div>
        )
    }
}
export default Personal;