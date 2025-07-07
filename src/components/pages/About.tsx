import React from 'react';
import { GraduationCap, Award, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                About Atul Parmar
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm passionate about creating spaces that not only look beautiful but also enhance the way you live. With over 12 years of experience in interior design, I've had the privilege of transforming homes and commercial spaces across India.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My design philosophy centers on the belief that great design is both functional and inspiring. I work closely with each client to understand their unique needs, lifestyle, and aesthetic preferences to create spaces that truly reflect who they are.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5691606/pexels-photo-5691606.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Atul Parmar - Interior Designer"
                className="rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Experience & Credentials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My journey in interior design combines formal education with hands-on experience and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <GraduationCap className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">
                Bachelor of Interior Design from NIFT Mumbai
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Certifications</h3>
              <p className="text-gray-600">
                IIID Certified, Green Building Council Member
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Specialization</h3>
              <p className="text-gray-600">
                Residential Design, Space Planning, Sustainable Design
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-600">
                12+ years working with residential and commercial clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Design Philosophy"
                className="rounded-sm shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">My Design Philosophy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Function First</h3>
                  <p className="text-gray-600">
                    Every design decision is made with functionality in mind. Beautiful spaces should enhance your daily life, not complicate it.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Timeless Elegance</h3>
                  <p className="text-gray-600">
                    I believe in creating spaces that will remain beautiful and relevant for years to come, avoiding trends that quickly become outdated.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Personal Connection</h3>
                  <p className="text-gray-600">
                    Your home should tell your story. I work to understand your personality, lifestyle, and dreams to create spaces that are uniquely yours.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Sustainable Design</h3>
                  <p className="text-gray-600">
                    I prioritize sustainable materials and practices, creating beautiful spaces that are also environmentally responsible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;