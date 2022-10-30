import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import assetContext from '../../../Context/Home/assetContext'

export default class DropDownBox extends Component {

    static contextType = assetContext
    state = {}

    // Below function will handle Dropdown value selected 
    onDropDownChange = async (val, position) => {
        var tmp = this.context.tagArray
        
        tmp[position] = val
        await this.context.setTagArrayVal(tmp)

        if (!(val === "ul" || val === "ol" || val === "table" || val === "blockquote" || val === "code" || val === "img" ||
            val === "img")) {
                
            tmp = this.context.textAreaArray
            tmp[position] = ""
            await this.context.setTextAreaArrayVal(tmp)
        }

        if ((val === "ul") || (val === "ol")) {
            tmp = this.context.textAreaArray
            tmp[position] = { 1: '' }
            await this.context.setTextAreaArrayVal(tmp)
        }
        if (val === "blockquote" || val === "code" || val === "code_output" || val === 'img') {
            tmp = this.context.textAreaArray
            tmp[position] = { 1: '', 2: '' }
            await this.context.setTextAreaArrayVal(tmp)
        }
        if (val === "table") {
            tmp = this.context.textAreaArray
            tmp[position] = {
                row: 1,
                col: 1,
                table: { "0-1": '', "1-1": '' },
            }
            await this.context.setTextAreaArrayVal(tmp)
        }
        this.setState({})
        this.props.reRender()
    }
    render() {
        var position = this.props.position
        return (
            <>
                <Dropdown className="mt-4" onSelect={(e) => { this.onDropDownChange(e, position) }}>

                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#4353ff" }}>

                        {this.context.tagArray[position] ? this.context.tagTitle[this.context.tagArray[position]] : "Select Tag"}

                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ overflowY: "auto", maxHeight: "200px" }}>

                        {Object.keys(this.context.tagTitle).map((key, i) => {
                            return (
                                <Dropdown.Item eventKey={key} key={i}>{this.context.tagTitle[key]}</Dropdown.Item>
                            )
                        })}

                    </Dropdown.Menu>
                </Dropdown>
            </>
        )
    }
}
