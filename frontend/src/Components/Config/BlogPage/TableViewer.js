import React, { Component } from 'react'

export default class TableViewer extends Component {

    render() {
        var textAreaArray = this.props.textAreaArray
        var row = textAreaArray["row"]
        var col = textAreaArray["col"]
        var rowArr = []
        var colArr = []
        var i = 0
        for (i = 1; i <= row; i++) {
            rowArr.push(i)
        }
        for (i = 1; i <= col; i++) {
            colArr.push(i)
        }
        return (
            <>
                <div style={{ overflowX: "auto" }}>
                    <table className="table table-striped my-5" >
                        <thead>
                            <tr>
                                {colArr.map((col, col_index) => {
                                    return (
                                        <React.Fragment key={col * col_index * 605 +  45}>
                                            <th scope="col"> {textAreaArray['table'][`0-${col}`]}</th>
                                        </React.Fragment>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {rowArr.map((row, row_index) => {
                                return (
                                    <React.Fragment key={row * row_index *103 + 43}>
                                        <tr >
                                            {colArr.map((col, col_index) => {
                                                return (
                                                    <React.Fragment key={col * row_index * 103 + (col_index + 2) * 49}>
                                                        <td>{textAreaArray['table'][`${row}-${col}`]}</td>
                                                    </React.Fragment>
                                                )
                                            })}
                                        </tr>
                                    </React.Fragment>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
