import React from 'react';

const cards = [
  {
    title: "Meta Ads (Facebook, Instagram)",
    description: "Hyper-local targeting (age, location, interests). Engaging carousel, video, and story ads.",
    video: "https://cdn.pixabay.com/video/2022/01/13/104307-665837453_tiny.mp4"
  },
  {
    title: "YouTube Advertising",
    description: "TrueView (skippable), Bumper, Display Ads. Boost brand visibility on the world’s second-largest search engine.",
    image: "https://cdn.pixabay.com/photo/2021/08/01/06/43/youtube-6513651_1280.jpg"
  },
  {
    title: "SEO & Content Marketing",
    description: "Rank #1 on Google. Blogging, infographics, and keyword-rich content to drive organic traffic.",
    image: "https://cdn.pixabay.com/photo/2016/02/19/12/37/seo-1210158_1280.jpg"
  },
  {
    title: "Business Video Production",
    description: "Professional explainer, testimonial, or product videos. Captivate audiences with compelling storytelling.",
    video: "https://cdn.pixabay.com/video/2015/08/08/91-135735330_tiny.mp4"
  },
  {
    title: "Custom Software Solutions",
    description: "ERP, CRM, inventory management, or mobile apps — tailored to streamline your business operations.",
    video: "https://cdn.pixabay.com/video/2019/02/01/21117-315137086_large.mp4"
  }
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
            {card.video ? (
              <video
              loop
              autoPlay
              muted
                src={card.video}
                oncontextmenu="return false;"
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover"></img>
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