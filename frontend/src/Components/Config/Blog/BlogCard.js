import React, { Component } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment'

export default class BlogCard extends Component {
    
    render() {
        var blog = this.props.blog
        var date = "2022-06-08T14:02:47.502+00:00"
        var url = ''
        var blogTitle = ''
        var thumbnail = ''

        if( (typeof blog !=='undefined') && (blog !==null)){
            
            date = blog.date
            url = blog.url
            blogTitle = blog.blogTitle

            if( (typeof blog.textAreaArray !== 'undefined') && (blog.textAreaArray !== null) ){
                thumbnail = blog.textAreaArray[0]
            }
        }
        
        return (
            <>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" >
                    <article className="single-blog">
                        <div className="blog-thumbnail">
                            <Link to={url}>
                                <img src={this.props.webAddress + thumbnail[1]} alt={thumbnail[2]} />
                            </Link>
                            <Link to={url} className="catagory-name" >Blog</Link>
                            <div className="blog-date">
                                <h3>{moment(date).format('DD')}</h3>
                                <span>{moment(date).format('MMM')}</span>
                            </div>
                        </div>
                        <div className="blog-info">
                            <h4 className="author-name">By <Link to={url}>Hritwij Shrivastava</Link></h4>
                            <h3 className="post-title"><Link to={url}>{blogTitle}</Link></h3>
                        </div>
                    </article>
                </div>
            </>
        )
    }
}
