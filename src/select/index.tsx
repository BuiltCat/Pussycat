import * as React from "react"
import "./select.css"

interface SelectProps{
    options: Array<any>
    placeholder: string
    onChange: ({})=> void
    disabled?: boolean
}
interface SelectState{
    value: string
    label: string
    open: boolean
}

export class Select extends React.Component<SelectProps,SelectState>{
    constructor(props: SelectProps){
        super(props)
        this.state = {
            value: "",
            label: "",
            open: false
        }
    }
    clickOption = (value: string, label: string)=> {
        return () => {
            this.setState({
                value: value,
                label: label,
                open: false
            })
            this.props.onChange({
                value: value,
                label: label
            })
        }
    }
    renderElement = () => {
        const value = this.state.value
        return this.props.options.map(o => {
            return <li key={o.value} onClick={this.clickOption(o.value, o.label)} className={`option ${value===o.value?'active':''}`} value={ o.value }>{o.label}</li>
        })
    }
    render (){
            if(this.props.disabled){
                return (
                    <div className={`cat-select ${this.props.disabled?'disabled':''}`}>
                        <div className={`select`}>
                        <span className={`catfont cat-down`}></span>
                            {this.props.placeholder}
                        </div>
                    </div>
                )
            }
            return (
            <div className={`cat-select ${this.props.disabled?'disabled':''}`}>
                <div className={`select ${this.state.open?'open':''}`} onClick={()=>{
                    this.setState({
                        open: !this.state.open
                    })
                }}>
                {this.state.label||this.props.placeholder}
                <span className={`catfont cat-down ${this.state.open?'open':''}`}></span>
                </div>
                <ul className="select-option">
                    {this.renderElement()}
                </ul>
            </div>
        )
    }
}