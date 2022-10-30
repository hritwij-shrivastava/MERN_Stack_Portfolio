import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import assetContext from '../../Context/Home/assetContext'

export default class Post extends Component {

    static contextType = assetContext
    state = {
        blog: [],
    }
    componentDidMount = async () => {
        const data = await  this.context.getBlog()
        this.setState({
            blog: data
        })
    }

    onEditBlog = async (id) => {
        window.location.href = `/edit/${id}`         
    }

    onSetBlogStatus = async (id,status) => {
        await this.context.setBlogStatus(id,status)
        var err = this.context.err
        if(!err){
            var data = this.context.serverRes
            await this.setState({
                blog: data.blogs
            })
            alert(data.msz)
        }
        else{
            var notice = this.context.serverRes
            alert(notice)
        }    
    }

    onDeleteBlog = async (id) => {
        await this.context.deleteBlog(id)
        var err = this.context.err
        if(!err){
            var data = this.context.serverRes
            await this.setState({
                blog: data.blogs
            })
            alert(data.msz)
        }
        else{
            var notice = this.context.serverRes
            alert(notice)
        }    
    }
    
    render() {
        if(!(typeof this.state.blog === "undefined")){
            if (this.state.blog.length > 0) {
            
                var paragraphArr = []
                var db = this.state.blog
                if (db.length !== 0) {
                    for (let i = 0; i < db.length; i++) {
                        var tag = db[i].tagArray
                        var text = db[i].textAreaArray
    
                        for (var key of Object.keys(tag)) {
                            if (tag[key] === 'p') {
                                paragraphArr.push(text[key].substr(0, 245))
                                break
                            }
                        }
    
                    }
                }
            }
        }
        

        return (
            <>
                {!(typeof this.state.blog === "undefined") ?
                    <>
                        {(this.state.blog.length > 0) ?
                            <div className="row">
                                <div className="col-lg-6">
                                    {this.state.blog.map((element, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                {(i % 2 === 0) ?
                                                    <div className="card shadow mb-4">
                                                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                            <h6 className="m-0 font-weight-bold text-primary">{element.blogTitle}</h6>
                                                            <div className="dropdown no-arrow">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle id="dropdownMenuLink">
                                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item eventKey="h1" onClick={()=>{this.onEditBlog(element._id)}}>Edit</Dropdown.Item>
                                                                        {(element.status === 0) ?
                                                                            <Dropdown.Item eventKey="h1" onClick={()=>{this.onSetBlogStatus(element._id,1)}}>Publish</Dropdown.Item>
                                                                            : null}

                                                                        {(element.status === 1) ?
                                                                            <Dropdown.Item eventKey="h1" onClick={()=>{this.onSetBlogStatus(element._id,0)}}>UnPublish</Dropdown.Item>
                                                                            : null}
                                                                        <Dropdown.Item eventKey="h1" onClick={()=>{this.onDeleteBlog(element._id)}}>Delete</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            {!(typeof element.viewCount === 'undefined')?
                                                                <>
                                                                    <h5>Total Views = {element.totalView} Number of unique readers = {Object.keys(element.viewCount).length} </h5>
                                                                    <ul>
                                                                        {Object.keys(element.viewCount).map((ip, index) => {
                                                                            return(
                                                                                <li key={index*2 +1}>{ip} : {element.viewCount[ip]} views</li>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                </>
                                                            :null}
                                                            {/* {paragraphArr[i]} */}
                                                        </div>
                                                    </div>
                                                    : null}

                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                                <div className="col-lg-6">
                                    {this.state.blog.map((element, i) => {
                                        return (
                                            <React.Fragment key={i + 287 * i}>
                                                {(i % 2 !== 0) ?
                                                    <div className="card shadow mb-4">
                                                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                            <h6 className="m-0 font-weight-bold text-primary">{element.blogTitle}</h6>
                                                            <div className="dropdown no-arrow">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle id="dropdownMenuLink">
                                                                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item eventKey="h1" onClick={()=>{this.onEditBlog(element._id)}}>Edit</Dropdown.Item>
                                                                        {(element.status === 0) ?
                                                                            <Dropdown.Item eventKey="h1" onClick={()=>{this.onSetBlogStatus(element._id,1)}}>Publish</Dropdown.Item>
                                                                            : null}

                                                                        {(element.status === 1) ?
                                                                            <Dropdown.Item eventKey="h1" onClick={()=>{this.onSetBlogStatus(element._id,0)}}>UnPublish</Dropdown.Item>
                                                                            : null}
                                                                        <Dropdown.Item eventKey="h1" onClick={()=>{this.onDeleteBlog(element._id)}}>Delete</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            {!(typeof element.viewCount === 'undefined')?
                                                                <>
                                                                    <h5>Total Views = {element.totalView} Number of unique readers = {Object.keys(element.viewCount).length} </h5>
                                                                    <ul>
                                                                        {Object.keys(element.viewCount).map((ip, index) => {
                                                                            return(
                                                                                <li key={index*2 +1}>{ip} : {element.viewCount[ip]} views</li>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                </>
                                                            :null}
                                                            {/* {paragraphArr[i]} */}
                                                        </div>
                                                    </div>
                                                    : null}

                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        : null}
                    </>
                :null}
            </>
        )
    }
}
