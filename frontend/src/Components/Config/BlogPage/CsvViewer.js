import React, { Component } from 'react'

export default class CsvViewer extends Component {
    
    render() {
        var textAreaArray = this.props.textAreaArray
        if (typeof textAreaArray ===  'object' ){
            var colArr = Object.keys(textAreaArray[0])
            var rowArr = []
            var j = 0

            for(let i=0; i<Object.keys(textAreaArray).length; i++){
                if((typeof textAreaArray[i] ===  'object' ) && (textAreaArray[i] !== null)){
                    
                    rowArr[j] = textAreaArray[i]
                    j = j+1
                }
            }
        }
        
        return (
            <>
                <div style={{ overflowX: "auto" }}>
                    <table className="table table-striped my-5" >
                        <thead>
                            <tr>
                                {colArr.map((col, col_index) => {
                                    return (
                                        <React.Fragment key={col_index * 605 + 45}>
                                            <th scope="col"> {col}</th>
                                        </React.Fragment>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {rowArr.map((row, row_index) => {
                                return (
                                    <React.Fragment key={row_index * 103 + 43}>
                                        <tr >
                                            {colArr.map((col, col_index) => {
                                                return (
                                                    <React.Fragment key={row_index * 103 + (col_index + 2) * 49}>
                                                        <td>{rowArr[row_index][col]}</td>
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
