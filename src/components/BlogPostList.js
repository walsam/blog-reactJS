import React from 'react';
import timeago from 'timeago.js';
import {Link} from "react-router-dom";
import {Message} from "./Message";
import ImagesContainer from "./ImagesContainer";

class BlogPostList extends React.Component {

    render() {
        const {posts} = this.props;

        if (null === posts || 0 === posts.length) {
            return (<Message message="No blog posts"/>);
        }

        return(
            <div>
                {posts && posts.map(post => (
                    <div className="card mb-3 mt-3 shadow-sm" key={post.id}>
                        <div className="card-body">
                            <h3>
                                <Link to={`/blog-post/${post.id}`}>{post.title}</Link>
                            </h3>
                            <ImagesContainer images={post.images}/>
                            <p className="card-text bordet-top">
                                <small className="text-muted">
                                    {timeago().format(post.published)}
                                </small>
                            </p>
                        </div>
                    </div>
                ))}
                    </div>
        )
    }
}

export default BlogPostList;