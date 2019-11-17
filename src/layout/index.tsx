import * as React from "react"
import "./layout.css"

interface LayoutRowProps{
    gutter ?:number
    children: any
}

interface LayoutColProps{
    span: number
    offset?: number
    gutter ?:number
    children: any
}

class LayoutRow extends React.Component<LayoutRowProps>{
    renderChildren(){
        return React.Children.map( this.props.children, child => {
            return React.cloneElement(child, {
                ...child.props,
                gutter: this.props.gutter
            })
        })
    }
    render(){
        return (
            <div className="cat-layout-row">
                {this.renderChildren()}
            </div>
        )
    }
}

class LayoutCol extends React.Component<LayoutColProps>{
    render(){
        console.log()
        const style = {
            width: `${(this.props.span/24)*100}%`,
            marginLeft:  `${(this.props.offset/24)*100}%`,
            padding: this.props.gutter?`0 ${this.props.gutter}px`:0
        }
        return (
            <div className="cat-layout-col" style={style}>
                { this.props.children}
            </div>
        )
    }
}

export {
    LayoutRow,
    LayoutCol
}