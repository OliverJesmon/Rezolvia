import React from 'react';

const cards = [
  {
    title: "Web Development",
    description: "Building responsive, fast, and user-friendly websites with modern designs.",
    image:'/src/assets/Webdev.jpg'
  }, 
  {
    title: "UI/UX Website Designs",
    description: "Enhance user experiences with elegant and intuitive designs.",
    image:'/src/assets/UIdesign.jpg'
  },
  {
    title: "E-Commerce Solutions",
    description: "Boost your business with scalable online store solutions.",
    image:'/src/assets/Ecom.jpg'
  }, 
  {
    title: "Rezolvia Digital Media",
    description: "Promote your brand effectively through SEO, social media, and targeted campaigns.",
    image:'/src/assets/DigitalMedia.jpg'
  },
];

function Services() {
  return (
    <section className="w-full py-12 px-4" id='services'>
      <h2 className="text-4xl font-geometric sans-serif text-left ml-20 mb-10 text-red-700">Our <span className="font-semibold text-white">Services</span></h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transition-all duration-300 ease-in-out rounded-2xl overflow-hidden shadow-xl h-64 group-hover:opacity-90 transition-transform duration-500"
          >
            {card.image ? (
              <img
                src={card.image}
                oncontextmenu="return false;"
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 hover:scale-110 hover:opacity-90 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
            )}
            <div className={`absolute bottom-0 left-0 w-full p-6 text-white z-10`}>
            
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;