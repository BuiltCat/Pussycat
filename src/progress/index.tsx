import * as React from "react"
import "./progress.css"
interface ProgressProps{
    percentage: number
    textInside?: boolean
    status?: string
    strokeWidth?: number
}
export class Progress extends React.Component<ProgressProps>{
    render(){
        const progressInner = {
            width: this.props.percentage + "%",
            height: this.props.strokeWidth + "px"
        }
        const catProgress = {
            height: this.props.strokeWidth + "px"
        }
        const progressNumber = {
            height: this.props.strokeWidth + "px",
            lineHeight:  this.props.strokeWidth + "px"
        }
        return (
                <div className={`cat-progress ${this.props.textInside?'text-inside':''}`} style={catProgress}>
                    <div className={`progress-inner ${this.props.status?this.props.status:''}`} style={progressInner}>
                    <span className='progress-number' style={progressNumber}>
                        {this.props.textInside?`${this.props.percentage}%`:''}
                    </span>
                </div>
            </div>
        )
    }
}