import React, { Component } from 'react'

import assetContext from '../Context/Home/assetContext'
import '../static/css/blog.css'

import SmallCard from './Config/Blog/SmallCard'
import BlogCard from './Config/Blog/BlogCard'
import Pagination from './Config/Blog/Pagination'
import RecentPosts from './Config/Blog/RecentPosts'

const MaximumBlogToDisplay = 6
const Type4Blog = 1

export class Blog extends Component {
  static contextType = assetContext

  state = {
    blogs: [],
    totalBlogs: 0,
    currPage: 1,
    recent: [],
    popular: []
  }

  getAllBlog = async (page) => {
    const data = await this.context.getAllBlog(page,Type4Blog,MaximumBlogToDisplay)
    await this.setState({
      blogs: data.blogs,
      totalBlogs: data.totalLength,
      recent: data.recent,
      popular: data.popular,
      currPage: page
    })
    window.scrollTo(0, 0);
  }

  componentDidMount = async () => {

    if (Object.keys(this.context.userdata).length === 0) {
      await this.context.getData()
    }
    this.getAllBlog(1)

  } // eslint-disable-line react-hooks/exhaustive-deps

  render() {
    return (
      <>
        <div className="firstcontainer">
          <div style={{ background: "#ffff", padding: "1px" }}>
            <div className="container">
              <section className="ps-blog--sidebar">
                <div className="ps-section__left">
                  <div className="ps-section__items">
                    <div className="ps-blog--post-items">
                      <div className="ps-post-items">

                        {((this.state.blogs).length > 0) ?
                          <div className="row">
                            {(this.state.blogs).map((blog, index) => {
                              return (
                                <BlogCard key={index} blog={blog} />
                              )
                            })}

                          </div>
                          : null}
                        <div className="row mt-5">
                          <div className="col text-center" style={{ marginBottom: "25px" }}>
                            <div className="block-27">
                              <ul>
                                <Pagination getAllBlog={this.getAllBlog} totalBlogs={this.state.totalBlogs} currPage={this.state.currPage} />
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ps-section__right">
                  <div className="ps-sidebar ps-sidebar--home">
                    <aside className="ps-widget ps-widget--search">
                      <form method="get">
                        <div className="form-group"><input className="form-control" placeholder="Enter your keyword?" />
                          <button aria-label="search-btn">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                              <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
                            </svg>
                          </button>
                        </div>
                      </form>
                    </aside>

                    <SmallCard blogs={this.state.popular} />
                    <RecentPosts blogs={this.state.recent} />



                    <aside className="ps-widget ps-widget--follow-me">
                      <h4 className="ps-widget__heading"><span>Follow Me</span></h4>
                      <div className="ps-widget__content">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/hritwij.shrivastava/">Facebook</a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hritwij/">Linkedin</a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCXb45TeeuSM_OYDY-UN6WCQ">Youtube</a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hritwij_shrivastava/">Instagram</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/hritwij-shrivastava">Github</a>
                        <a target="_blank" rel="noreferrer" href="https://www.kaggle.com/hritwij">Kaggle</a>
                      </div>
                    </aside>
                  </div>
                </div>
              </section>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default Blog