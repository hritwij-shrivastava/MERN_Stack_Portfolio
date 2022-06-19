import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../static/css/portfolio.css'
import Pagination from './Config/Blog/Pagination'
import assetContext from '../Context/Home/assetContext'

const MaximumBlogToDisplay = 8
const Type4Portfolio = 2

export default class Portfolio extends Component {
    static contextType = assetContext
    state = {
        blogs: [],
        totalBlogs: 0,
        currPage: 1,
    }

    getAllBlog = async (page) => {
        const data = await this.context.getAllBlog(page,Type4Portfolio,MaximumBlogToDisplay)
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
                    <section className="ftco-section ftco-project" style={{ background: "#ffff", marginTop: "70px", paddingTop: "50px" }}>
                        <div className="container">
                            {((this.state.blogs).length > 0) ?
                                <div className="row">
                                    {(this.state.blogs).map((blog, index) => {
                                        return (
                                            <div className="col-md-4" key={index}>
                                                <div className="project img ftco-animate d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${blog.textAreaArray[0]})` }}>
                                                    <div className="overlay"></div>
                                                    <div className="text text-center p-4">
                                                        <h3><Link to={blog.url}>{blog.blogTitle}</Link></h3>
                                                        <div className="orderingbtn" id="ordering"><Link to={blog.url} style={{ color: "white" }}>LEARN MORE</Link></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                : null}
                            {/* ------------------ Pagination for future req  */}
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
                    </section>
                </div>
            </div>
        </>
        )
    }
}





// import React, { useState, useContext, useEffect } from 'react'


// export default function Portfolio() {
//     const [totalBlogs, setTotalBlogs] = useState(0)
//     const [currPage, setCurrPage] = useState(1)
//     const context = useContext(assetContext);
//     const { webAddress, userdata, getData, getAllBlog } = context;

//     getAllBlog = async (page) => {
//         const data = await this.context.getAllBlog(page)
//         await this.setState({
//             blogs: data.blogs,
//             totalBlogs: data.totalLength,
//             recent: data.recent,
//             popular: data.popular,
//             currPage: page
//         })
//         window.scrollTo(0, 0);
//     }

//     useEffect(() => {
//         if (Object.keys(userdata).length === 0) {
//             getData()
//         }
//     }, []) // eslint-disable-line react-hooks/exhaustive-deps

//     return (
        
//     )
// }
