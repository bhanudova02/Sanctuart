import React from 'react';
import { motion } from 'framer-motion';
import { FaUmbrellaBeach } from 'react-icons/fa6';

const Lifestyle = () => {
  return (
    <section className="relative w-full bg-[#eee5d6] pt-12 lg:pt-10 overflow-hidden" id="lifestyle">
      {/* Main Background Image */}
      <img src="/lifestyle/image1.png" alt="Background" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />

      {/* Background Decorative Elements (Keeping them subtle above the bg) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e8dbbf] rounded-full blur-[100px] opacity-40 -translate-y-1/4 translate-x-1/4 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e8dbbf] rounded-full blur-[100px] opacity-40 translate-y-1/4 -translate-x-1/4 pointer-events-none z-0"></div>
      
   
      {/* Sea wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] lg:h-[150px] pointer-events-none z-0 overflow-hidden">
        <img src="/lifestyle/image5.png" alt="Ocean wave" className="absolute bottom-0 left-0 w-full h-full object-cover opacity-90" style={{ minWidth: '100%' }} />
      </div>
      
      {/* Starfish at bottom right */}
      <img src="/lifestyle/image31.png" alt="Starfish" className="absolute bottom-6 lg:bottom-10 right-4 lg:right-8 xl:right-12 w-16 lg:w-20 object-contain z-10 pointer-events-none drop-shadow-lg" />

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-center w-full relative z-10 max-w-[1600px] mx-auto pb-16 lg:pb-12">
        
        {/* Left Column - Image */}
        <div className="w-full lg:w-[50%] relative flex flex-col h-[480px] sm:h-[540px] lg:h-[700px] mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[95%] flex-1 rounded-tr-[80px] rounded-br-[80px] lg:rounded-tr-[120px] lg:rounded-br-[120px] overflow-hidden"
          >
            <img 
              src="/lifestyle/lifestyle-family.png" 
              alt="Family enjoying beachside living" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Glassmorphism Floating Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] lg:w-[85%] max-w-[550px] bg-white/70 backdrop-blur-xl rounded-2xl p-5 sm:p-6 flex justify-around items-center shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-white/60"
          >
            <div className="flex flex-col items-center gap-2">
              <img src="/lifestyle/image9.png" alt="Weekend Getaways" className="h-7 sm:h-9 object-contain" />
              <span className="text-[11px] sm:text-[13px] font-semibold text-[#4a3a2d] text-center leading-tight">Weekend<br/>Getaways</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/lifestyle/image11.png" alt="Family Bonding" className="h-7 sm:h-9 object-contain" />
              <span className="text-[11px] sm:text-[13px] font-semibold text-[#4a3a2d] text-center leading-tight">Family<br/>Bonding</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/lifestyle/image13.png" alt="Sunrise Views" className="h-7 sm:h-9 object-contain" />
              <span className="text-[11px] sm:text-[13px] font-semibold text-[#4a3a2d] text-center leading-tight">Sunrise<br/>Views</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/lifestyle/image15.png" alt="Beachside Living" className="h-7 sm:h-9 object-contain" />
              <span className="text-[11px] sm:text-[13px] font-semibold text-[#4a3a2d] text-center leading-tight">Beachside<br/>Living</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-[50%] px-4 sm:px-8 lg:px-12 xl:pr-20 xl:pl-8 flex flex-col justify-center mt-8 lg:mt-0">
          
          {/* Badge & Dashed Line */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 sm:mb-8 self-end"
          >
            <img src="/lifestyle/image31.png" alt="Star" className="w-5 h-5 object-contain" style={{ filter: 'invert(37%) sepia(21%) saturate(735%) hue-rotate(349deg) brightness(93%) contrast(87%)' }} />
            <div className="bg-[#a87c4f] text-white px-5 py-1.5 rounded-full shadow-md z-10">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">The Lifestyle</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[2.75rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-[#3d3126] mb-4 leading-[1.1] font-serif"
          >
            Live Where Every <br className="hidden sm:block"/> Day Feels Like <br/>
            <span className="text-[#a87c4f] italic font-serif text-[3.25rem] sm:text-[4.5rem] lg:text-[3.75rem] xl:text-[4.25rem] mt-1 block">A Vacation</span>
          </motion.h2>

          {/* Divider Line */}
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-12 h-[2px] bg-[#a87c4f] mb-6 sm:mb-8 origin-left"
          ></motion.div>

          {/* Paragraph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#5c4f42] text-[14px] sm:text-[15px] lg:text-[15px] mb-8 sm:mb-12 leading-relaxed font-medium max-w-lg space-y-5"
          >
            <p>Wake up to the sound of waves, breathe in the ocean air, and spend your days surrounded by natural beauty, comfort, and the people who matter most.</p>
            <p>At Sanctuary by the Beach, life slows down so you can truly live.</p>
          </motion.div>

          {/* 4 Feature Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-2 sm:gap-x-4 mb-10 sm:mb-14"
          >
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#c4b09c] flex items-center justify-center shrink-0 p-2 sm:p-2.5">
                <img src="/lifestyle/image23.png" alt="Beaches" className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold text-[#4a3a2d] text-[11px] sm:text-[14px] leading-snug">5 Min to <br/>Pristine Beaches</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#c4b09c] flex items-center justify-center shrink-0 p-2 sm:p-2.5">
                <img src="/lifestyle/image25.png" alt="Amenities" className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold text-[#4a3a2d] text-[11px] sm:text-[14px] leading-snug">Resort-Style <br/>Amenities</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#c4b09c] flex items-center justify-center shrink-0 p-2 sm:p-2.5">
                <img src="/lifestyle/image27.png" alt="Community" className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold text-[#4a3a2d] text-[11px] sm:text-[14px] leading-snug">Peaceful Gated <br/>Community</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#c4b09c] flex items-center justify-center shrink-0 p-2 sm:p-2.5">
                <img src="/lifestyle/image29.png" alt="Nature" className="w-full h-full object-contain" />
              </div>
              <span className="font-semibold text-[#4a3a2d] text-[11px] sm:text-[14px] leading-snug">Surrounded by <br/>Nature</span>
            </div>
          </motion.div>

          {/* Video / Mini Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-[500px] bg-gradient-to-r from-white/95 to-white/70 backdrop-blur-xl p-3 sm:p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex flex-row gap-3 sm:gap-5 items-center justify-between lg:-ml-6 xl:-ml-10"
          >
            <div className="flex items-center gap-2 sm:gap-4 flex-1 w-full pl-1 sm:pl-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#b3895d] flex items-center justify-center text-[#b3895d] shadow-sm shrink-0">
                <FaUmbrellaBeach className="text-lg sm:text-xl" />
              </div>
              <div>
                <h4 className="text-[#33281f] font-extrabold text-[11px] sm:text-[13px]">It's not just a plot.</h4>
                <p className="text-[#a87c4f] italic font-serif text-[1.1rem] sm:text-[1.6rem] leading-tight my-0.5">It's a lifestyle.</p>
                <p className="text-[9px] sm:text-[11px] text-[#705e4d] font-semibold leading-snug">Build your dream villa.<br className="block sm:hidden" /> Live the life you deserve.</p>
              </div>
            </div>
            <div className="w-[100px] sm:w-[150px] h-[80px] sm:h-[100px] overflow-hidden shrink-0 shadow-inner rounded-r-2xl rounded-l-[30px] sm:rounded-l-[40px]">
              <img src="/lifestyle/lifestyle-chairs.png" alt="Beach chairs at sunrise" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
