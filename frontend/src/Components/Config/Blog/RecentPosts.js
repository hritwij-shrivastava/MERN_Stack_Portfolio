import React, { Component } from 'react'
import { Link } from "react-router-dom"
import moment from 'moment'

export default class RecentPosts extends Component {
    render() {
        return (
            <>
                <aside className="ps-widget ps-widget--popular-posts">
                    <h4 className="ps-widget__heading"><span>Recent Posts</span></h4>
                    <div className="ps-widget__content">
                        {this.props.blogs.map((item, i) => {
                            return (
                                <article className="ps-post ps-post--horizontal small" key={i}>
                                    <div className="ps-post__thumbnail">
                                        <Link className="ps-post__overlay" to={item.url}></Link>
                                        <img src={item.textAreaArray[0]} alt="img" />
                                    </div>
                                    <div className="ps-post__wrapper">
                                        <div className="ps-post__content">
                                            <h4 className="ps-post__title">
                                                <Link to={item.url}>{item.blogTitle}</Link>
                                            </h4>
                                            <div className="ps-post__meta">
                                                <span className="ps-post__posted">{moment(item.date).format('MMM DD, YYYY')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}

                    </div>
                </aside>
            </>
        )
    }
}
