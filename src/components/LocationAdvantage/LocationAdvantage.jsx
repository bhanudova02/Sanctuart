import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiMap, FiSun, FiTrendingUp, FiNavigation2 } from 'react-icons/fi';
import { BsBuildings } from 'react-icons/bs';

const LocationAdvantage = () => {
  const bottomFeatures = [
    {
      icon: <FiClock />,
      line1: "5 Hours from",
      line2: "Hyderabad"
    },
    {
      icon: <FiMap />,
      line1: "Easy Access",
      line2: "via NH-16"
    },
    {
      icon: <FiMapPin />,
      line1: "Well Connected",
      line2: "Cities"
    },
    {
      icon: <FiSun />,
      line1: "Close to",
      line2: "Beaches"
    },
    {
      icon: <FiTrendingUp />,
      line1: "High Appreciation",
      line2: "Potential"
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-[#f6f2ea] border-t border-white/40 overflow-hidden font-sans text-[#1a2332]" id="location">
      
      {/* Decorative Palm Leaves (Top Left & Right) */}
      <div className="absolute top-0 left-0 w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] opacity-[0.03] pointer-events-none z-0 transform -translate-x-1/4 -translate-y-1/4 rotate-180">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#1a2332]">
          <path d="M100,0 C120,40 180,80 200,100 C150,110 120,100 100,150 C80,100 50,110 0,100 C20,80 80,40 100,0 Z" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] opacity-[0.03] pointer-events-none z-0 transform translate-x-1/4 -translate-y-1/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#1a2332]">
          <path d="M100,0 C120,40 180,80 200,100 C150,110 120,100 100,150 C80,100 50,110 0,100 C20,80 80,40 100,0 Z" />
        </svg>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 lg:mb-16 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-[#d4c19c] text-white text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase rounded mb-6 shadow-sm"
          >
            Location Advantage
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4 text-[#1a2332]"
          >
            Perfectly Connected to <span className="text-[#1a2332]">Paradise</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="w-12 h-[1px] bg-[#b7955b]/40"></div>
            <div className="w-2 h-2 rotate-45 bg-[#b7955b]"></div>
            <div className="w-12 h-[1px] bg-[#b7955b]/40"></div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            Luxury living with seamless connectivity to Hyderabad, Vijayawada, Amaravati and Andhra's growing coastal corridor
          </motion.p>
        </div>

        {/* Main Content (Map + Sidebar) */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          
          {/* Left Side - Map Container */}
          <div className="w-full lg:w-[65%] xl:w-[70%] relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[350px] sm:h-[450px] lg:h-full lg:min-h-[550px] bg-[#e6e2da] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#b7955b]/20"
            >
              {/* Map Image Placeholder - User needs to provide the actual map image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#dce5ed] to-[#f8edda] flex flex-col items-center justify-center gap-4 p-8 text-center">
                <FiMapPin className="text-4xl text-[#b7955b] opacity-50" />
                <p className="text-[#1a2332] font-serif text-xl">Map Location Image</p>
                <p className="text-gray-500 text-sm max-w-xs">Please provide the actual map image file to replace this placeholder background.</p>
              </div>

              {/* View on Google Maps Button */}
              <div className="absolute top-6 left-6 z-20">
                <a href="#" className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-lg shadow-lg border border-gray-100 text-sm font-medium text-[#1a2332] hover:bg-white transition-colors group">
                  <div className="w-6 h-6 rounded flex items-center justify-center bg-gray-50 text-[#b7955b]">
                    <FiMapPin className="text-sm" />
                  </div>
                  View on Google Maps
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Connectivity Overview */}
          <div className="w-full lg:w-[35%] xl:w-[30%] relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-[0_8px_40px_rgba(183,149,91,0.08)] border border-white h-full flex flex-col relative overflow-hidden"
            >
              {/* Subtle gradient background for glass effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/20 z-0"></div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-serif text-[#1a2332] mb-8">Connectivity Overview</h3>
                
                {/* Timeline Container */}
                <div className="relative pl-6 flex-grow mb-8 flex flex-col justify-center gap-8">
                  {/* Vertical Line */}
                  <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-gray-100">
                    {/* Active line segment */}
                    <div className="absolute top-[20%] bottom-[30%] w-full bg-[#b7955b]"></div>
                  </div>

                  {/* Step 1: Hyderabad */}
                  <div className="relative group cursor-default">
                    <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-[3px] border-gray-200 z-10 flex items-center justify-center">
                    </div>
                    <div className="bg-white rounded-lg p-4 sm:p-5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-50 flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-2">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100">
                        <BsBuildings className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#1a2332]">Hyderabad</h4>
                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">5 Hours Drive</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Sanctuary By The Beach (Active) */}
                  <div className="relative group cursor-default">
                    <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#b7955b] border-[3px] border-white shadow-md z-10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <div className="bg-gradient-to-r from-[#fdfcf8] to-[#f4ead5] rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-[0_8px_25px_rgba(183,149,91,0.15)] border border-[#b7955b]/30 flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-2">
                      <div className="w-10 h-10 rounded-full bg-[#b7955b] flex items-center justify-center text-white shadow-inner">
                        <FiSun className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#1a2332]">Sanctuary By The Beach</h4>
                        <p className="text-xs sm:text-sm text-[#b7955b] font-medium mt-0.5">Your Private Paradise</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Amaravati, Vijayawada */}
                  <div className="relative group cursor-default">
                    <div className="absolute -left-[27px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-[3px] border-gray-200 z-10 flex items-center justify-center">
                    </div>
                    <div className="bg-white rounded-lg p-4 sm:p-5 shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-gray-50 flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-2">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100">
                        <BsBuildings className="text-xl" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-[#1a2332]">Amaravati, Vijayawada</h4>
                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">1.5 Hours Drive</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Nearby Section */}
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <h4 className="text-sm font-semibold text-[#1a2332] mb-4">Nearby</h4>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <FiMapPin className="text-xs text-[#b7955b]" />
                        <span className="text-xs font-medium">Chirala</span>
                      </div>
                      <span className="text-[10px] text-gray-400 pl-4">20 Minutes</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <FiMapPin className="text-xs text-[#b7955b]" />
                        <span className="text-xs font-medium">Bapatla</span>
                      </div>
                      <span className="text-[10px] text-gray-400 pl-4">30 Minutes</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <FiMapPin className="text-xs text-[#b7955b]" />
                        <span className="text-[11px] font-medium leading-tight max-w-[80px]">Pandurangapuram Beach</span>
                      </div>
                      <span className="text-[10px] text-gray-400 pl-4">5 Minutes</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Features Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 lg:mt-10 bg-white rounded-xl sm:rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] py-5 px-6 lg:px-10 border border-gray-100 relative z-20"
        >
          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-start sm:items-center justify-between gap-6 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
            {bottomFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 lg:gap-4 w-full sm:w-[45%] lg:w-auto pt-4 sm:pt-0 first:pt-0 lg:px-4 xl:px-6 first:lg:pl-0 last:lg:pr-0 group cursor-default">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-sm border border-[#b7955b]/10 flex items-center justify-center text-[#1a2332] text-lg flex-shrink-0 group-hover:scale-110 group-hover:text-[#b7955b] transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <p className="text-[13px] text-[#1a2332] font-bold leading-tight group-hover:text-[#b7955b] transition-colors duration-300">
                    {feature.line1}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-gray-500 font-normal mt-0.5">
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

export default LocationAdvantage;
