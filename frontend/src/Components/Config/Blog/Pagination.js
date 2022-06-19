import React from 'react'

export default function Pagination(props) {
    var totalBlogs = props.totalBlogs
    var currPage = props.currPage
    var pageNum = []
    var startIndex = 1
    var lastIndex  = 4
    var size = 6
    var maxPage = Math.ceil(totalBlogs / size)
    if(maxPage>4 && currPage>4){
        startIndex = currPage - 3
        lastIndex = currPage
        
    }
    if(maxPage<4){
        lastIndex = maxPage
    }
    for (let i = startIndex; i <= lastIndex; i++) {
        pageNum.push(i)
    }      
    return (
        <>
            <li style={{ padding: "0 5px" }}><button onClick={() => { props.getAllBlog(( 1)) }} style={{width:"100px"}} >First Page</button></li>
            <br className="showInMobile"/>
            {(props.currPage === 1) ? null :
                <li style={{ padding: "0 5px" }}><button onClick={() => { props.getAllBlog((currPage - 1)) }} >&lt;</button></li>
            }

            {pageNum.map((page, i) => {
                return (
                    <li className={(props.currPage === page) ? 'active' : null} key={i} style={{ padding: "0 5px" }}><button onClick={() => { props.getAllBlog(page) }}>{page}</button></li>
                )
            })}

            {(props.currPage === maxPage) ? null :
                <li style={{ padding: "0 5px" }}><button onClick={() => { props.getAllBlog((currPage + 1)) }} >&gt;</button></li>
            }
            <br className="showInMobile"/>
            <li style={{ padding: "0 5px" }}><button onClick={() => { props.getAllBlog((maxPage)) }} style={{width:"100px"}} >Last Page</button></li>
            
        </>
    )
}


