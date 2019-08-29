import * as React from "react"
import "./progress.css"
interface ProgressProps{
    percentage: number
}
export class Progress extends React.Component<ProgressProps>{
    render(){
        const width = {
            width: this.props.percentage + "%"
        }
        return (
            <div className="cat-progress">
                <div className="progress-bar">
                    <div className="progress-inner" style={width}></div>
                </div>
                {this.props.percentage}%
            </div>
        )
    }
}