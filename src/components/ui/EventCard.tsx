import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    type: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 mr-2">
            {event.type}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center text-gray-700">
            <Calendar className="h-4 w-4 text-blue-500 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin className="h-4 w-4 text-blue-500 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a
            href="#"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;