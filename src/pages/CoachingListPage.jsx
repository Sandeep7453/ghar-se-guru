import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Users, Filter, MapPin, BookOpen } from 'lucide-react';

const CoachingListPage = () => {
  const [coachings, setCoachings] = useState([]);
  const [filteredCoachings, setFilteredCoachings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    city: searchParams.get('city') || '',
    category: searchParams.get('category') || '',
    search: searchParams.get('search') || '',
    minRating: 0
  });

  useEffect(() => {
    // Mock data
    const mockCoachings = [
      {
        id: 1,
        name: "Rapid Success Academy",
        city: "Lucknow",
        state: "Uttar Pradesh",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        rating: 4.8,
        reviews: 342,
        students: 5000,
        categories: ["Railway", "NTPC"],
        subjects: ["Maths", "English", "Reasoning", "General Awareness"],
        description: "Best coaching for Railway & NTPC exams"
      },
      {
        id: 2,
        name: "Target Govt Academy",
        city: "Kanpur",
        state: "Uttar Pradesh",
        logo: "https://images.unsplash.com/photo-1491841573634-28fb8d56bd21?w=400&h=300&fit=crop",
        rating: 4.7,
        reviews: 287,
        students: 2000,
        categories: ["Police", "Army"],
        subjects: ["Physical Fitness", "Reasoning", "General Awareness"],
        description: "Expert training for Police & Army recruitment"
      },
      {
        id: 3,
        name: "Future Banking Institute",
        city: "Indore",
        state: "Madhya Pradesh",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        rating: 4.9,
        reviews: 421,
        students: 8000,
        categories: ["Banking", "SSC"],
        subjects: ["Quantitative Aptitude", "English", "Reasoning"],
        description: "Specialized banking & SSC coaching"
      },
      {
        id: 4,
        name: "Shakti Study Center",
        city: "Nagpur",
        state: "Maharashtra",
        logo: "https://images.unsplash.com/photo-1491841573634-28fb8d56bd21?w=400&h=300&fit=crop",
        rating: 4.6,
        reviews: 198,
        students: 1500,
        categories: ["Railway", "SSC", "Banking", "Police"],
        subjects: ["Maths", "English", "Reasoning", "General Awareness"],
        description: "One-stop solution for all government exams"
      },
      {
        id: 5,
        name: "Bright Career Academy",
        city: "Patna",
        state: "Bihar",
        logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        rating: 4.5,
        reviews: 156,
        students: 1200,
        categories: ["SSC", "Railway"],
        subjects: ["Maths", "English", "Reasoning", "General Awareness"],
        description: "Budget-friendly SSC & Railway coaching"
      }
    ];

    setCoachings(mockCoachings);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = coachings;

    // Apply filters
    if (filters.city) {
      filtered = filtered.filter(c =>
        c.city.toLowerCase().includes(filters.city.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter(c =>
        c.categories.includes(filters.category)
      );
    }

    if (filters.search) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        c.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.minRating > 0) {
      filtered = filtered.filter(c => c.rating >= filters.minRating);
    }

    setFilteredCoachings(filtered);
  }, [filters, coachings]);

  const cities = [...new Set(coachings.map(c => c.city))];
  const categories = ['Railway', 'SSC', 'Banking', 'Police', 'Army', 'NTPC'];

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <main className="main-content bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Find Your Perfect Coaching Center
          </h1>
          <p className="text-xl text-gray-600">
            {filteredCoachings.length} coaching centers found
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Filter size={24} className="mr-2" />
              Filters
            </h2>

            {/* Search */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Coaching name..."
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            {/* City Filter */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                <MapPin size={18} className="inline mr-2" />
                City
              </label>
              <select
                value={filters.city}
                onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                <BookOpen size={18} className="inline mr-2" />
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-3">
                <Star size={18} className="inline mr-2 text-yellow-400" />
                Minimum Rating
              </label>
              <select
                value={filters.minRating}
                onChange={(e) => setFilters({ ...filters, minRating: parseFloat(e.target.value) })}
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option value="0">All Ratings</option>
                <option value="4">4.0+</option>
                <option value="4.5">4.5+</option>
                <option value="4.7">4.7+</option>
              </select>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => setFilters({ city: '', category: '', search: '', minRating: 0 })}
              className="w-full py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Clear Filters
            </button>
          </div>

          {/* Coaching List */}
          <div className="lg:col-span-3">
            {filteredCoachings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCoachings.map((coaching) => (
                  <Link
                    key={coaching.id}
                    to={`/coaching/${coaching.id}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={coaching.logo}
                        alt={coaching.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                        {coaching.name}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4">
                        {coaching.description}
                      </p>

                      {/* Location */}
                      <p className="text-gray-700 font-medium mb-3">
                        📍 {coaching.city}, {coaching.state}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center mb-3 space-x-1">
                        <Star size={18} className="text-yellow-400 fill-yellow-400" />
                        <span className="font-bold text-gray-900">{coaching.rating}</span>
                        <span className="text-gray-500 text-sm">({coaching.reviews} reviews)</span>
                      </div>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {coaching.categories.slice(0, 2).map((cat, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-semibold"
                          >
                            {cat}
                          </span>
                        ))}
                        {coaching.categories.length > 2 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{coaching.categories.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Students */}
                      <div className="pt-4 border-t flex items-center text-gray-600">
                        <Users size={16} className="mr-2" />
                        <span className="text-sm">{coaching.students.toLocaleString()}+ students</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <p className="text-2xl text-gray-600 mb-4">No coaching centers found</p>
                <p className="text-gray-500 mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setFilters({ city: '', category: '', search: '', minRating: 0 })}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoachingListPage;
