import React, {useContext, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import assetContext from '../Context/Home/assetContext'
import BlogPage from './BlogPage'

export default function BlogRedirect() {
    
    const context = useContext(assetContext);
    const {blog,getBlogPage} = context

    const navigate = useNavigate();
    const location = useLocation();
    const url = location.pathname
    

    const { id } = useParams();

    function isValidBlogId(id) {

        if (id === "" || id === null || (typeof id === "undefined")) {
            return false;
        }
        else {
            if (id.match(/^[0-9]{7,12}$/)) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    var checkId = isValidBlogId(id)

    useEffect(() => {
        var data = ""

        const func = async() =>{
            if (checkId) {
                var parm = url.split(`/read/${id}`)[1]

                // If id is valid and parameter contain only id then check if blog with given id is present in database or not
        
                if ((parm === '') || (parm === "/")) {
    
                    data = await getBlogPage(id)
                    if(data.err){

                        // error means blog with given id is not present in database
                        console.log(data.err)

                        // then redirect to blog 
                        navigate({
                            pathname: '/blog',
                        });
                    }
                    else{
                        navigate({
                            pathname: `${data.url}`,
                        });
                    }
                    
                }
                else {
                    
                    data = await getBlogPage(id)
                    if(data.err){

                        // error means blog with given id is not present in database
                        console.log(data.err)

                        // then redirect to blog 
                        navigate({
                            pathname: '/blog',
                        });
                    }
                    else{
                        // if url is not same as blog url in data base then redirect url to correct blogpage using id
                        if(url !== data.url){
                            navigate({
                                pathname: `${data.url}`,
                            });
                        }
                        else{
                            console.log("Happy Blogging")
                        }
                        
                    }
                }
            }
            else {
                // Not valid id then redirect to blog
        
                navigate({
                    pathname: '/blog',
                });
            }
        }

        func()
        
        

    }, [])// eslint-disable-line react-hooks/exhaustive-deps




    return (
        <BlogPage blog={blog}/>
    )
}
