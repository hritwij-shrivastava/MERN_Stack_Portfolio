import React, { Component } from 'react'
import assetContext from '../../../Context/Home/assetContext'
import pptx from '../../../static/img/pptx.png'

export default class PptField extends Component {

    static contextType = assetContext
    state = {}

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    onPptxFileUpload = async (e, position) => {
        var val = e.target.files[0]
        var tmp = this.context.pptxFilesArray
        tmp[position] = val
        await this.context.setPptxFilesArrayVal(tmp)

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
                    <input type="file" accept=".pptx" ref={this.ref} style={{ marginLeft: "275px" }} onChange={(e) => { this.onPptxFileUpload(e, position) }} />
                </div>

                {(!(this.context.pptxFilesArray[position] ==='') || (this.context.pptxFilesArray[position] ===null))?
                    <figure className="blog-banner mt-4">
                        <img className="img-fluid" src= {pptx} alt="" style={{ maxHeight: "100px" }} />
                        <br />
                        {(this.context.textAreaArray[position] === 'object')?
                        <label>{this.context.textAreaArray[position]}</label>
                        :
                        <label>{this.context.textAreaArray[position]["pptx"]}</label>
                        }
                    </figure>
                    : null}
            </>
        )
    }
}
