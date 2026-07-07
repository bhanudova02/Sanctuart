const highlights = [
  "5 Min Walk To Beach",
  "G+1 Clubhouse",
  "200–400 Sq.Yds Villa Plots",
  "Just 5 Hours From Hyderabad",
  "15 Acre Gated Community",
  "BAUDA & AP RERA Approved",
];

const TopWaveDivider = ({ className }) => (
  <div className={`absolute left-0 w-full h-[90px] overflow-hidden ${className || ''}`} aria-hidden="true">
    {/* Layer 1: Backmost, sand/gold tone, largest amplitude */}
    <svg
      className="absolute bottom-0 w-[200%] h-full animate-wave-drift-left"
      style={{ animationDuration: '20s' }}
      preserveAspectRatio="none"
      viewBox="0 0 2880 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,49 C130,23 280,67 430,41 C580,18 720,62 880,39 C1030,18 1170,64 1310,41 C1370,32 1410,41 1440,49 C1570,23 1720,67 1870,41 C2020,18 2160,62 2320,39 C2470,18 2610,64 2750,41 C2810,32 2850,41 2880,49 L2880,90 L0,90 Z"
        fill="#C19B76"
        opacity="0.2"
      />
    </svg>
    {/* Layer 2: Middle, cream, medium amplitude */}
    <svg
      className="absolute bottom-0 w-[200%] h-full animate-wave-drift-left"
      style={{ animationDuration: '28s' }}
      preserveAspectRatio="none"
      viewBox="0 0 2880 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,57 C150,33 310,72 470,49 C620,28 770,67 930,46 C1080,28 1220,69 1440,57 C1590,33 1750,72 1910,49 C2060,28 2210,67 2370,46 C2520,28 2660,69 2880,57 L2880,90 L0,90 Z"
        fill="#FBF6EC"
        opacity="0.5"
      />
    </svg>
    {/* Layer 3: Front, solid cream, seals seamlessly */}
    <svg
      className="absolute bottom-0 w-[200%] h-full animate-wave-drift-right"
      style={{ animationDuration: '40s' }}
      preserveAspectRatio="none"
      viewBox="0 0 2880 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,64 C170,44 340,75 510,57 C670,41 820,72 990,57 C1150,41 1300,72 1440,64 C1610,44 1780,75 1950,57 C2110,41 2260,72 2430,57 C2590,41 2740,72 2880,64 L2880,90 L0,90 Z"
        fill="#FBF6EC"
      />
    </svg>
  </div>
);

const BottomWaveDivider = ({ className }) => (
  <div className={`absolute left-0 w-full h-[55px] overflow-hidden ${className || ''}`} aria-hidden="true">
    {/* Layer 1: Backmost, sand/gold tone */}
    <svg
      className="absolute top-0 w-[200%] h-full animate-wave-drift-left"
      style={{ animationDuration: '24s' }}
      preserveAspectRatio="none"
      viewBox="0 0 2880 55"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,19 C80,36 160,11 240,25 C320,38 400,14 480,27 C560,38 640,14 720,25 C800,36 880,11 960,22 C1040,36 1120,14 1200,27 C1280,38 1360,16 1440,19 C1520,36 1600,11 1680,25 C1760,38 1840,14 1920,27 C2000,38 2080,14 2160,25 C2240,36 2320,11 2400,22 C2480,36 2560,14 2640,27 C2720,38 2800,16 2880,19 L2880,0 L0,0 Z"
        fill="#C19B76"
        opacity="0.2"
      />
    </svg>
    {/* Layer 2: Middle, cream */}
    <svg
      className="absolute top-0 w-[200%] h-full animate-wave-drift-left"
      style={{ animationDuration: '32s' }}
      preserveAspectRatio="none"
      viewBox="0 0 2880 55"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,14 C90,30 170,8 260,19 C350,33 430,11 520,22 C610,33 690,11 780,19 C870,30 950,8 1040,19 C1130,30 1210,11 1300,22 C1380,30 1420,14 1440,14 C1530,30 1610,8 1700,19 C1790,33 1870,11 1960,22 C2050,33 2130,11 2220,19 C2310,30 2390,8 2480,19 C2570,30 2650,11 2740,22 C2820,30 2860,14 2880,14 L2880,0 L0,0 Z"
        fill="#FBF6EC"
        opacity="0.5"
      />
    </svg>
    {/* Layer 3: Front, solid cream */}
    <svg
      className="absolute top-0 w-[200%] h-full animate-wave-drift-right"
      style={{ animationDuration: '45s' }}
      preserveAspectRatio="none"
      viewBox="0 0 2880 55"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,11 C100,25 190,5 290,16 C390,27 480,8 580,16 C680,25 770,5 870,14 C970,25 1060,8 1160,16 C1260,25 1350,8 1440,11 C1540,25 1630,5 1730,16 C1830,27 1920,8 2020,16 C2120,25 2210,5 2310,14 C2410,25 2500,8 2600,16 C2700,25 2790,8 2880,11 L2880,0 L0,0 Z"
        fill="#FBF6EC"
      />
    </svg>
  </div>
);

const ProjectHighlights = () => {
  return (
    <div className="relative z-10 bg-[#FBF6EC] flex flex-col">
      <TopWaveDivider className="bottom-full" />

      <div className="overflow-hidden">
        <div className="py-7 project-highlights-marquee flex items-center whitespace-nowrap">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex items-center shrink-0"
              aria-hidden={group > 0}
            >
              {highlights.map((highlight, index) => (
                <div
                  key={`${group}-${index}`}
                  className="flex items-center"
                >
                  <span className="uppercase tracking-widest text-[0.95rem] font-bold text-[#3A2D27]">
                    {highlight}
                  </span>
                  <span className="text-[#C19B76] text-[0.7rem] mx-6">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <BottomWaveDivider className="top-full" />
    </div>
  );
};

export default ProjectHighlights;
