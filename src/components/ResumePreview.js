import React, { Component } from "react";
import RenderEducation from "./RenderEducation";
import RenderInfo from "./RenderInfo";

class ResumePreview extends Component {
    constructor(props) {
        super(props);
    }
    handleChange() {
        console.log('evi;', this.props)
    }
    render() {
        console.log('rain2', this.props);
        if (this.props.isDefault) {
        return (
            <div>
                <header>
                    <h1> </h1>
                    <p></p>
                </header>
                <div>
                    <section>
                        <h3><RenderInfo info={this.props} />{this.props.firstName} {this.props.lastName}</h3>
                        <div>
                            <div></div>
                        </div>
                    </section>
                    <section>
                        <h3>Experiencetest1</h3>
                        <div >
                            <div >
                                <div> - </div>
                                <div >
                                    <section >
                                        <h4></h4>
                                        <div>, </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h3>Education</h3>
                        <div direction="column">
                            <div >
                                <div> - </div>
                                <div>
                                    <section>
                                        <h4 >, </h4>
                                        <p>Degree: </p>
                                        <p>Subject: </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>)
        }
        else {
            console.log('inside else', this.props)
            return (
                <div>
                    <header>
                        <h1> </h1>
                        <p></p>
                    </header>
                    <div>
                        <section>
                            <h3 >
                                <div id="myName">{this.props.info.firstName + " " + this.props.info.lastName}</div>
                                <div id="myContact">{this.props.info.email + " " + this.props.info.phoneNumber}</div>
                                </h3>
                            <div>
                                <div></div>
                            </div>
                        </section>
                        <section>
                            <h3>Experiencetest2</h3>
                            <div >
                                <div >
                                    <div> - </div>
                                    <div >
                                        <section >
                                            <h4></h4>
                                            <div>, </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3>Education</h3>
                            <div direction="column">
                                <div >
                                    <div> - </div>
                                    <div>
                                        <section>
                                            <h4 >, </h4>
                                            <p>Degree: </p>
                                            <p>Subject: </p>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>)
            
        }
    }
}
export default ResumePreview;

