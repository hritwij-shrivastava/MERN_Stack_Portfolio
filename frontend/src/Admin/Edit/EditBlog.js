import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'

import Title from './Config/Title'
import DropDownBox from './Config/DropDownBox'
import assetContext from '../../Context/Home/assetContext'

import add from '../../static/img/add-icon.png'
import remove from '../../static/img/remove-icon.png'
import spinner from '../../static/img/loader.gif'
import FieldSelector from './FieldSelector'
// import ImgField from './Config/ImgField'

import '../../static/css/bootstrap.css'
import '../../static/css/ionicons.min.css'
import '../../static/css/main.css'

export default class EditBlog extends Component {

    static contextType = assetContext
    state = {
        show: false
    }
    componentDidMount = async () => {
        

        const pathname = window.location.pathname
        let id = pathname.split("edit/")[1];
        // var tagArray = ""
        var textAreaArray = ""
        let data = await this.context.getBlogData(id)
        // console.log(data)
        if (data.err) {
            alert(data.err)
        }
        else {
            await this.context.setBlogTitleVal(data.blogTitle)
            if (data.textAreaArray[1] === "") {
                textAreaArray = data.textAreaArray
                textAreaArray[1] = ''
                textAreaArray[2] = ''
                textAreaArray[3] = ''
                textAreaArray[4] = ''
                textAreaArray[5] = ''
                textAreaArray[6] = ''
                await this.context.setTextAreaArrayVal(textAreaArray)
            }
            else {
                await this.context.setTextAreaArrayVal(data.textAreaArray)
            }
            if (data.tagArray[1] === "") {
                // tagArray = { 1: '' }
                var tmp = data.tagArray
                
                tmp[1] = "description"
                tmp[2] = "keywords"
                tmp[3] = "author"
                tmp[4] = "prevblog"
                tmp[5] = "nextblog"
                await this.context.setTagArrayVal(tmp)
                // await this.context.setTagArrayVal(tagArray)
            }
            else {
                await this.context.setTagArrayVal(data.tagArray)
            }
            await this.context.setBlogIdVal(data.blogId)
        }

    }

    reRender = () => {
        this.setState({})
    }

    spinnerControl = (val) => {
        this.setState({
            show: val
        })
    }

    //Below function will handle main box add button

    onAddBoxVal = async (position) => {

        var tagArray = this.context.tagArray
        var textAreaArray = this.context.textAreaArray
        var imgFilesArray = this.context.imgFilesArray
        var csvFilesArray = this.context.csvFilesArray
        var pptxFilesArray = this.context.pptxFilesArray
        var pdfFilesArray = this.context.pdfFilesArray
        var imgTmpUrl = this.context.imgTmpUrl

        var keyArray = Object.keys(this.context.tagArray)
        keyArray = keyArray.map(Number)
        keyArray = keyArray.sort(function (a,b) { return a - b;} )      //For ex- [0,1,2,3,4,5]
        var lastIndex = keyArray[keyArray.length - 1]           //Here last index = 5
        var newLastIndex = parseInt(lastIndex) + 1                        //New last index = 6
        
        tagArray[newLastIndex] = ''                             //create new empty element at position 6
        textAreaArray[newLastIndex] = ''
        imgFilesArray[newLastIndex] = ''
        csvFilesArray[newLastIndex] = ''
        pptxFilesArray[newLastIndex] = ''
        pdfFilesArray[newLastIndex] = ''
        imgTmpUrl[newLastIndex] = ''

        // Copy 2nd last element(new second last in this case 5) value into last index(here 6) value 
        for (var i = newLastIndex; i > parseInt(position); i--) {
            if (((i - 1) === 0) || ((i - 1) === parseInt(position))) {
                tagArray[i] = ''
                textAreaArray[i] = ''
                imgFilesArray[i] = ''
                csvFilesArray[i] = ''
                pptxFilesArray[i] = ''
                pdfFilesArray[i] = ''
                imgTmpUrl[i] = ''
            }
            else {
                tagArray[i] = tagArray[i - 1]
                textAreaArray[i] = textAreaArray[i - 1]
                imgFilesArray[i] = imgFilesArray[i - 1]
                csvFilesArray[i] = csvFilesArray[i - 1]
                pptxFilesArray[i] = pptxFilesArray[i - 1]
                pdfFilesArray[i] = pdfFilesArray[i - 1]
                imgTmpUrl[i] = imgTmpUrl[i - 1]

            }
        }


        await this.context.setTagArrayVal(tagArray)
        await this.context.setTextAreaArrayVal(textAreaArray)
        await this.context.setImgFilesArrayVal(imgFilesArray)
        await this.context.setCsvFilesArrayVal(csvFilesArray)
        await this.context.setPptxFilesArrayVal(pptxFilesArray)
        await this.context.setPdfFilesArrayVal(pdfFilesArray)
        await this.context.setImgTmpUrlVal(imgTmpUrl)

        // const queryString = window.location.href
        // let id = queryString.split("edit/")[1]
        // var blogTitle = this.context.blogTitle
        // var status = 0

        // await this.context.sendBlogData(id, blogTitle, tagArray, textAreaArray, status)
        this.setState({})

    }


