import React from 'react';
import BlogPostList from "./BlogPostList";

class BlogPostListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.posts= [
            {
                id: 1,
                title: 'post 1'
            },
            {
                id: 2,
                title: 'post 2'
            }
        ];
    }
    render() {
        return(
            <BlogPostList posts={this.posts}/>
        )
    }
}

export default BlogPostListContainer;