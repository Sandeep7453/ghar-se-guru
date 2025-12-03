import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Play } from 'lucide-react';

const FeaturedCoachings = () => {
  const [coachings, setCoachings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, this would call the API
    const mockData = [
      {
        id: 1,
        name: "Rapid Success Academy",
        city: "Lucknow",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        rating: 4.8,
        reviews: 342,
        students: 5000,
        categories: ["Railway", "NTPC"]
      },
      {
        id: 3,
        name: "Future Banking Institute",
        city: "Indore",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        rating: 4.9,
        reviews: 421,
        students: 8000,
        categories: ["Banking", "SSC"]
      },
      {
        id: 2,
        name: "Target Govt Academy",
        city: "Kanpur",
        logo: "https://images.unsplash.com/photo-1491841573634-28fb8d56bd21?w=400&h=300&fit=crop",
        rating: 4.7,
        reviews: 287,
        students: 2000,
        categories: ["Police", "Army"]
      },
      {
        id: 4,
        name: "Shakti Study Center",
        city: "Nagpur",
        logo: "https://images.unsplash.com/photo-1491841573634-28fb8d56bd21?w=400&h=300&fit=crop",
        rating: 4.6,
        reviews: 198,
        students: 1500,
        categories: ["Railway", "SSC", "Banking"]
      },
      {
        id: 5,
        name: "Bright Career Academy",
        city: "Patna",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        rating: 4.5,
        reviews: 156,
        students: 1200,
        categories: ["SSC", "Railway"]
      }
    ];
    
    setCoachings(mockData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Coaching Centers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of students across India
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {coachings.map((coaching) => (
            <Link
              key={coaching.id}
              to={`/coaching/${coaching.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-3 border border-gray-100"
            >
              {/* Logo */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-green-100 to-blue-100">
                <img
                  src={coaching.logo}
                  alt={coaching.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition">
                  {coaching.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3 space-x-1">
                  <Star size={18} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-gray-900">{coaching.rating}</span>
                  <span className="text-gray-500 text-sm">({coaching.reviews})</span>
                </div>

                {/* Location */}
                <p className="text-gray-600 text-sm mb-3 font-medium">📍 {coaching.city}</p>

                {/* Categories */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {coaching.categories.slice(0, 2).map((cat, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold hover:bg-green-200 transition"
                    >
                      {cat}
                    </span>
                  ))}
                  {coaching.categories.length > 2 && (
                    <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-semibold">
                      +{coaching.categories.length - 2}
                    </span>
                  )}
                </div>

                {/* Students */}
                <div className="flex items-center text-gray-600 text-sm pt-3 border-t border-gray-100">
                  <Users size={16} className="mr-2 text-green-600" />
                  <span>{coaching.students.toLocaleString()}+ students</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 md:mt-16">
          <Link
            to="/coaching"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 inline-block"
          >
            View All Coaching Centers →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoachings;
