import React from 'react';

export const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Discover the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      date: "January 15, 2025",
      author: "Stack & Queue Team",
      image: "img/blog/web-development.jpg"
    },
    {
      title: "Building Scalable E-Commerce Solutions",
      excerpt: "Learn about the key principles and technologies behind creating robust e-commerce platforms that grow with your business.",
      date: "January 10, 2025",
      author: "Stack & Queue Team",
      image: "img/blog/ecommerce.jpg"
    },
    {
      title: "Cloud Migration: Best Practices and Strategies",
      excerpt: "A comprehensive guide to successfully migrating your applications to the cloud with minimal downtime and maximum efficiency.",
      date: "January 5, 2025",
      author: "Stack & Queue Team",
      image: "img/blog/cloud-migration.jpg"
    }
  ];

  return (
    <div id="blog" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Blog</h2>
          <p>
            Stay updated with the latest insights, trends, and best practices in technology and software development.
          </p>
        </div>
        
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="blog-content">
              {blogPosts.map((post, index) => (
                <div key={index} className="blog-post">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="blog-image">
                        <img src={post.image} alt={post.title} className="img-responsive" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="blog-details">
                        <h3>{post.title}</h3>
                        <div className="blog-meta">
                          <span className="blog-date">
                            <i className="fa fa-calendar"></i> {post.date}
                          </span>
                          <span className="blog-author">
                            <i className="fa fa-user"></i> {post.author}
                          </span>
                        </div>
                        <p>{post.excerpt}</p>
                        <a href="#" className="btn btn-custom">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="blog-cta">
                <h3>Want to Stay Updated?</h3>
                <p>
                  Subscribe to our newsletter to receive the latest articles, insights, and updates directly in your inbox.
                </p>
                <button className="btn btn-custom">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
