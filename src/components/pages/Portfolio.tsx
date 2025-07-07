import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'living', name: 'Living Rooms' },
    { id: 'bedroom', name: 'Bedrooms' },
    { id: 'kitchen', name: 'Kitchens' },
    { id: 'bathroom', name: 'Bathrooms' },
    { id: 'office', name: 'Home Offices' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Minimalist Living Room',
      category: 'living',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Clean lines and neutral tones create a serene living space.'
    },
    {
      id: 2,
      title: 'Cozy Master Bedroom',
      category: 'bedroom',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Warm textures and soft lighting for ultimate relaxation.'
    },
    {
      id: 3,
      title: 'Contemporary Kitchen Design',
      category: 'kitchen',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Functional elegance with high-end finishes and smart storage.'
    },
    {
      id: 4,
      title: 'Sophisticated Home Office',
      category: 'office',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Productive workspace with style and comfort in mind.'
    },
    {
      id: 5,
      title: 'Luxury Bathroom Retreat',
      category: 'bathroom',
      image: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Spa-like atmosphere with natural materials and clean design.'
    },
    {
      id: 6,
      title: 'Scandinavian Living Space',
      category: 'living',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Light woods and whites create an airy, welcoming atmosphere.'
    },
    {
      id: 7,
      title: 'Elegant Bedroom Suite',
      category: 'bedroom',
      image: 'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Luxurious fabrics and sophisticated color palette.'
    },
    {
      id: 8,
      title: 'Chef\'s Kitchen Paradise',
      category: 'kitchen',
      image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Professional-grade appliances in a beautiful, functional layout.'
    },
    {
      id: 9,
      title: 'Creative Home Studio',
      category: 'office',
      image: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Inspiring workspace that encourages creativity and focus.'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const totalImages = filteredProjects.length;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex === 0 ? totalImages - 1 : currentIndex - 1);
    } else {
      setSelectedImage(currentIndex === totalImages - 1 ? 0 : currentIndex + 1);
    }
  };

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore a collection of my recent projects, each one a unique reflection of my clients' personalities and lifestyle needs.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
            
            <img
              src={filteredProjects[selectedImage].image}
              alt={filteredProjects[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <h3 className="text-xl font-medium mb-2">{filteredProjects[selectedImage].title}</h3>
              <p className="text-sm">{filteredProjects[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;