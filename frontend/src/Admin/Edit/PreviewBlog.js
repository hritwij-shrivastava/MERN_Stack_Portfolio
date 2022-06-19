import React, { Component } from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import assetContext from '../../Context/Home/assetContext'

import BlogPage from '../../Components/BlogPage'

class PreviewBlog extends Component {

    static contextType = assetContext
    state={
        blog:{}
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (!this.props.auth.isAuthenticated) {
            window.location.href = "/login"
        }
        else{
            const func =async()=>{
                var id = window.location.pathname.split("/preview/")[1]
                console.log(id)
                var data =  await this.context.getBlogData(id)
                if(data.err){
                    alert(data.err)
                }
                else{
                    this.setState({
                        blog: data
                    })
                }
                
            }

            func()
            
        }
    }
    render() {
        return (
            <BlogPage blog={this.state.blog} />
        )
    }
}


PreviewBlog.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps
)(PreviewBlog);