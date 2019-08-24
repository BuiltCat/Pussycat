import * as React from "react";
import "./checkbox.css";

interface CheckBoxProps{
    clicked?:boolean
    disabled?:boolean
    label?: string
    HandleValueChange?:(value: any)=>void
}
interface CheckBoxState{
    clicked:boolean
}
interface CheckBoxGroupProps{
    children: Array<any>
    value: Array<any>
    onChange: (value: any) => void
}
interface CheckBoxGroupState{
    value: Array<string>
}
export class CheckBox extends React.Component<CheckBoxProps,CheckBoxState>{
    constructor(props: CheckBoxProps){
        super(props)
        this.state = {
            clicked: this.props.clicked
        }
    }
    onClick(){
        if(this.props.HandleValueChange){
            this.props.HandleValueChange(this.props.label)
        }
        this.setState({
            clicked: !this.state.clicked
        })
    }
    render() {
        return (
            <label className={`cat-checkbox ${this.props.disabled?"disabled":""}`}>
                <span className={`square catfont ${this.state.clicked?"is-clicked":""}`}></span>
                <input type="checkbox" disabled ={this.props.disabled} onClick={this.onClick.bind(this)} />
                <span>{ this.props.children||this.props.label }</span>
            </label>
        )
    }
}
export class CheckBoxGroup extends React.Component<CheckBoxGroupProps,CheckBoxGroupState>{
    constructor(props: CheckBoxGroupProps){
        super(props)
        this.state = {
            value: this.props.value
        }
    }
    renderCheckBox(){
        return this.props.children.map( c =>{
            for(let v in this.props.value){
                if( this.props.value[v] === c.props.label){
                    return React.cloneElement(c,{
                            clicked: true,
                            key: c.props.label,
                            HandleValueChange: this.HandleValueChange
                        })
                }
            }
            return React.cloneElement(c,{
                clicked: false,
                key: c.props.label,
                HandleValueChange: this.HandleValueChange
            })
        } )
    }
    HandleValueChange = (label: string) => {
        const value = this.state.value
        const index = value.indexOf(label)
        if(index >= 0){
            value.splice(index,1)
        }else{
            value.push(label)
            this.setState({
                value
            })
            
        }
    }
    onChange = () => {
        this.props.onChange(this.state.value)
    }
    render(){
        return(
            <div onChange={this.onChange}>
                {this.renderCheckBox()}
            </div>
        )
    }
}
