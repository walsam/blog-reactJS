import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostList,blogPostAdd} from "../actions/actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
   ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostList,
    blogPostAdd
};


class BlogPostListContainer extends React.Component {
    componentDidMount() {
        setTimeout(this.props.blogPostAdd, 5000);
        setTimeout(this.props.blogPostAdd, 10000);
        setTimeout(this.props.blogPostAdd, 15000);
        this.props.blogPostList();
    }

    render() {
        console.log(this.props.posts);
        return(
            <BlogPostList posts={this.props.posts}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);