    onRemoveVal = async (position) => {

        position = parseInt(position)

        // Step-1   -   On Minus button click decrease boxes value to 1

        var tagArray = this.context.tagArray
        var textAreaArray = this.context.textAreaArray
        var imgFilesArray = this.context.imgFilesArray
        var csvFilesArray = this.context.csvFilesArray
        var pptxFilesArray = this.context.pptxFilesArray
        var pdfFilesArray = this.context.pdfFilesArray
        var imgTmpUrl = this.context.imgTmpUrl

        var keyArray = Object.keys(this.context.tagArray)
        keyArray = keyArray.map(Number)
        keyArray = keyArray.sort(function (a,b) { return a - b;} ) //For ex- [0,1,2,3,4,5]

        var totalItem = keyArray.length

        var lastIndex = keyArray[keyArray.length - 1]           //Here last index = 5
        var newLastIndex = parseInt(lastIndex) - 1              //New last index = 4

        // if user want to delete only thumbnail then don't touch anythng else just delete thumbnail at 0 position
        if (position === 0) {
            textAreaArray[0][1] = null
            textAreaArray[0][2] = ''
            imgFilesArray[0] = null
            imgTmpUrl[0] = ''
        }
        if (position === 1 || position === 2 || position === 3 || position === 4 || position === 5) {
            textAreaArray[position] = ''
            imgFilesArray[position] = null
            imgTmpUrl[position] = ''
        }
        // else if user want to delete any other position element then check if blog has only 0,1,2,3,4,5 and 6 position 

        else {
            // 2 means only thumb and position 1 is present then make position 1 empty
            if (totalItem === 6) {
                tagArray[6] = ''
                textAreaArray[6] = ''
                imgFilesArray[6] = ''
                csvFilesArray[6] = ''
                pptxFilesArray[6] = ''
                pdfFilesArray[6] = ''
                imgTmpUrl[6] = ''
            }
            // More than 6 means there are many field but user want to delete only position 6 value
            // then first copy next element to position 2 similarly for all element
            // and at last delete extra element
        
            if ((totalItem > 6) && parseInt(position) > 5 ) {
                for (let i = position; i <= newLastIndex; i++) {
                    tagArray[i] = tagArray[i + 1]
                    textAreaArray[i] = textAreaArray[i + 1]
                    imgFilesArray[i] = imgFilesArray[i + 1]
                    csvFilesArray[i] = csvFilesArray[i + 1]
                    pptxFilesArray[i] = pptxFilesArray[i + 1]
                    pdfFilesArray[i] = pdfFilesArray[i + 1]
                    imgTmpUrl[i] = imgTmpUrl[i + 1]
                }

                delete tagArray[lastIndex]
                delete textAreaArray[lastIndex]
                delete imgFilesArray[lastIndex]
                delete csvFilesArray[lastIndex]
                delete pptxFilesArray[lastIndex]
                delete pdfFilesArray[lastIndex]
                delete imgTmpUrl[lastIndex]

            }
        }

        await this.context.setTagArrayVal(tagArray)
        await this.context.setTextAreaArrayVal(textAreaArray)
        await this.context.setImgFilesArrayVal(imgFilesArray)
        await this.context.setCsvFilesArrayVal(csvFilesArray)
        await this.context.setPptxFilesArrayVal(pptxFilesArray)
        await this.context.setPdfFilesArrayVal(pdfFilesArray)
        await this.context.setImgTmpUrlVal(imgTmpUrl)
        this.setState({})
    }


