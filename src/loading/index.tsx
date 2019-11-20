import * as React from "react"
import "./loading.css"
import { create } from "domain"

interface LoadingProps{
    text ?: string
    loading ?: boolean
    fullscreen ?: boolean
}

export class Loading extends React.Component<LoadingProps>{
    render(){
        document.body.className = document.body.className.replace("cat-loading catfont","")
        if(!this.props.loading){
            return (
                <div>
                    {this.props.children}
                </div>
            )
        }
        if(this.props.fullscreen){
            document.body.className = "cat-loading catfont"
            return(
                <div className="cat-loading catfont">
                <div className="cat-loading-full">
                    <div className="cat-loading-text">
                        {this.props.text}
                    </div>
                </div>
            </div>
            )
        }else{
        }
        return (
            <div className="cat-loading catfont">
                <div className="cat-loading-div">
                </div>
                <div className="cat-loading-text">
                    {this.props.text}
                </div>
                    {this.props.children}
            </div>
        )
    }
}
