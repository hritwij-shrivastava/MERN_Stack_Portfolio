import React, { Component } from 'react'
import moment from 'moment'

import SyntaxHighlighter from 'react-syntax-highlighter';
import monokai  from 'react-syntax-highlighter/dist/esm/styles/hljs/monokai-sublime';

import '../static/css/blogPage.css'

import BottomNavbar from './Config/BottomNavbar';
import PdfViewer from './Config/BlogPage/PdfViewer';
import TableViewer from './Config/BlogPage/TableViewer';
import PptViewer from './Config/BlogPage/PptViewer';
import LightBox from './Config/LightBox'
import CsvViewer from './Config/BlogPage/CsvViewer';
import ScrollToTop from './Config/ScrollToTop';



export default class BlogPage extends Component {

    state = {
        images: []
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    update = async (images) => {
        await this.setState({
            images: images
        })
        this.child.current.update();
    }


    render() {
        var blog = this.props.blog
        var tagArray = blog.tagArray
        var textAreaArray = blog.textAreaArray

        if (tagArray === '' || tagArray === null || typeof tagArray === "undefined") {
            tagArray = {}
        }
        if (textAreaArray === '' || textAreaArray === null || typeof textAreaArray === "undefined") {
            textAreaArray = {}
        }

        return (
            <>
                <ScrollToTop/>
                <div className="main-wrapperBlog" >
                    <LightBox ref={this.child} images={this.state.images} />
                    <article className="blog-post px-3 py-5 p-md-5" style={{ marginBottom: "50px" }}>
                        <div className="container single-col-max-width">
                            <header className="blog-post-header">
                                <h2 className="title mb-2">{this.props.blog.blogTitle}</h2>
                                <div className="meta mb-3">
                                    <span className="dateBlog" style={{ fontFamily: "sans-serif" }}>Published on {moment(this.props.blog.date).format('DD MMM YYYY')}</span>
                                </div>
                            </header>



                            <div className="blog-post-body">
                                {Object.keys(tagArray).map((position, index) => {
                                    return (
                                        <React.Fragment key={position * index * 6985 + position * 985}>
                                            {(tagArray[position] === "h1") ?
                                                <h1 className="mt-5 mb-3 boldHeading">{textAreaArray[position]}</h1>
                                                : null}

                                            {(tagArray[position] === "h2") ?
                                                <h2 className="mt-5 mb-3 boldHeading">{textAreaArray[position]}</h2>
                                                : null}

                                            {(tagArray[position] === "h3") ?
                                                <h3 className="mt-5 mb-3 boldHeading">{textAreaArray[position]}</h3>
                                                : null}

                                            {(tagArray[position] === "h4") ?
                                                <h4 className="mt-5 mb-3 boldHeading">{textAreaArray[position]}</h4>
                                                : null}

                                            {(tagArray[position] === "h5") ?
                                                <h5 className="mt-5 mb-3 boldHeading">{textAreaArray[position]}</h5>
                                                : null}

                                            {(tagArray[position] === "h6") ?
                                                <h6 className="mt-5 mb-3 boldHeading">{textAreaArray[position]}</h6>
                                                : null}

                                            {(tagArray[position] === "p") ?
                                                <p dangerouslySetInnerHTML={{ __html: textAreaArray[position] }}></p>
                                                : null}

                                            {(tagArray[position] === "code") ?
                                                <>
                                                    <SyntaxHighlighter language={textAreaArray[position][2]} style={monokai}>
                                                        {textAreaArray[position][1]}
                                                    </SyntaxHighlighter>
                                                </>
                                                : null}

                                            {(tagArray[position] === "img") ?
                                                <figure className="blog-banner">
                                                    <a href={textAreaArray[position]} target="_blank" rel="noopener noreferrer">
                                                        <img className="img-fluidBlog" src={textAreaArray[position]} alt="" />
                                                    </a>
                                                </figure>
                                                : null}

                                            {(tagArray[position] === "ul") ?
                                                <ul className="mb-5">
                                                    {Object.keys(textAreaArray[position]).map((li_position, li_index) => {
                                                        return (
                                                            <li className="mb-2" key={li_position * li_index * 98 + li_position}>{textAreaArray[position][li_position]}</li>
                                                        )
                                                    }
                                                    )}
                                                </ul>
                                                : null}

                                            {(tagArray[position] === "ol") ?
                                                <ol className="mb-5">
                                                    {Object.keys(textAreaArray[position]).map((li_position, li_index) => {
                                                        return (
                                                            <li className="mb-2" key={li_position * li_index * 23 + 5 * li_position}>{textAreaArray[position][li_position]}</li>
                                                        )
                                                    }
                                                    )}
                                                </ol>
                                                : null}

                                            {(tagArray[position] === "blockquote") ?
                                                <blockquote className="blockquote m-lg-5 py-3 blogQuoteLined ps-4 px-lg-5">
                                                    <p className="mb-2">{textAreaArray[position][1]}</p>
                                                    <div className="blockquote-footer mt-0">{textAreaArray[position][2]}</div>
                                                </blockquote>
                                                : null}

                                            {(tagArray[position] === "iframe") ?
                                                <div className="ratio ratio-16x9">
                                                    <iframe title="My lec" width="560" height="315" src={textAreaArray[position]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                                                </div>
                                                : null}

                                            {(tagArray[position] === "table") ?
                                                <TableViewer textAreaArray={textAreaArray[position]} />
                                                : null}

                                            {(tagArray[position] === "pdf") ?
                                                <div className="mt-4">
                                                    <PdfViewer pdf={textAreaArray[position]} />
                                                </div>
                                                : null}

                                            {(tagArray[position] === "pptx") ?
                                                <div className="mt-4">
                                                    <PptViewer update={this.update} img={textAreaArray[position]["img"]} />
                                                </div>
                                                : null}

                                            {(tagArray[position] === "csv") ?
                                                <CsvViewer textAreaArray={textAreaArray[position]} />
                                                : null}
                                        </React.Fragment>
                                    )
                                })}
                            </div>




                            <nav className="blog-nav nav nav-justified my-5">
                                <button className="nav-link-prev nav-item nav-link rounded-left" onClick={() => { this.test() }}>Previous
                                    <svg style={{ height: "1em" }} className="svg-inline--fa fa-long-arrow-alt-left fa-w-14 arrow-prev" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path>
                                    </svg>
                                </button>
                                <button className="nav-link-next nav-item nav-link rounded-right" >Next
                                    <svg style={{ height: "1em" }} className="svg-inline--fa fa-long-arrow-alt-right fa-w-14 arrow-next" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                        <path fill="currentColor" d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
                                    </svg>
                                </button>
                            </nav>
                        </div>
                    </article>
                </div >
                <BottomNavbar />
            </>
        )
    }
}
