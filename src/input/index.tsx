import * as React from "react"
import "./input.css"

interface InputProps{
    placeholder?: string
    disabled?: boolean
    icon?: string
    size?: string
    name?: string
    readOnly?: boolean
    autoFocus?: boolean
    type?: string
}

export class Input extends React.Component<InputProps>{
    renderElement(){
        let icon 
        if(this.props.icon){
            icon = <i className={`catfont ${this.props.icon}`}></i>
        }
        return (<div className={`cat-input ${this.props.disabled?"disabled":""} ${this.props.size?this.props.size:""}`} >
            <input name={this.props.name} autoFocus={this.props.autoFocus} readOnly={this.props.readOnly} type={this.props.type} disabled={this.props.disabled} placeholder={this.props.placeholder} />
            {icon}
        </div>)
    }
    render() {
        return this.renderElement()
    }
}