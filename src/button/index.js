import React from "react"
import "./button.css"

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type ? this.props.type : 'default',
            size: this.props.size ? this.props.size : '',
            fill: this.props.fill ? 'fill' : '',
            disabled: this.props.disabled ? 'disabled' : '',
            round: this.props.round ? 'round' : '',
            circle: this.props.circle ? 'circle' : '',
            icon: this.props.icon ? this.props.icon : '',
            onClick: this.props.onClick ? this.props.onClick : () =>{}
        };
    }
    render() {
        return (
            <button onClick={ this.state.onClick } disabled={ this.state.disabled } className={ `cat-button cat-button-${this.state.type} ${this.state.round} ${this.state.circle} ${this.state.disabled} ${this.state.size} ${this.state.fill}`}>
                <span className={ `catfont ${this.state.icon}` }>
                    {this.props.children}
                </span>
            </button>
        )
    }
}

export default Button;
