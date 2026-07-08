import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiMapPin, 
  FiTrendingUp, 
  FiHome, 
  FiUsers,
  FiShield,
  FiLock,
  FiAward,
  FiStar
} from 'react-icons/fi';

const WhySanctuary = () => {
  const cards = [
    {
      id: 1,
      title: "Limited Beachside Land",
      icon: <FiMapPin className="text-2xl" />,
      description: "A rare opportunity to own premium beachside property in a highly sought-after, exclusive coastal location."
    },
    {
      id: 2,
      title: "Future Appreciation",
      icon: <FiTrendingUp className="text-2xl" />,
      description: "Secure your financial future with a high-growth investment in a rapidly developing luxury corridor."
    },
    {
      id: 3,
      title: "Holiday Home Destination",
      icon: <FiHome className="text-2xl" />,
      description: "Create unforgettable memories in your own private getaway, perfectly designed for ultimate relaxation."
    },
    {
      id: 4,
      title: "Premium Lifestyle Community",
      icon: <FiUsers className="text-2xl" />,
      description: "Join an exclusive neighborhood of like-minded individuals enjoying 5-star resort amenities and serene living."
    }
  ];

  const bottomFeatures = [
    {
      icon: <FiShield />,
      line1: "BAUDA & AP RERA",
      line2: "Approved"
    },
    {
      icon: <FiLock />,
      line1: "100% Clear Title",
      line2: "& Legal Security"
    },
    {
      icon: <FiAward />,
      line1: "Gated Community",
      line2: "with 24/7 Security"
    },
    {
      icon: <FiHome />,
      line1: "Resort-Style Amenities",
      line2: "& Green Spaces"
    },
    {
      icon: <FiTrendingUp />,
      line1: "Smart Investment",
      line2: "for Better Tomorrow"
    }
  ];

  return (
    <section className="relative py-8 lg:py-12 bg-[#fdfcf8] overflow-hidden font-sans text-[#1a2332]" id="why-sanctuary">
      
      {/* Decorative Palm Leaf Watermark (Top Right) */}
      <div className="absolute top-0 right-0 w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] opacity-10 pointer-events-none z-0 transform translate-x-1/3 -translate-y-1/3 lg:translate-x-1/4 lg:-translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#b7955b]">
          <path d="M100,0 C120,40 180,80 200,100 C150,110 120,100 100,150 C80,100 50,110 0,100 C20,80 80,40 100,0 Z" />
        </svg>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-6 lg:mb-8 relative">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#b7955b] font-bold tracking-[0.25em] uppercase text-xs mb-3"
          >
            The Investment
          </motion.p>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-[1px] bg-[#b7955b]/30"></div>
            <div className="w-2.5 h-2.5 rotate-45 bg-[#b7955b]/80 border-2 border-[#fdfcf8]"></div>
            <div className="w-16 h-[1px] bg-[#b7955b]/30"></div>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4"
          >
            <span className="text-[#1a2332]">Why </span>
            <span className="text-[#b7955b] italic">Sanctuary?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            A perfect blend of nature, luxury and future value – your private paradise by the beach.
          </motion.p>
        </div>

        {/* Middle Section (Image + Cards) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10">
          
          {/* Left Side - Large Image */}
          <div className="w-full lg:w-[45%] xl:w-[48%] relative">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[320px] sm:h-[350px] lg:h-full lg:min-h-[450px] rounded-br-[80px] lg:rounded-br-[120px] rounded-tl-[60px] lg:rounded-tl-[80px] overflow-hidden shadow-2xl group"
            >
              <img 
                src="/why-sanctuary/bg.png" 
                alt="Sanctuary Aerial View" 
                className="w-full h-full object-cover"
              />
              
              {/* Glass Card Overlay */}
              <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 sm:left-8 sm:right-8 z-20">
                <div className="backdrop-blur-xl bg-[#1a2332]/85 p-4 sm:p-6 rounded-[16px] sm:rounded-[24px] shadow-2xl flex flex-col gap-2 sm:gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#c8a975] to-[#a27e41] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <FiStar className="text-white text-base sm:text-xl" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-white tracking-wide">A Rare Jewel</h3>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 my-1 hidden sm:block"></div>
                  <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed pr-2 sm:pr-4 hidden sm:block">
                    Discover the perfect harmony of untouched nature and uncompromising luxury.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - 4 Premium Cards Grid */}
          <div className="w-full lg:w-[55%] xl:w-[52%] flex flex-col justify-center py-2 lg:py-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 h-full">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(183,149,91,0.08)] transition-all duration-400 flex flex-col group border border-[#b7955b]/10 hover:border-[#b7955b]/30 cursor-pointer h-full"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdfcf8] border border-[#b7955b]/20 flex items-center justify-center mb-4 sm:mb-6 text-[#b7955b] group-hover:scale-110 group-hover:bg-[#b7955b] group-hover:text-white transition-all duration-500 shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="text-base sm:text-lg xl:text-xl text-[#1a2332] font-serif font-medium mb-3 sm:mb-4 group-hover:text-[#b7955b] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="w-8 sm:w-10 h-[1.5px] bg-[#b7955b]/40 mb-3 sm:mb-5 group-hover:w-12 sm:group-hover:w-16 transition-all duration-500"></div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Features Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 lg:mt-12 bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] py-6 px-6 lg:px-10 border border-gray-100"
        >
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-start sm:items-center justify-between gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
            {bottomFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 w-full sm:w-[45%] lg:w-auto pt-4 sm:pt-0 first:pt-0 lg:px-6 first:lg:pl-0 last:lg:pr-0 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#fdfcf8] border border-[#b7955b]/10 flex items-center justify-center text-[#b7955b] text-xl flex-shrink-0 group-hover:bg-[#b7955b] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <p className="text-[13px] xl:text-sm text-[#1a2332] font-medium leading-tight group-hover:text-[#b7955b] transition-colors duration-300">
                    {feature.line1}
                  </p>
                  <p className="text-[13px] xl:text-sm text-gray-500 font-normal mt-0.5">
                    {feature.line2}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhySanctuary;
