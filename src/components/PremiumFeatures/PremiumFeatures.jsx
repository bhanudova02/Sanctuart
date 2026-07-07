import { motion } from "framer-motion";
import {
  FaCompass,
  FaUmbrellaBeach,
  FaPersonSwimming,
  FaDumbbell,
  FaTree,
  FaCouch,
} from "react-icons/fa6";
import { FaTableTennis } from "react-icons/fa";
import { MdOutlineDomain } from "react-icons/md";
import { TbLayoutDashboard } from "react-icons/tb";
import { GiSecurityGate } from "react-icons/gi";

const PremiumFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  };
  return (
    <section className="relative w-full min-h-screen py-24 flex items-center justify-center bg-[#050b14] overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/start.jpeg"
          alt="Ocean Waves"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays to blend with the rest of the site */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-[#050b14]"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Outer Thin Frame from Reference Image */}
        <div className="relative rounded-[2rem] border border-[#d4af37]/30 p-6 md:p-10 lg:p-12">

          {/* Grid Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >

            {/* Card 1: Land Area */}
            <motion.div variants={cardVariants} className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] lg:hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
              <div className="rounded-lg border border-[#d4af37]/30 p-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 w-full mb-3">
                  <div className="text-2xl text-[#e6ca84] border-2 border-[#d4af37]/40 rounded-full p-4 lg:group-hover:bg-[#d4af37]/20 lg:group-hover:border-[#e6ca84] transition-all duration-500 flex-shrink-0">
                    <FaCompass />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-medium text-[#e6ca84] tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] leading-none">15</span>
                    <span className="text-sm tracking-widest text-gray-200 mt-1 font-light">ACRES</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#d4af37]/50 via-[#d4af37]/20 to-transparent my-3"></div>

                <p className="text-xs tracking-widest text-gray-300 font-light text-left uppercase">SPRAWLING LAND AREA</p>
              </div>
            </motion.div>

            {/* Card 2: Plots */}
            <motion.div variants={cardVariants} className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] lg:hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
              <div className="rounded-lg border border-[#d4af37]/30 p-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 w-full mb-3">
                  <div className="text-2xl text-[#e6ca84] border-2 border-[#d4af37]/40 rounded-full p-4 lg:group-hover:bg-[#d4af37]/20 lg:group-hover:border-[#e6ca84] transition-all duration-500 flex-shrink-0">
                    <TbLayoutDashboard />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-medium text-[#e6ca84] tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] leading-none">200-400</span>
                    <span className="text-sm tracking-widest text-gray-200 mt-1 font-light">SQYDS</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#d4af37]/50 via-[#d4af37]/20 to-transparent my-3"></div>

                <p className="text-xs tracking-widest text-gray-300 font-light text-left uppercase">PREMIUM VILLA PLOTS</p>
              </div>
            </motion.div>

            {/* Card 3: Beach */}
            <motion.div variants={cardVariants} className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] lg:hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
              <div className="rounded-lg border border-[#d4af37]/30 p-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 w-full mb-3">
                  <div className="text-2xl text-[#e6ca84] border-2 border-[#d4af37]/40 rounded-full p-4 lg:group-hover:bg-[#d4af37]/20 lg:group-hover:border-[#e6ca84] transition-all duration-500 flex-shrink-0">
                    <FaUmbrellaBeach />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-medium text-[#e6ca84] tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] leading-none">5 MIN</span>
                    <span className="text-sm tracking-widest text-gray-200 mt-1 font-light">TO BEACH</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#d4af37]/50 via-[#d4af37]/20 to-transparent my-3"></div>

                <p className="text-xs tracking-widest text-gray-300 font-light text-left uppercase">COASTAL ACCESSIBILITY</p>
              </div>
            </motion.div>

            {/* Card 4: Clubhouse */}
            <motion.div variants={cardVariants} className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] lg:hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
              <div className="rounded-lg border border-[#d4af37]/30 p-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 w-full mb-3">
                  <div className="text-2xl text-[#e6ca84] border-2 border-[#d4af37]/40 rounded-full p-4 lg:group-hover:bg-[#d4af37]/20 lg:group-hover:border-[#e6ca84] transition-all duration-500 flex-shrink-0">
                    <MdOutlineDomain />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-2xl font-medium text-[#e6ca84] tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] leading-none">G+1</span>
                    <span className="text-sm tracking-widest text-gray-200 mt-1 font-light">CLUBHOUSE</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#d4af37]/50 via-[#d4af37]/20 to-transparent my-3"></div>

                <p className="text-xs tracking-widest text-gray-300 font-light text-left uppercase">STATE-OF-THE-ART CLUBHOUSE</p>
              </div>
            </motion.div>

            {/* Card 5: Amenities */}
            <motion.div variants={cardVariants} className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] lg:hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
              <div className="rounded-lg border border-[#d4af37]/30 p-5 flex flex-col justify-center">
                <div className="flex justify-between items-center w-full mb-3">
                  <div className="flex flex-col text-left">
                    <span className="text-xl font-medium text-[#e6ca84] tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] leading-tight">PREMIUM <br /> AMENITIES</span>
                  </div>
                  <div className="flex flex-wrap justify-end gap-2 max-w-[120px]">
                    <div className="flex flex-col items-center group/icon">
                      <FaPersonSwimming className="text-lg text-[#d4af37] lg:group-hover/icon:scale-110 transition-transform" />
                      <span className="text-[8px] mt-1 text-gray-300 tracking-wider">POOL</span>
                    </div>
                    <div className="flex flex-col items-center group/icon">
                      <FaDumbbell className="text-lg text-[#d4af37] lg:group-hover/icon:scale-110 transition-transform" />
                      <span className="text-[8px] mt-1 text-gray-300 tracking-wider">GYM</span>
                    </div>
                    <div className="flex flex-col items-center group/icon">
                      <FaTree className="text-lg text-[#d4af37] lg:group-hover/icon:scale-110 transition-transform" />
                      <span className="text-[8px] mt-1 text-gray-300 tracking-wider">PARK</span>
                    </div>
                    <div className="flex flex-col items-center group/icon">
                      <FaCouch className="text-lg text-[#d4af37] lg:group-hover/icon:scale-110 transition-transform" />
                      <span className="text-[8px] mt-1 text-gray-300 tracking-wider">LOUNGE</span>
                    </div>
                    <div className="flex flex-col items-center group/icon">
                      <FaTableTennis className="text-lg text-[#d4af37] lg:group-hover/icon:scale-110 transition-transform" />
                      <span className="text-[8px] mt-1 text-gray-300 tracking-wider">TENNIS</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#d4af37]/50 via-[#d4af37]/20 to-transparent my-3"></div>

                <p className="text-xs tracking-widest text-gray-300 font-light text-left uppercase">WORLD-CLASS FACILITIES</p>
              </div>
            </motion.div>

            {/* Card 6: Gated Community */}
            <motion.div variants={cardVariants} className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] lg:hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
              <div className="rounded-lg border border-[#d4af37]/30 p-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 w-full mb-3">
                  <div className="text-2xl text-[#e6ca84] border-2 border-[#d4af37]/40 rounded-full p-4 lg:group-hover:bg-[#d4af37]/20 lg:group-hover:border-[#e6ca84] transition-all duration-500 flex-shrink-0">
                    <GiSecurityGate />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xl font-medium text-[#e6ca84] tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] leading-tight">GATED <br /> COMMUNITY</span>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#d4af37]/50 via-[#d4af37]/20 to-transparent my-3"></div>

                <p className="text-xs tracking-widest text-gray-300 font-light text-left uppercase">SECURE & PRIVATE LIVING</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
