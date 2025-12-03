import React from 'react';

const ExamCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Railway",
      icon: "🚂",
      color: "from-blue-500 to-blue-600",
      lightColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-700",
      description: "RRB NTPC, Group D, JE exams",
      courses: "250+ Courses"
    },
    {
      id: 2,
      name: "SSC",
      icon: "📚",
      color: "from-green-500 to-green-600",
      lightColor: "from-green-50 to-green-100",
      textColor: "text-green-700",
      description: "CGL, CHSL, MTS, GD exams",
      courses: "180+ Courses"
    },
    {
      id: 3,
      name: "Banking",
      icon: "🏦",
      color: "from-emerald-500 to-emerald-600",
      lightColor: "from-emerald-50 to-emerald-100",
      textColor: "text-emerald-700",
      description: "IBPS, SBI, RBI exams",
      courses: "220+ Courses"
    },
    {
      id: 4,
      name: "Police",
      icon: "👮",
      color: "from-cyan-500 to-cyan-600",
      lightColor: "from-cyan-50 to-cyan-100",
      textColor: "text-cyan-700",
      description: "State police, CRPF exams",
      courses: "150+ Courses"
    },
    {
      id: 5,
      name: "Army",
      icon: "⚔️",
      color: "from-purple-500 to-purple-600",
      lightColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-700",
      description: "Soldier, JCO, Officer exams",
      courses: "140+ Courses"
    },
    {
      id: 6,
      name: "NTPC",
      icon: "🚄",
      color: "from-pink-500 to-pink-600",
      lightColor: "from-pink-50 to-pink-100",
      textColor: "text-pink-700",
      description: "Non-technical posts",
      courses: "120+ Courses"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Govt Exam Categories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Complete preparation for all major government exams
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group bg-gradient-to-br ${category.lightColor} rounded-2xl p-8 text-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer border border-gray-100 hover:border-gray-200`}
            >
              <div className={`text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300`}>{category.icon}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-green-600 transition-colors">{category.name}</h3>
              <p className="text-gray-700 mb-4 text-base">{category.description}</p>
              <div className="pt-4 border-t border-gray-300">
                <p className="font-semibold text-gray-700">{category.courses}</p>
              </div>
              <div className="mt-4 flex items-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm">Explore Courses</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamCategories;
