import * as React from "react";
import "./checkbox.css";

class CheckBox extends React.Component{
    render() {
        return (
            <label className="cat-checkbox">
                <input type="checkbox" />
                <span>{ this.props.children }</span>
            </label>
        )
    }
}

export default CheckBox;