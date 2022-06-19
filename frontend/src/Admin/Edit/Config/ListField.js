import React, { Component } from 'react'
import assetContext from '../../../Context/Home/assetContext'
import add from '../../../static/img/add-icon.png'
import remove from '../../../static/img/remove-icon.png'
export default class ListField extends Component {

    static contextType = assetContext

    state = {}

    //Below function will handle add button of list

    onListAdd = async (position, li_position) => {

        var totalItem = Object.keys(this.context.textAreaArray[position]).length

        var index = totalItem + 1;
        var tmp =  this.context.textAreaArray
        var tmpList = this.context.textAreaArray[position];

        tmpList[index] = ''

        for (let i = index; i > li_position; i--) {

            if (i === parseInt(li_position) + 1) {
                tmpList[i] = ''
            }
            else {
                tmpList[i] = tmpList[i - 1]
                
            }

        }
        tmp[position] = tmpList
        await this.context.setTextAreaArrayVal(tmp)
        this.setState({})
    }

    //Below function will handle minus button of list

    onListRemove = async (position, li_position) => {

        var totalItem = Object.keys(this.context.textAreaArray[position]).length
        var index = totalItem - 1;
        var tmp =  await this.context.textAreaArray
        var tmpList = await this.context.textAreaArray[position];

        if(totalItem !==1){
            for (let i = parseInt(li_position) ; i <= index; i++) {
                tmpList[i] = tmpList[i + 1]
            }
            delete tmpList[index + 1]
        }
        else{
            tmpList[1] = ''
        }
        
        tmp[position] = tmpList
        await this.context.setTextAreaArrayVal(tmp)
        this.setState({})


    }

    render() {
        var position = this.props.position
        return (
            <>
                {Object.keys(this.context.textAreaArray[position]).map((li_position, li_index) => {
                    return (
                        <React.Fragment key={li_position * li_index * 98 + li_position}>
                            <div className="row">
                                <div className="col-10">
                                    <input type="text" className="mt-4" style={{ width: "75%" }} value={this.context.textAreaArray[position][li_position]} onChange={(e) => { this.props.onChangeListVal(e, position, li_position) }} />
                                </div>
                                <div className="col-2 mt-4" style={{ marginLeft: "-80px" }}>
                                    <button className='smiconBtn' onClick={() => { this.onListAdd(position, li_position) }}><img src={add} alt="" /></button>
                                    <button className='smiconBtn' onClick={() => { this.onListRemove(position, li_position) }}><img src={remove} alt="" /></button>
                                </div>
                            </div>
                        </React.Fragment>

                    )
                }
                )}
            </>
        )
    }
}
