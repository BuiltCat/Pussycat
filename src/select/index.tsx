import * as React from "react"
import "./select.css"
import { HtmlAttributes } from "csstype";

interface SelectProps{
    options: Array<any>
    placeholder: string
}
interface SelectState{
    value: string
}

export class Select extends React.Component<SelectProps,SelectState>{
    constructor(props: SelectProps){
        super(props)
        this.state = {
            value: ""
        }
    }
    clickOption = (value: string)=> {
        return () => {
            this.setState({
                value: value
            })
        }
    }
    renderElement = () => {
        const value = this.state.value
        return this.props.options.map(o => {
            return <li onClick={this.clickOption(o.value)} className={`option ${value===o.value?'active':''}`} value={ o.value }>{o.label}</li>
        })
    }
    render (){
        return (
            <div className={`cat-select`}>
                <div className="select">{this.props.placeholder}</div>
                <ul className="select-option">
                    {this.renderElement()}
                </ul>
            </div>
        )
    }
}