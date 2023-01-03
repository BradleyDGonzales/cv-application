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
                                <h3>{this.props.info.email}</h3>
                                <h3 id="myNumber">{this.props.info.phoneNumber}</h3>
                                <h3 id="myLocation">{this.props.info.city}, {this.props.info.state}</h3>
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
                                    <h2 id="objTag">Objective</h2>
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
                                    <h2 id="projectsTag">Personal Projects</h2>
                                </div>
                                <div className="yui-u">
                                    {this.props.info.projects.map((proj, index) => {
                                        return (
                                            <div key={'proj' + index}>
                                                <h2 className="myProjects">
                                                    <div className="ProjectsInfo">
                                                        <h4 className="projectName">{proj.projectName} <a href={proj.projectLink}>{proj.projectLink !== undefined ? '(' + proj.projectLink + ')' : null}</a></h4>
                                                    </div>
                                                </h2>
                                                <li className="myProjectDescription">{proj.projectDescription}</li>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                            {/* <!--// .yui-gf --> */}

                            {/* <!--// .yui-gf--> */}

                            <div className="yui-gf">

                                <div className="yui-u first">
                                    <h2 id="expTag">Experience</h2>
                                </div>
                                {/* <!--// .yui-u --> */}

                                <div className="yui-u">
                                    {this.props.info.experience.map((exp, index) => {
                                        return (
                                            <div key={'exp' + index}>
                                                <h2 className="myExperience">
                                                    <div className="experienceInfo">
                                                        <h4 className="companyName" >{exp.companyName}</h4>
                                                        <i className='companyLocation'>{exp.companyCity}, {exp.companyState}</i>
                                                    </div>
                                                    <div className="companyYear">
                                                        <h4>{new Date(exp.roleStartDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}{exp.roleEndDate === undefined || '' ? '- Current' : ' - ' + new Date(exp.roleEndDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} </h4>
                                                    </div>
                                                </h2>
                                                <h3 className="myRole">{exp.roleName}</h3>
                                                <li className="myRoleDescription">{exp.roleDescription}</li>
                                            </div>
                                        )
                                    })}
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
                                    <h2 id="eduTag">Education</h2>
                                </div>
                                <div className="yui-u">
                                    {this.props.info.education.map((edu, index) => {
                                        return (
                                            <div key={'edu' + index}>
                                                <h2 className="mySchool">
                                                    <div className="schoolInfo">
                                                        <h4 className="schoolName" >{edu.schoolName}</h4>
                                                        <i className='schoolLocation'>{edu.schoolCity}, {edu.schoolState}</i>
                                                    </div>
                                                    <div className="schoolYear">
                                                        <h4>{edu.dateEnd}</h4>
                                                    </div>
                                                </h2>
                                                <h3 className="myMajor">{edu.majorName} — <strong>{Number(edu.gpa).toFixed(1) === 'NaN' ? '' : Number(edu.gpa).toFixed(1) + ' GPA'}</strong></h3>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* <!--// .yui-gf --> */}


                        </div>
                        {/* <!--// .yui-b --> */}
                    </div>
                    {/* <!--// yui-main --> */}
                </div>
                {/* ><!--// bd --> */}
                <div className="yui-gf">
                    <div className="yui-u first">
                        <h2 id="skillsTag">Skills</h2>
                    </div>
                    <div className="skillsSection">
                        {this.props.info.skills.map((skill, index) => {
                            return (
                                <li key={index}>{skill.skillName}</li>
                            )
                        })}
                    </div>
                </div>

                <div id="ft">
                    <p>{this.props.info.firstName + " " + this.props.info.lastName} — <a>{this.props.info.email}</a> — {this.props.info.phoneNumber}</p>
                </div>
                {/* <!--// footer --> */}

            </div>
        )
    }
}
export default ResumePreview;
