import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostAdd, blogPostListFetch} from "../actions/actions";
import {connect} from "react-redux";
import {requests} from "../agent";

const mapStateToProps = state => ({
   ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostAdd,
    blogPostListFetch
};


class BlogPostListContainer extends React.Component {
    componentDidMount() {
        setTimeout(this.props.blogPostAdd, 5000);
        setTimeout(this.props.blogPostAdd, 10000);
        setTimeout(this.props.blogPostAdd, 15000);
        this.props.blogPostListFetch();
    }

    render() {
        const {posts, isFetching} = this.props;

        return (<BlogPostList posts={posts} isFetching={isFetching} />)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);