import React from 'react';

import './stylesheet/BlogPage.css';
import Header from './Header';
import BlogPost from './BlogPost';

const blogPosts = [
    {
        id: 1,
        title: 'PLAYING WITH PATTERNS',
        date: 'Apr 21, 2023',
        readTime: '1 min',
        image: 'src/assets/design for life.jpg',  // replace with actual image path
        description: 'Create a blog post blurb that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...',
    },
    {
        id: 2,
        title: 'NATALIA\'S APARTMENT MAKEOVER',
        date: 'Apr 21, 2023',
        readTime: '2 min',
        image: 'src/assets/design for life.jpg', // replace with actual image path
        description: 'Create a blog post blurb that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...',
    },
];

const BlogPage = () => {
    return (
        <div className="blog-page">
            <Header />
            <main>
                {blogPosts.map(post => (
                    <BlogPost key={post.id} {...post} />
                ))}
            </main>
        </div>
    );
};

export default BlogPage;