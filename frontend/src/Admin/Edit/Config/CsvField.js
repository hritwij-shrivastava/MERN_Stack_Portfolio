import React, { Component } from 'react'
import assetContext from '../../../Context/Home/assetContext'
import csv from '../../../static/img/csv.png'

export default class CsvField extends Component {

    static contextType = assetContext
    state = {}

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    onCsvFileUpload = async (e, position) => {
        var val = e.target.files[0]
        var tmp = this.context.csvFilesArray
        tmp[position] = val
        await this.context.setCsvFilesArrayVal(tmp)

        tmp = this.context.textAreaArray
        tmp[position] = val.name
        await this.context.setTextAreaArrayVal(tmp)
        this.ref.current.value = "";
        this.setState({})
    }
    render() {
        var position = this.props.position
        return (
            <>
                <div style={{ width: "90%" }}>
                    <input type="file" accept=".csv" ref={this.ref} style={{ marginLeft: "275px" }} onChange={(e) => { this.onCsvFileUpload(e, position) }} />
                </div>

                {(!(this.context.csvFilesArray[position] ==='') || (this.context.csvFilesArray[position] ===null))?
                    <figure className="blog-banner mt-4">
                        <img className="img-fluid" src={csv} alt="" style={{ maxHeight: "100px" }} />
                        <br />
                        {(this.context.textAreaArray[position] === 'object')?
                        <label>{this.context.textAreaArray[position]}</label>
                        :
                        <label>{this.context.textAreaArray[position]["csv"]}</label>
                        }
                    </figure>
                    : null}


            </>
        )
    }
}
