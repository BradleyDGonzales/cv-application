import React, {Component} from "react";
import RenderEducation from "./RenderEducation";
import RenderInfo from "./RenderInfo";

class FinalInput extends Component {
    render() {
        const info = this.state;
        return (
            <div>
                <RenderInfo info={info}/>
                <RenderEducation info={info}/>
            </div>
        )
    }
}
export default FinalInput;