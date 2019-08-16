import * as React from "react";
import "./table.css"

interface TableProps{
    data: Array<any>
    columns: Array<any>
    stripe?: boolean
    border?: boolean
}

export class Table extends React.Component<TableProps>{
    constructor(props: TableProps) {
        super(props)
    }
    renderHeader(){
        let columns = this.props.columns
        return columns.map((col)=>{
            return <th key={col.prop}>{col.label}</th>
        })
    }
    renderRows(){
        let data = this.props.data
        let columns = this.props.columns
        return data.map((data, index)=>{
            let rows = columns.map((col)=>{
                return <td key={col.prop}>{data[col.prop]}</td>
            })
            return <tr key={index}>{rows}</tr>
        })
    }
    render() {
        return (
            <table className={`cat-tables ${this.props.stripe?'stripe':''} ${this.props.border?'border':''}`}>
                <thead>
                    <tr> 
                        {this.renderHeader()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}