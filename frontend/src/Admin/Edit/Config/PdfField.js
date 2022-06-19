import React, { Component } from 'react'
import assetContext from '../../../Context/Home/assetContext'
import pdf from '../../../static/img/pdf.png'

export default class PdfField extends Component {

    static contextType = assetContext
    state = {}
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    onPdfFileUpload = async (e, position) => {
        var val = e.target.files[0]
        var tmp = this.context.pdfFilesArray
        tmp[position] = val
        await this.context.setPdfFilesArrayVal(tmp)

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
                    <input type="file" accept=".pdf" ref={this.ref} style={{ marginLeft: "275px" }} onChange={(e) => { this.onPdfFileUpload(e, position) }} />
                </div>

                {(!(this.context.pdfFilesArray[position] ==='') || (this.context.pdfFilesArray[position] ===null))?
                    <figure className="blog-banner mt-4">
                        <img className="img-fluid" src={pdf} alt="" style={{ maxHeight: "100px" }} />
                        <br />
                        <label>{this.context.textAreaArray[position]}</label>
                    </figure>
                    : null}
            </>
        )
    }
}
