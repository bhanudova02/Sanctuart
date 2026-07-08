import { useState, useEffect } from "react";
import { HiArrowRight, HiOutlineDownload } from "react-icons/hi";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden" style={{ height: "100vh" }}>
      {/* Video Background */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ transform: "scale(1.02)" }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Hero Content */}
      <div
        className="relative h-full flex flex-col items-center justify-center"
        style={{ zIndex: 10, padding: "0 24px" }}
      >
        <div className="text-center" style={{ maxWidth: "900px", marginTop: "40px" }}>
          {/* Main Heading */}
          <h1 className="font-display" style={{ lineHeight: 1 }}>
            <span
              className="block text-white"
              style={{
                fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)",
                fontWeight: 400,
                fontStyle: "italic",
                letterSpacing: "0.01em",
              }}
            >
              Sanctuary
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(1.3rem, 3.2vw, 2.4rem)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.06em",
                marginTop: "8px",
              }}
            >
              By The Beach
            </span>
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center" style={{ gap: "16px", marginTop: "28px" }}>
            <span style={{ display: "block", width: "80px", height: "1px", backgroundColor: "rgba(201,169,110,0.5)" }} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
                fill="rgba(201,169,110,0.6)"
              />
            </svg>
            <span style={{ display: "block", width: "80px", height: "1px", backgroundColor: "rgba(201,169,110,0.5)" }} />
          </div>

          {/* Subheading */}
          <div style={{ marginTop: "28px" }}>
            <p
              className="font-body"
              style={{
                fontSize: "clamp(13px, 1.8vw, 16px)",
                color: "rgba(255,255,255,0.95)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 400,
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              Own Your Beachside Paradise
            </p>
            <p
              className="font-body"
              style={{
                fontSize: "clamp(11px, 1.4vw, 14px)",
                color: "rgba(255,255,255,0.75)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 400,
                marginTop: "12px",
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              Premium Coastal Villa Plots Near Chirala
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center"
            style={{ marginTop: "44px", gap: "16px" }}
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center transition-all duration-500 w-full sm:w-auto"
              style={{
                gap: "14px",
                backgroundColor: "rgba(255,255,255,0.9)",
                color: "#1a1a2e",
                fontSize: "12px",
                fontWeight: 500,
                fontFamily: "var(--font-body)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "16px 44px",
                borderRadius: "2px",
              }}
            >
              Book Site Visit
              <HiArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA */}
            <a
              href="/brochure/Sanctuary-Brochure.pdf"
              download="Sanctuary-Brochure.pdf"
              className="group inline-flex items-center justify-center transition-all duration-500 w-full sm:w-auto hover:bg-white/10"
              style={{
                gap: "14px",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,1)",
                fontSize: "12px",
                fontWeight: 400,
                fontFamily: "var(--font-body)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "16px 44px",
                borderRadius: "2px",
              }}
            >
              Download Brochure
              <HiOutlineDownload className="w-4 h-4 transition-transform duration-500 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
