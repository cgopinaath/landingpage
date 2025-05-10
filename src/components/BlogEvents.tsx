import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import BlogCard from './ui/BlogCard';
import EventCard from './ui/EventCard';

const BlogEvents: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: 'Optimizing Cloud Costs with FinOps Best Practices',
      image: 'https://images.pexels.com/photos/7412089/pexels-photo-7412089.jpeg?auto=compress&cs=tinysrgb&w=1600',
      excerpt:
        'Learn how to implement FinOps practices to reduce cloud spending without compromising performance.',
      date: 'May 15, 2025',
      readTime: '8 min read',
      category: 'FinOps',
    },
    {
      id: 2,
      title: 'Modernizing Legacy Applications: A Step-by-Step Guide',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600',
      excerpt:
        'Discover strategies for transforming legacy systems into modern, cloud-native applications.',
      date: 'May 8, 2025',
      readTime: '10 min read',
      category: 'Application Development',
    },
    {
      id: 3,
      title: 'Securing Multi-Cloud Environments: Best Practices',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600',
      excerpt:
        'Comprehensive strategies to ensure security and compliance across multiple cloud providers.',
      date: 'April 30, 2025',
      readTime: '12 min read',
      category: 'Cloud Security',
    },
  ];

  const events = [
    {
      id: 1,
      title: 'Cloud Innovation Summit 2025',
      date: 'June 15-16, 2025',
      location: 'Virtual Event',
      description:
        'Join industry leaders for discussions on the latest cloud technologies and best practices.',
      type: 'Virtual Conference',
    },
    {
      id: 2,
      title: 'DevOps Transformation Workshop',
      date: 'July 8, 2025',
      location: 'New York, NY',
      description:
        'Hands-on workshop covering CI/CD implementation, container orchestration, and more.',
      type: 'In-Person Workshop',
    },
  ];

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
              <p className="text-lg text-gray-600">
                Stay updated with the latest trends and best practices in technology
              </p>
            </div>
            <div className="space-y-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium"
              >
                View all articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-lg text-gray-600">
                Join us at these events to learn and network with industry experts
              </p>
            </div>
            <div className="space-y-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-6">
                Get the latest updates on technology trends, events, and exclusive content
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogEvents;