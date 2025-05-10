import React from 'react';
import { Cloud, Code, Terminal, LineChart } from 'lucide-react';
import ServiceCard from './ui/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Services',
      icon: <Cloud className="h-10 w-10 text-blue-500" />,
      description:
        'Comprehensive cloud solutions on AWS, Azure, GCP, and Oracle. We design, migrate, and manage your infrastructure with security and scalability at the forefront.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Managed Services', 'Multi-Cloud Strategy'],
    },
    {
      id: 2,
      title: 'DevOps',
      icon: <Terminal className="h-10 w-10 text-blue-500" />,
      description:
        'Streamline your development pipeline with our DevOps expertise. We implement CI/CD, container orchestration, and automated testing to accelerate your delivery.',
      features: ['CI/CD Implementation', 'Container Orchestration', 'Infrastructure Automation', 'Monitoring & Logging'],
    },
    {
      id: 3,
      title: 'Application Development',
      icon: <Code className="h-10 w-10 text-blue-500" />,
      description:
        'Custom software solutions tailored to your business needs. Our expert developers create scalable, secure, and user-friendly applications across platforms.',
      features: ['Web Applications', 'Mobile Development', 'API Integration', 'Legacy System Modernization'],
    },
    {
      id: 4,
      title: 'FinOps',
      icon: <LineChart className="h-10 w-10 text-blue-500" />,
      description:
        'Optimize your cloud spending with our FinOps approach. We analyze usage patterns, implement cost controls, and provide recommendations to maximize ROI.',
      features: ['Cost Optimization', 'Usage Analysis', 'Budget Management', 'Resource Rightsizing'],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to drive your business forward
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="#solutions"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;