import * as React from "react";
import "./radio.css"

interface RadioProps{
    onChange: (value: any) => void;
    disabled?: boolean;
    value: any;
    checked?: boolean;
    stateValue: any;
}

class Radio extends React.Component<RadioProps>{
    onChange(e: any) {
        console.log(e)
        this.props.onChange(e)
    }
    render() {
        return (
            <label className={ `cat-radio ${this.props.disabled?'disabled':''}` }>
                <input checked = { this.props.value === this.props.stateValue } onChange={this.onChange()} disabled={this.props.disabled} type="radio"/>
                <span>{this.props.children}</span>
            </label>
        )
    }
}

// class RadioGroup extends React.Component{
//     renderChildren() {
//         return React.Children.map(this.props.children, child => {
//             return React.cloneElement(child,
//                 {
//                     ...child.props,
//                     checked: this.props.value === child.props.value,
//                     onChange: this.props.onChange
//                 })
//         })
//     }
//     render() {
//         return (
//             <div>
//                 { this.renderChildren()}
//             </div>
//         )
//     }
// }
export {
    Radio,
    // RadioGroup
}