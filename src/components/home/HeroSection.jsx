import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, BookOpen, ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    if (searchCity) params.append('city', searchCity);
    if (searchCategory) params.append('category', searchCategory);
    
    navigate(`/coaching?${params.toString()}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-green-50 via-blue-50 to-green-100 text-gray-900 py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Logo, Tagline, CTA */}
          <div 
            className={`transform transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Logo & Branding */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-3 leading-tight">
                Ghar Baithe
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-4">
                Seekho
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6"></div>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-700 mb-4 font-semibold">
              Ghar Se Guru
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-md">
              Affordable online coaching for every small-town student. Railway • SSC • Banking • Police • Army • NTPC
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => navigate('/coaching')}
                className="px-8 py-3 md:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-base md:text-lg hover:from-green-600 hover:to-green-700 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Find Centers
              </button>
              <button
                onClick={() => navigate('/institute/login')}
                className="px-8 py-3 md:py-4 bg-white border-2 border-blue-500 text-blue-600 rounded-xl font-bold text-base md:text-lg hover:bg-blue-50 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                <ArrowRight size={20} />
                Register Institute
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-gray-200">
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold text-green-600">50K+</p>
                <p className="text-sm md:text-base text-gray-600">Students</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold text-green-600">5+</p>
                <p className="text-sm md:text-base text-gray-600">Coaching Centers</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-bold text-green-600">1200+</p>
                <p className="text-sm md:text-base text-gray-600">Courses</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Search Filter */}
          <div 
            className={`transform transition-all duration-700 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-x-0 translate-y-0' 
                : 'opacity-0 translate-x-10 translate-y-4'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                🔍 Find Your Coaching
              </h3>

              {/* Search Query Input */}
              <div className="relative mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search Course</label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-3.5 text-green-600" size={20} />
                  <input
                    type="text"
                    placeholder="E.g., SSC Preparation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-12 pr-4 py-3 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-gray-800 transition-all"
                  />
                </div>
              </div>

              {/* City Input */}
              <div className="relative mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select City</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3.5 text-green-600" size={20} />
                  <input
                    type="text"
                    placeholder="Your city..."
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    onKeyPress={handleKeyPress}
                    list="cities"
                    className="w-full pl-12 pr-4 py-3 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-gray-800 transition-all"
                  />
                  <datalist id="cities">
                    <option value="Lucknow" />
                    <option value="Kanpur" />
                    <option value="Indore" />
                    <option value="Nagpur" />
                    <option value="Patna" />
                  </datalist>
                </div>
              </div>

              {/* Category Select */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Exam Type</label>
                <div className="relative">
                  <select
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-gray-800 appearance-none transition-all cursor-pointer bg-white"
                  >
                    <option value="">All Exams</option>
                    <option value="Railway">Railway</option>
                    <option value="SSC">SSC</option>
                    <option value="Banking">Banking</option>
                    <option value="Police">Police</option>
                    <option value="Army">Army</option>
                    <option value="NTPC">NTPC</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 text-green-600 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 mb-4"
              >
                <Search size={20} />
                Search Now
              </button>

              {/* Browse Link */}
              <button
                onClick={() => navigate('/coaching')}
                className="w-full py-3 text-green-600 font-semibold hover:text-green-700 hover:bg-green-50 rounded-lg transition-all duration-200"
              >
                Browse All Centers →
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 text-center md:text-left">
              <p className="text-sm text-gray-600 font-medium">✓ Verified Centers  ✓ Expert Teachers  ✓ Affordable Rates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
