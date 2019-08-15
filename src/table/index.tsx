import * as React from "react";
interface TableProps{
    data: Array<any>
    columns: Array<any>
}

export class Table extends React.Component<TableProps>{
    constructor(props: TableProps) {
        super(props)
        console.log(this.props.columns)
        console.log(this.props.data)
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
            <table>
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