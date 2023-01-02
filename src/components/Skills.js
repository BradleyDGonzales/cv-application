import { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <div className="skillsInfo">
                {this.props.info.skills.map((skill, index) => {
                    return (
                        <form key={index} className="skillsForm">
                            <input defaultValue={skill} onChange={(e) => this.props.onCompChange(e, index)} placeholder="Skill Name" type='text' id={'skillName' + index}></input>
                        </form>
                    )
                })}
            </div>
        )
    }
}

export default Skills;