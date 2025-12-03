import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Sasti Padhai",
      description: "Budget-friendly courses jo har gareeb student afford kar sake",
      icon: "💰"
    },
    {
      id: 2,
      title: "Ghar Baithe",
      description: "Online classes se aapka travel time aur paise dono bachte hain",
      icon: "🏠"
    },
    {
      id: 3,
      title: "Quality Content",
      description: "Experienced teachers aur certified study material",
      icon: "⭐"
    },
    {
      id: 4,
      title: "Flexible Learning",
      description: "Apne time pe seek sakte ho, koi pressure nahi",
      icon: "⏰"
    },
    {
      id: 5,
      title: "Small Town Friendly",
      description: "Chhote shehar ke students ke liye special support",
      icon: "🌾"
    },
    {
      id: 6,
      title: "Live + Recorded",
      description: "Live classes aur lifetime recorded access dono available",
      icon: "📹"
    }
  ];

  return (
    <section id="why" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Ghar Se Guru?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Everything you need to crack government exams, affordably
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100 hover:border-green-400"
            >
              <div className="text-5xl md:text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 md:p-16 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-bold mb-2">50,000+</p>
              <p className="text-green-50 text-base md:text-lg">Active Students</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-bold mb-2">5</p>
              <p className="text-green-50 text-base md:text-lg">Coaching Centers</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-bold mb-2">1,200+</p>
              <p className="text-green-50 text-base md:text-lg">Courses</p>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-bold mb-2">4.7★</p>
              <p className="text-green-50 text-base md:text-lg">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
