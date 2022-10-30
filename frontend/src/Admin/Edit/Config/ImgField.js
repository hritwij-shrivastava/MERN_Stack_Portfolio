import React, { Component } from 'react'
import assetContext from '../../../Context/Home/assetContext'

export default class ImgField extends Component {

    static contextType = assetContext
    state = {}

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }
    
    onImgFileUpload = async (e, position) => {

        var imgTmpUrl = this.context.imgTmpUrl

        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                imgTmpUrl[position] = reader.result
                this.context.setImgTmpUrlVal(imgTmpUrl)
                this.setState({})
            }
        }
        reader.readAsDataURL(e.target.files[0])

        var val = e.target.files[0]
        var tmp = this.context.imgFilesArray
        tmp[position] = val
        await this.context.setImgFilesArrayVal(tmp)

        tmp = this.context.textAreaArray
        tmp[position][1] = val.name
        await this.context.setTextAreaArrayVal(tmp)
        this.ref.current.value = "";
        this.setState({})

    }
    render() {
        var position = this.props.position
        return (
            <>
                <div style={{ width: "90%" }}>
                    <input type="file" accept="image/*" ref={this.ref} style={{ marginLeft: "275px" }} onChange={(e) => { this.onImgFileUpload(e, position) }} />
                </div>

                <figure className="blog-banner mt-4">
                    <img className="img-fluid" src={this.context.imgTmpUrl[position]} alt="" style={{maxHeight: "200px"}} />
                </figure>
            </>
        )
    }
}
