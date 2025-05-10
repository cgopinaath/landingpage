import React from 'react';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    image: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 group">
      <div className="w-full md:w-1/3 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 md:h-32 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
      <div className="w-full md:w-2/3">
        <div className="flex items-center mb-2">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 mr-2">
            {blog.category}
          </span>
          <span className="text-sm text-gray-500">{blog.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-3">{blog.excerpt}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          <span>{blog.readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;