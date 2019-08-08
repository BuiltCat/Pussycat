import * as React from "react"
import "./button.css"

export interface ButtonProps {
    type?: string;
    size?: string;
    fill?: boolean;
    disabled?: boolean;
    round?: boolean;
    circle?: boolean;
    icon?: string;
    onClick?:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
interface ButtonState {
    type: string;
    size: string;
    fill: string;
    disabled: boolean;
    round: string;
    circle: string;
    icon: string;
    onClick:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export class Button extends React.Component<ButtonProps, ButtonState>{
    constructor(props: ButtonProps) {
        super(props);
        this.state = {
            type: this.props.type ? this.props.type : 'default',
            size: this.props.size ? this.props.size : '',
            fill: this.props.fill ? 'fill' : '',
            disabled: this.props.disabled ? true : false,
            round: this.props.round ? 'round' : '',
            circle: this.props.circle ? 'circle' : '',
            icon: this.props.icon ? this.props.icon : '',
            onClick: this.props.onClick ? this.props.onClick : () =>{}
        };
    }
    render() {
        return (
            <button onClick={ this.state.onClick } disabled={ this.state.disabled } className={ `cat-button cat-button-${this.state.type} ${this.state.round} ${this.state.circle} ${this.state.size} ${this.state.fill}`}>
                <span className={ `catfont ${this.state.icon}` }>
                    {this.props.children}
                </span>
            </button>
        )
    }
}
