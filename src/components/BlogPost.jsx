import React from 'react';
import './stylesheet/BlogPost.css';


const BlogPost = ({ title, date, readTime, description, image }) => {
    return (
        <div className="blog-post">
            <img src={image} alt={title} className="blog-image" />
            <div className="blog-content">
                <h2>{title}</h2>
                <p className="blog-meta">{date} - {readTime}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlogPost;