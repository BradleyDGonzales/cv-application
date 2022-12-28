import React, { Component, createElement, useEffect, useRef, useState } from "react";
import ResumePreview from "./ResumePreview";

class Personal extends Component {
    render() {
        const info = this.state;
        return (
            <div className="personalInfo">
                <form className="infoForm" onSubmit={this.handleSubmit}>
                    <input onChange={this.props.onCompChange} type='text' id='firstName' placeholder="First Name" />
                    <input onChange={this.props.onCompChange} type='text' id='lastName' placeholder="Last Name" />
                    <input onChange={this.props.onCompChange} type='text' id='title' placeholder="Title"/> 
                    <input onChange={this.props.onCompChange} type='text' id='email' placeholder="Email"/>
                    <input onChange={this.props.onCompChange} type='tel' id='phoneNumber' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number (xxx-xxx-xxxx)"/>
                </form>
            </div>
        )
    }
}
export default Personal;