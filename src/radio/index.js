import React from "react";
import "./radio.css"

class Radio extends React.Component{
    onChange() {
        if (this.props.onChange) {
            this.props.onChange(this.props.value);  
        }
    }
    render() {
        return (
            <label className={ `cat-radio ${this.props.disabled?'disabled':''}` }>
                <input checked = { this.props.checked } onChange={ ()=> this.onChange()  } disabled={this.props.disabled} type="radio"/>
                <span>{this.props.children}</span>
            </label>
        )
    }
}

class RadioGroup extends React.Component{
    renderChildren() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child,
                {
                    ...child.props,
                    checked: this.props.value === child.props.value,
                    onChange: this.props.onChange
                })
        })
    }
    render() {
        return (
            <div>
                { this.renderChildren()}
            </div>
        )
    }
}
export {
    Radio,
    RadioGroup
}