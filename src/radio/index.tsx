import * as React from "react";
import "./radio.css"

interface RadioProps{
    onChange?: (value: any) => void
    disabled?: boolean
    value: any
    checked?: boolean
    stateValue?: any
}
interface RadioGroupProps{
    children: any
    value: any
    onChange: (value: any) => void
}
class Radio extends React.Component<RadioProps>{
    onChange() {
        this.props.onChange(this.props.value)
    }
    render() {
        return (
            <label className={ `cat-radio ${this.props.disabled?'disabled':''}` }>
                <span className={`circle ${this.props.value === this.props.stateValue?"is-clicked":""}`}></span>
                <input checked = { this.props.value === this.props.stateValue } onChange={this.onChange.bind(this)} disabled={this.props.disabled} type="radio"/>
                <span>{this.props.children}</span>
            </label>
        )
    }
}

class RadioGroup extends React.Component<RadioGroupProps>{
    renderChildren() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child,
                {
                    ...child.props,
                    onChange: this.props.onChange,
                    stateValue: this.props.value
                })
        })
    }
    render() {
        return (
            <div>
                {this.renderChildren()}
            </div>
        )
    }
}
export {
    Radio,
    RadioGroup
}