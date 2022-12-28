import React, { Component } from "react";

class ResumePreview extends Component {
    handleChange() {
        console.log('evi;', this.props)
    }
    render() {
        const { edu } = this.props.info.education;
        console.log('inside else!!xD', this.props)
        return (
            <div id="inner">

                <div id="hd">
                    <div className="yui-gc">
                        <div className="yui-u first">
                            <h1 id="myName">{this.props.info.firstName + " " + this.props.info.lastName}</h1>
                            <h2 id="myTitle">{this.props.info.title}</h2>
                        </div>

                        <div className="yui-u">
                            <div className="contact-info">
                                <h3><a id="pdf" href="#">Download PDF</a></h3>
                                <h3><a id="myEmail">{this.props.info.email}</a></h3>
                                <h3 id="myNumber">{this.props.info.phoneNumber}</h3>
                            </div>
                            {/* <!--// .contact-info --> */}
                        </div>
                    </div>
                    {/* <!--// .yui-gc --> */}
                </div>
                {/* <!--// hd --> */}

                <div id="bd">
                    <div id="yui-main">
                        <div className="yui-b">

                            <div className="yui-gf">
                                <div className="yui-u first">
                                    <h2>Objective</h2>
                                </div>
                                <div className="yui-u">
                                    <p className="enlarge">
                                        {this.props.info.description}
                                    </p>
                                </div>
                            </div>
                            {/* <!--// .yui-gf --> */}

                            <div className="yui-gf">
                                <div className="yui-u first">
                                    <h2>Personal Projects</h2>
                                </div>
                                <div className="yui-u">
                                    {/* <div className="talent">
                                        <h2>Web Design</h2>
                                        <p>Assertively exploit wireless initiatives rather than synergistic core competencies.	</p>
                                    </div>

                                    <div className="talent">
                                        <h2>Interface Design</h2>
                                        <p>Credibly streamline mission-critical value with multifunctional functionalities.	 </p>
                                    </div>

                                    <div className="talent">
                                        <h2>Project Direction</h2>
                                        <p>Proven ability to lead and manage a wide variety of design and development projects in team and independent situations.</p>
                                    </div> */}
                                </div>
                            </div>
                            {/* <!--// .yui-gf --> */}

                            <div className="yui-gf">
                                <div className="yui-u first">
                                    <h2>Technical</h2>
                                </div>
                                <div className="yui-u">
                                    <ul className="talent">
                                        <li>XHTML</li>
                                        <li>CSS</li>
                                        <li className="last">Javascript</li>
                                    </ul>

                                    <ul className="talent">
                                        <li>Jquery</li>
                                        <li>PHP</li>
                                        <li className="last">CVS / Subversion</li>
                                    </ul>

                                    <ul className="talent">
                                        <li>OS X</li>
                                        <li>Windows XP/Vista</li>
                                        <li className="last">Linux</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!--// .yui-gf--> */}

                            <div className="yui-gf">

                                <div className="yui-u first">
                                    <h2>Experience</h2>
                                </div>
                                {/* <!--// .yui-u --> */}

                                <div className="yui-u">
                                    {/* <div className="job">
                                        <h2>Facebook</h2>
                                        <h3>Senior Interface Designer</h3>
                                        <h4>2005-2007</h4>
                                        <p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence. </p>
                                    </div>

                                    <div className="job last">
                                        <h2>Apple Inc.</h2>
                                        <h3>Junior Interface Designer</h3>
                                        <h4>2005-2007</h4>
                                        <p>Progressively reconceptualize multifunctional "outside the box" thinking through inexpensive methods of empowerment. Compellingly morph extensive niche markets with mission-critical ideas. Phosfluorescently deliver bricks-and-clicks strategic theme areas rather than scalable benefits. </p>
                                    </div> */}


                                </div>
                                {/* <!--// .yui-u --> */}
                            </div>
                            {/* <!--// .yui-gf --> */}


                            <div className="yui-gf last">
                                <div className="yui-u first">
                                    <h2>Education</h2>
                                </div>
                                <div className="yui-u">
                                    {/* {this.props.info.education.map((tester, index) => {
                                        return (
                                            <div key={index}>
                                                <h2>{tester.schoolName}</h2>
                                            </div>
                                        )
                                    })} */}


                                    {/* <h2 className="mySchool">{this.props.info.education.schoolName}</h2>
                                    <h2 className="myDate">{this.props.info.education.endDate}</h2>
                                    <h3 className="myMajor">{this.props.info.education.majorName} — <strong>{this.props.info.education[0].gpa}</strong> </h3> */}
                                </div>
                            </div>
                            {/* <!--// .yui-gf --> */}


                        </div>
                        {/* <!--// .yui-b --> */}
                    </div>
                    {/* <!--// yui-main --> */}
                </div>
                {/* ><!--// bd --> */}

                <div id="ft">
                    <p>{this.props.info.firstName + " " + this.props.info.lastName} — <a>{this.props.info.email}</a> — {this.props.info.phoneNumber}</p>
                </div>
                {/* <!--// footer --> */}

            </div>
        )
    }
}
export default ResumePreview;

