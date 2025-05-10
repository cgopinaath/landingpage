import React from 'react';
import { Star } from 'lucide-react';
import ReviewCard from './ui/ReviewCard';

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO, TechCorp',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 5,
      text: 'High Greeves transformed our cloud infrastructure, reducing costs by 35% while improving performance. Their DevOps expertise helped us implement CI/CD pipelines that reduced our deployment time from days to minutes.',
      source: 'Google Reviews',
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'IT Director, FinanceHub',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 5,
      text: 'We partnered with High Greeves for application development, and the results exceeded our expectations. Their team delivered a robust solution on time and within budget. The ongoing support has been exceptional.',
      source: 'Glassdoor',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'COO, RetailPlus',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 4,
      text: 'High Greeves helped us implement a FinOps strategy that optimized our cloud spending across multiple providers. Their team\'s expertise in both financial and technical aspects made a significant impact on our bottom line.',
      source: 'Google Reviews',
    },
  ];

  const stats = [
    { id: 1, value: '98%', label: 'Client Satisfaction' },
    { id: 2, value: '150+', label: 'Successful Projects' },
    { id: 3, value: '30%', label: 'Average Cost Savings' },
    { id: 4, value: '24/7', label: 'Support Coverage' },
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Trusted by organizations of all sizes to deliver exceptional technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="bg-blue-700/50 backdrop-blur-sm rounded-xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-lg mb-8">
            <span className="font-semibold">4.8 out of 5</span> based on over 200 reviews
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Read All Reviews
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              Request a Case Study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;