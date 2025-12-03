import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ravi Kumar",
      role: "Railway exam cleared - Group D",
      location: "Sitapur, UP",
      message: "Ghar Se Guru ne mera sapna pura kiya. Padhai ka kharcha aur travel ka kharcha dono bachaya. Online classes ne meri tayyari ko aasan kar dia.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "IBPS PO selected",
      location: "Darbhanga, Bihar",
      message: "Affordable prices aur quality content. Meri puri family ko isse benefit mila. Teachers bahut helpful the.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Police constable - selected",
      location: "Kanpur, UP",
      message: "Ghar baithe prepare kiya, exam clear kiya. Yeh platform budget-friendly hai aur results-oriented bhi.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 4,
      name: "Anjali Yadav",
      role: "SSC CGL cleared",
      location: "Meerut, UP",
      message: "Chhote shehar se hun lekin yahan quality education mil gayi. Online classes bohot flexible hain.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Hear from students who achieved their dreams with Ghar Se Guru
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100 hover:border-green-400"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(testimonial.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="text-green-200 mb-4" size={36} />

              {/* Message */}
              <p className="text-gray-700 text-base md:text-lg mb-6 italic line-clamp-4 leading-relaxed">
                "{testimonial.message}"
              </p>

              {/* Student Info */}
              <div className="flex items-center pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-green-200"
                />
                <div>
                  <p className="font-bold text-gray-900 text-base">{testimonial.name}</p>
                  <p className="text-sm text-green-600 font-semibold">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">📍 {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
