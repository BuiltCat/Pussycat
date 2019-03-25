import React from "react";

class Table extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data
        };
        console.log(this.state.data)
    }
    render() {
        return (
            <table>
            </table>
        )
    }
}

export default Table;