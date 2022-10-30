import React, { Component } from 'react'

import CsvField from './Config/CsvField'
import ImgField from './Config/ImgField'
import ListField from './Config/ListField'
import PdfField from './Config/PdfField'
import PptField from './Config/PptField'
import TableField from './Config/TableField'
import assetContext from '../../Context/Home/assetContext'

export default class FieldSelector extends Component {

  static contextType = assetContext
  state = {}

  // Below function will check if anything is written inside Text area field

  onChangeTextArea = async (e, position) => {
    const val = e.target.value;
    var tmp = this.context.textAreaArray
    tmp[position] = val

    await this.context.setTextAreaArrayVal(tmp)
    this.setState({})
  }

  // Below function will check if anything is written inside List Text area field

  onChangeListVal = async (e, position, li_position) => {
    const val = e.target.value;

    var tempList = this.context.textAreaArray[position]
    tempList[li_position] = val

    var tmp = this.context.textAreaArray
    tmp[position] = tempList

    await this.context.setTextAreaArrayVal(tmp)
    this.setState({})

  }

  render() {
    var position = this.props.position
    return (
      <>
        {((this.context.tagArray[position] === "h1") || (this.context.tagArray[position] === "h2")  
                                                     || (this.context.tagArray[position] === "h3") 
                                                     || (this.context.tagArray[position] === "h4")  
                                                     || (this.context.tagArray[position] === "h5")  
                                                     || (this.context.tagArray[position] === "h6")  
                                                     || (this.context.tagArray[position] === "iframe")
                                                     || (this.context.tagArray[position] === "description")
                                                     || (this.context.tagArray[position] === "keywords")
                                                     || (this.context.tagArray[position] === "author")
                                                     || (this.context.tagArray[position] === "prevblog")
                                                     || (this.context.tagArray[position] === "nextblog") ) ?
          <input type="text" style={{ width: "90%" }} onChange={(e) => { this.onChangeTextArea(e, position) }} value={this.context.textAreaArray[position]} />
          : null}

        {(this.context.tagArray[position] === "p")  ?
          <textarea rows="8" cols="70" onChange={(e) => { this.onChangeTextArea(e, position) }} value={this.context.textAreaArray[position]}></textarea>
          : null}

        {(this.context.tagArray[position] === "code") || (this.context.tagArray[position] === "code_output") ?
          <>
            <textarea rows="8" cols="70" value={this.context.textAreaArray[position][1]} onChange={(e) => { this.onChangeListVal(e, position, 1) }}></textarea>
            <label style={{ marginRight: "20px" }}>Code Language</label>
            <input type="text" value={this.context.textAreaArray[position][2]} onChange={(e) => { this.onChangeListVal(e, position, 2) }} />
          </>
          : null}

        {(this.context.tagArray[position] === "blockquote") ?
          <>
            <textarea rows="8" cols="70" value={this.context.textAreaArray[position][1]} onChange={(e) => { this.onChangeListVal(e, position, 1) }}></textarea>
            <label style={{ marginRight: "20px" }}>Quote By:</label>
            <input type="text" value={this.context.textAreaArray[position][2]} onChange={(e) => { this.onChangeListVal(e, position, 2) }} />
          </>
          : null}

        {((this.context.tagArray[position] === "ul") || (this.context.tagArray[position] === "ol")) ?
          <ListField position={position} onChangeListVal={this.onChangeListVal} />
          : null}

        {(this.context.tagArray[position] === "img") || (this.context.tagArray[position] === "thumbnail") ?
        <>
          <ImgField position={position} />
          <label style={{ marginRight: "20px" }}>Alternate Text</label>
          <input type="text" value={this.context.textAreaArray[position][2]} onChange={(e) => { this.onChangeListVal(e, position, 2) }} />
        </>
          : null}

        {(this.context.tagArray[position] === "pptx") ?
          <PptField position={position} />
          : null}

        {(this.context.tagArray[position] === "pdf") ?
          <PdfField position={position} />
          : null}

        {(this.context.tagArray[position] === "csv") ?
          <CsvField position={position} />
          : null}

        {(this.context.tagArray[position] === "table") ?
          <TableField position={position} />
          : null}
      </>
    )
  }
}
