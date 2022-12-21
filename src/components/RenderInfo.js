import React, { Component } from "react";

class RenderInfo extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <p>First: {this.props.info.firstName}</p>
                <p>Last: {this.props.info.lastName}</p>
                <p>Email: {this.props.info.email}</p>
                <p>Phone: {this.props.info.phoneNumber}</p>
                <p>Description: {this.props.info.description}</p>
            </div>
        )
    }
}

export default RenderInfo;