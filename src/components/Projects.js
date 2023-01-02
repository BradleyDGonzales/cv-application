import { Component } from "react";

class Projects extends Component {

    render() {
        return (
            <div>
                {this.props.info.projects.map((proj, index) => {
                    return (
                        <form key={index} className="projectsForm">
                            <input defaultValue={proj.companyName} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Project Name" type='text' id={'projectName' + index}></input>
                            <textarea defaultValue={proj.companyCity} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Project Description" id={'projectDescription' + index} rows="5"></textarea>
                            <input defaultValue={proj.companyState} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Project Link (https://...)" type='text' id={'projectLink' + index}></input>
                        </form>
                    )
                })}
            </div>
        )
    }
}

export default Projects;