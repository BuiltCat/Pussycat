import * as React from "react"
import "./tag.css"

interface TagProps{
    type?: string
    closed?: boolean
    onClose?: ()=>void
}

interface TagState{
    hidden: boolean
}
export class Tag extends React.Component<TagProps,TagState>{
    constructor(props: TagProps){
        super(props)
        this.state = {
            hidden: false
        }
    }
    onClick = () => {
        this.setState({
            hidden:true
        })
        this.props.onClose()
    }
    renderElement(){
        const catTag = {
            display: this.state.hidden? 'none':'inner-block'
        }
        if(this.props.closed){
            let i = <i className="catfont cat-close"></i>
            if(this.props.onClose){
                i =  <i className="catfont cat-close" onClick={this.onClick}></i>
            }
            return (
                <span className={`cat-tag ${this.props.type}` } style={catTag}>
                    {this.props.children}
                    {i}
                </span>
            )
        }
        return (
            <span className={`cat-tag ${this.props.type} `}  style={catTag}>
                {this.props.children}
            </span>
        )
    }
    render(){
        return this.renderElement()
    }
}