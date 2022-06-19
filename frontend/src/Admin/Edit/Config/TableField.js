import React, { Component } from 'react'
import assetContext from '../../../Context/Home/assetContext'

export default class TableField extends Component {

    static contextType = assetContext
    state = {}

    //Below function will add row and col value to state variable

    onRowChange = async (e, position) => {
        var row = e.target.value;
        var col = this.context.textAreaArray[position]["col"]
        var tmpTable = {}
        var index = ""

        const reg = new RegExp('^[0-9]+$');
        if (!(reg.test(row))) {
            row = 1
        }
        else {
            row = parseInt(row)
            if (row === 0 || row > 100) {
                row = 1
            }
        }

        for(let i=0;i<=parseInt(row);i++){
            for(let j=1;j<=parseInt(col);j++){
                index = i.toString() + "-" + j.toString()
                tmpTable[index] = ''
            }
        }

        var tmp = this.context.textAreaArray
        tmp[position]["row"] = row
        tmp[position]["table"] = tmpTable
        await this.context.setTextAreaArrayVal(tmp)
        this.setState({})
    }
    onColChange = async (e, position) => {
        var col = e.target.value;
        var row = this.context.textAreaArray[position]["row"]
        var tmpTable = {}
        var index = ""
        const reg = new RegExp('^[0-9]+$');
        if (!(reg.test(col))) {
            col = 1
        }
        else {
            col = parseInt(col)
            if (col === 0 || col > 100) {
                col = 1
            }
        }
        
        for(let i=0;i<=parseInt(row);i++){
            for(let j=1;j<=parseInt(col);j++){
                index = i.toString() + "-" + j.toString()
                tmpTable[index] = ''
            }
        }

        var tmp = this.context.textAreaArray
        tmp[position]["col"] = col
        tmp[position]["table"] = tmpTable
        await this.context.setTextAreaArrayVal(tmp)
        this.setState({})
    }

    onTableDataChange = async (e, position, row, col) => {
        var val = e.target.value
        var index = row.toString() + "-" + col.toString()
        var tmpTable = this.context.textAreaArray[position]['table']
        
        tmpTable[index] = val

        var tmp = this.context.textAreaArray
        tmp[position]["table"] = tmpTable

        await this.context.setTextAreaArrayVal(tmp)
        this.setState({})
    }

    render() {
        var position = this.props.position
        var row = this.context.textAreaArray[position]["row"]
        var col = this.context.textAreaArray[position]["col"]        
        var rowArr = []
        var colArr = []
        var i = 0
        for(i=1; i<=row; i++){
            rowArr.push(i)
        }
        for(i=1; i<=col; i++){
            colArr.push(i)
        }
        return (
            <>
                <div className="row">
                    <div className="col-10">
                        <label htmlFor="" style={{ marginRight: "20px" }}>Row</label>
                        <input type="text" style={{ width: "25%", marginRight: "20px" }} onChange={(e) => { this.onRowChange(e, position) }} defaultValue={row} />
                        <label htmlFor="" style={{ marginRight: "20px" }}>X &nbsp;&nbsp;Col</label>
                        <input type="text" style={{ width: "25%" }} onChange={(e) => { this.onColChange(e, position) }} defaultValue={col} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-11" style={{ overflowX: "auto" }}>
                        <table className="table table-striped my-5" >
                            <thead>
                                <tr>
                                    {colArr.map((col, col_index) => {
                                        return (
                                            <React.Fragment key={col * col_index * 605 + position * 45}>
                                                <th scope="col"><input type="text" style={{ width: "60px" }} onChange={(e) => { this.onTableDataChange(e, position, 0, col) }} value={this.context.textAreaArray[position]['table'][`0-${col}`]} /></th>
                                            </React.Fragment>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {rowArr.map((row, row_index) => {
                                    return (
                                        <React.Fragment key={row * row_index * position * 103 + position * 43}>
                                            <tr >
                                                {colArr.map((col, col_index) => {
                                                    return (
                                                        <React.Fragment key={col * row_index * position * 103 + position * (col_index + 2) * 49}>
                                                            <td><input type="text" style={{ width: "60px" }} onChange={(e) => { this.onTableDataChange(e, position, row, col) }} value={this.context.textAreaArray[position]['table'][`${row}-${col}`]} /></td>
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
                </div>
            </>
        )
    }
}
