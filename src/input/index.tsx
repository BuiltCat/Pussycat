import * as React from "react"
import "./input.css"
import { type } from "os";

interface InputProps{
    placeholder?: string
    disabled?: boolean
    icon?: string
    size?: string
}

export class Input extends React.Component<InputProps>{
    renderElement(){
        let icon 
        if(this.props.icon){
            icon = <i className={`catfont ${this.props.icon}`}></i>
        }
        return (<div className={`cat-input ${this.props.disabled?"disabled":""} ${this.props.size?this.props.size:""}`} >
            <input type="text" disabled={this.props.disabled} placeholder={this.props.placeholder} />
            {icon}
        </div>)
    }
    render() {
        return this.renderElement()
    }
}