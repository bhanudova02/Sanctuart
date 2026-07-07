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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Thin Frame from Reference Image */}
        <div className="relative rounded-[2rem] border border-[#d4af37]/30 p-6 md:p-10 lg:p-12">
            
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Card 1: Land Area */}
              <div className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
                <div className="h-full rounded-lg border border-[#d4af37]/30 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-6 px-2">
                    <div className="flex flex-col items-center">
                      <span className="text-5xl font-serif text-[#e6ca84] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">15</span>
                      <span className="text-lg tracking-widest text-gray-200 mt-1 font-light">ACRES</span>
                    </div>
                    <div className="text-6xl text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-500">
                      <FaCompass />
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent my-4"></div>
                  
                  <p className="text-xs lg:text-sm tracking-[0.15em] text-gray-300 font-light text-center">SPRAWLING LAND AREA</p>
                </div>
              </div>

              {/* Card 2: Plots */}
              <div className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
                <div className="h-full rounded-lg border border-[#d4af37]/30 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-6 px-2">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl lg:text-5xl font-serif text-[#e6ca84] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">200-400</span>
                      <span className="text-lg tracking-widest text-gray-200 mt-1 font-light">SQYDS</span>
                    </div>
                    <div className="text-6xl text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-500">
                      <TbLayoutDashboard />
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent my-4"></div>
                  
                  <p className="text-xs lg:text-sm tracking-[0.15em] text-gray-300 font-light text-center">PREMIUM VILLA PLOTS</p>
                </div>
              </div>

              {/* Card 3: Beach */}
              <div className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
                <div className="h-full rounded-lg border border-[#d4af37]/30 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-6 px-2">
                    <div className="flex flex-col items-center">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-serif text-[#e6ca84] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">5</span>
                        <span className="text-3xl font-serif text-[#e6ca84] ml-1">MIN</span>
                      </div>
                      <span className="text-lg tracking-widest text-gray-200 mt-1 font-light">TO BEACH</span>
                    </div>
                    <div className="text-6xl text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-500">
                      <FaUmbrellaBeach />
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent my-4"></div>
                  
                  <p className="text-xs lg:text-sm tracking-[0.15em] text-gray-300 font-light text-center">COASTAL ACCESSIBILITY</p>
                </div>
              </div>

              {/* Card 4: Clubhouse */}
              <div className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
                <div className="h-full rounded-lg border border-[#d4af37]/30 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-6 px-2">
                    <div className="flex flex-col items-center">
                      <span className="text-5xl font-serif text-[#e6ca84] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">G+1</span>
                      <span className="text-lg tracking-widest text-gray-200 mt-1 font-light">CLUBHOUSE</span>
                    </div>
                    <div className="text-7xl text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-500">
                      <MdOutlineDomain />
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent my-4"></div>
                  
                  <p className="text-xs lg:text-sm tracking-[0.15em] text-gray-300 font-light text-center">STATE-OF-THE-ART CLUBHOUSE</p>
                </div>
              </div>

              {/* Card 5: Amenities */}
              <div className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
                <div className="h-full rounded-lg border border-[#d4af37]/30 p-6 flex flex-col justify-between">
                  <div className="flex flex-col items-center justify-center mb-4 pt-2">
                    <span className="text-3xl font-serif text-[#e6ca84] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] text-center leading-tight">PREMIUM <br/> AMENITIES</span>
                    
                    <div className="flex justify-center items-center gap-3 mt-4">
                      <div className="flex flex-col items-center group/icon">
                        <FaPersonSwimming className="text-xl text-[#d4af37] group-hover/icon:scale-110 transition-transform" />
                        <span className="text-[9px] mt-1 text-gray-300 tracking-wider">POOL</span>
                      </div>
                      <div className="flex flex-col items-center group/icon">
                        <FaDumbbell className="text-xl text-[#d4af37] group-hover/icon:scale-110 transition-transform" />
                        <span className="text-[9px] mt-1 text-gray-300 tracking-wider">GYM</span>
                      </div>
                      <div className="flex flex-col items-center group/icon">
                        <FaTree className="text-xl text-[#d4af37] group-hover/icon:scale-110 transition-transform" />
                        <span className="text-[9px] mt-1 text-gray-300 tracking-wider">PARK</span>
                      </div>
                      <div className="flex flex-col items-center group/icon">
                        <FaCouch className="text-xl text-[#d4af37] group-hover/icon:scale-110 transition-transform" />
                        <span className="text-[9px] mt-1 text-gray-300 tracking-wider">LOUNGE</span>
                      </div>
                      <div className="flex flex-col items-center group/icon">
                        <FaTableTennis className="text-xl text-[#d4af37] group-hover/icon:scale-110 transition-transform" />
                        <span className="text-[9px] mt-1 text-gray-300 tracking-wider">TENNIS</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent my-4"></div>
                  
                  <p className="text-xs lg:text-sm tracking-[0.15em] text-gray-300 font-light text-center">WORLD-CLASS FACILITIES</p>
                </div>
              </div>

              {/* Card 6: Gated Community */}
              <div className="group rounded-xl bg-[#0a1128]/40 backdrop-blur-md border border-[#d4af37]/60 p-[3px] shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 cursor-pointer">
                <div className="h-full rounded-lg border border-[#d4af37]/30 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-6 px-4">
                    <div className="text-6xl text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-500">
                      <GiSecurityGate />
                    </div>
                    <div className="flex flex-col items-center text-center ml-4">
                      <span className="text-3xl lg:text-4xl font-serif text-[#e6ca84] drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] leading-snug">GATED <br/> COMM <br/> UNITY</span>
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent my-4"></div>
                  
                  <p className="text-xs lg:text-sm tracking-[0.15em] text-gray-300 font-light text-center">SECURE & PRIVATE LIVING</p>
                </div>
              </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
