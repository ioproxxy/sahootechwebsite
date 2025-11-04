
import React from 'react';
import { BLOG_POSTS } from '../constants';
import Card from './common/Card';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark">Tech Insights & News</h2>
          <p className="mt-4 text-lg text-gray-600">Stay informed with the latest trends in technology, AI, and cybersecurity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <Card key={index} className="p-0 flex flex-col">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-primary font-semibold mb-2">{post.category}</p>
                <h3 className="text-xl font-semibold text-dark mb-2 flex-grow">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="font-semibold text-secondary hover:underline self-start">
                  Read More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
