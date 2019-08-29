import * as React from "react"
import "./tag.css"

interface TagProps{
    type?: string
    closed?: boolean
    onClose?: ()=>void
}
export class Tag extends React.Component<TagProps>{
    renderElement(){
       
        if(this.props.closed){
            let i = <i className="catfont cat-close"></i>
            if(this.props.onClose){
                i =  <i className="catfont cat-close" onClick={()=>this.props.onClose()}></i>
            }
            return (
                <span className={`cat-tag ${this.props.type} `}>
                    {this.props.children}
                    {i}
                </span>
            )
        }
        return (
            <span className={`cat-tag ${this.props.type} `}>
                {this.props.children}
            </span>
        )
    }
    render(){
        return this.renderElement()
    }
}