    render() {
        return (
            <>
                <div className="firstcontainer">
                    {this.state.show ?
                        <div className="spinner">
                            <div className="spinner-body">
                                <div className="spinner-inner ">
                                    <div className="spinnerContainer">
                                        <img src={spinner} alt="" srcSet="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null}
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="writeArea">

                                        <Title spinnerControl={this.spinnerControl} />

                                        <div className="row" style={{ marginTop: "50px" }}>
                                            <div className="col-2">
                                                <Dropdown className="mt-4">
                                                    <Dropdown.Toggle>
                                                    Thumbnail {/* From backend thumbnail will be set at position 0 of tagArray */}
                                                    </Dropdown.Toggle>
                                                </Dropdown>
                                            </div>
                                            <div className="col-8 mt-4">
                                                <FieldSelector position={0} />
                                            </div>
                                            <div className="col-2 mt-4" style={{ marginLeft: "-80px" }}>
                                                {/* <button className='smiconBtn' onClick={() => { this.onAddBoxVal(0) }}><img src={add} alt="" /></button> */}
                                                <button className='smiconBtn' onClick={() => { this.onRemoveVal(0) }}><img src={remove} alt="" /></button>
                                            </div>
                                        </div>

                                        <div className="row" style={{ marginTop: "50px" }}>
                                            <div className="col-2">
                                                <Dropdown className="mt-4">
                                                    <Dropdown.Toggle>
                                                        Description
                                                    </Dropdown.Toggle>
                                                </Dropdown>
                                            </div>
                                            <div className="col-8 mt-4">
                                                <FieldSelector position={1} />
                                            </div>
                                            <div className="col-2 mt-4" style={{ marginLeft: "-80px" }}>
                                                {/* <button className='smiconBtn' onClick={() => { this.onAddBoxVal(1) }}><img src={add} alt="" /></button> */}
                                                <button className='smiconBtn' onClick={() => { this.onRemoveVal(1) }}><img src={remove} alt="" /></button>
                                            </div>
                                        </div>

                                        <div className="row" style={{ marginTop: "50px" }}>
                                            <div className="col-2">
                                                <Dropdown className="mt-4">
                                                    <Dropdown.Toggle>
                                                        Keywords
                                                    </Dropdown.Toggle>
                                                </Dropdown>
                                            </div>
                                            <div className="col-8 mt-4">
                                                <FieldSelector position={2} />
                                            </div>
                                            <div className="col-2 mt-4" style={{ marginLeft: "-80px" }}>
                                                {/* <button className='smiconBtn' onClick={() => { this.onAddBoxVal(2) }}><img src={add} alt="" /></button> */}
                                                <button className='smiconBtn' onClick={() => { this.onRemoveVal(2) }}><img src={remove} alt="" /></button>
                                            </div>
                                        </div>

                                        <div className="row" style={{ marginTop: "50px" }}>
                                            <div className="col-2">
                                                <Dropdown className="mt-4">
                                                    <Dropdown.Toggle>
                                                        Author
                                                    </Dropdown.Toggle>
                                                </Dropdown>
                                            </div>
                                            <div className="col-8 mt-4">
                                                <FieldSelector position={3} />
                                            </div>
                                            <div className="col-2 mt-4" style={{ marginLeft: "-80px" }}>
                                                {/* <button className='smiconBtn' onClick={() => { this.onAddBoxVal(3) }}><img src={add} alt="" /></button> */}
                                                <button className='smiconBtn' onClick={() => { this.onRemoveVal(3) }}><img src={remove} alt="" /></button>
                                            </div>
                                        </div>

                                        <div className="row" style={{ marginTop: "50px" }}>
                                            <div className="col-2">
                                                <Dropdown className="mt-4">
                                                    <Dropdown.Toggle>
                                                        Previous Blog Urls
                                                    </Dropdown.Toggle>
                                                </Dropdown>
                                            </div>
                                            <div className="col-8 mt-4">
                                                <FieldSelector position={4} />
                                            </div>
                                            <div className="col-2 mt-4" style={{ marginLeft: "-80px" }}>
                                                {/* <button className='smiconBtn' onClick={() => { this.onAddBoxVal(4) }}><img src={add} alt="" /></button> */}
                                                <button className='smiconBtn' onClick={() => { this.onRemoveVal(4) }}><img src={remove} alt="" /></button>
                                            </div>
                                        </div>

                                        <div className="row" style={{ marginTop: "50px" }}>
                                            <div className="col-2">
                                                <Dropdown className="mt-4">
                                                    <Dropdown.Toggle>
                                                        Next Blog Url
                                                    </Dropdown.Toggle>
                                                </Dropdown>
                                            </div>
                                            <div className="col-8 mt-4">
                                                <FieldSelector position={5} />
                                            </div>
                                            <div className="col-2 mt-4" style={{ marginLeft: "-80px" }}>
                                                <button className='smiconBtn' onClick={() => { this.onAddBoxVal(5) }}><img src={add} alt="" /></button>
                                                <button className='smiconBtn' onClick={() => { this.onRemoveVal(5) }}><img src={remove} alt="" /></button>
                                            </div>
                                        </div>


                                        {Object.keys(this.context.tagArray).map((position, index) => {

                                            return (
                                                <React.Fragment key={index * 56080}>

                                                    {(parseInt(position) > 5) ?

                                                        <div className="row" style={{ marginTop: "50px" }}>
                                                            <div className="col-2"> <DropDownBox position={position} reRender={this.reRender} /> </div>

                                                            <div className="col-8 mt-4">
                                                                <FieldSelector position={position} />
                                                            </div>

                                                            <div className="col-2 mt-4" style={{ marginLeft: "-80px" }}>
                                                                <button className='smiconBtn' onClick={() => { this.onAddBoxVal(position) }}><img src={add} alt="" /></button>
                                                                <button className='smiconBtn' onClick={() => { this.onRemoveVal(position) }}><img src={remove} alt="" /></button>
                                                            </div>
                                                        </div>
                                                        : null}
                                                </React.Fragment>
                                            )

                                        })}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
