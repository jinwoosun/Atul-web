import React from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

interface HomeProps {
  onSectionChange: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            Crafting Beautiful,
            <br />
            <span className="font-normal">Functional Spaces</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Transform your home into a sanctuary that reflects your unique style and enhances your daily life.
          </p>
          <button
            onClick={() => onSectionChange('portfolio')}
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-sm hover:bg-gray-100 transition-colors duration-300 group"
          >
            View Portfolio
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-2">200+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Star className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-2">5.0</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Creating Spaces That Tell Your Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over a decade of experience in interior design, I believe that every space should be a reflection of the people who inhabit it. My approach combines timeless elegance with modern functionality to create environments that are both beautiful and livable.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From concept to completion, I work closely with my clients to understand their vision and bring it to life through thoughtful design choices that enhance their daily experience.
              </p>
              <button
                onClick={() => onSectionChange('about')}
                className="inline-flex items-center px-6 py-3 border border-amber-600 text-amber-600 font-medium rounded-sm hover:bg-amber-600 hover:text-white transition-colors duration-300"
              >
                Learn More About Me
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Interior Design Studio"
                className="rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;