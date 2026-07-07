import { useState, useEffect, useCallback } from "react";
import { HiArrowRight } from "react-icons/hi";

const NAV_LINKS = [
  { label: "About", href: "#why-sanctuary" },
  { label: "Amenities", href: "#clubhouse" },
  { label: "Master Plan", href: "#master-plan" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection(href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white shadow-md py-2 md:py-[14px]"
          : "bg-transparent py-3 md:py-[22px]"
      }`}
      style={{
        borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.04)" : "none",
      }}
    >
      <nav
        className="flex items-center justify-between px-5 md:px-8 lg:px-[60px]"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="block"
          style={{ flexShrink: 0 }}
        >
          <img
            src={isScrolled ? "/logo/logo-color.png" : "/logo/logo-white.png"}
            alt="Sanctuary By The Beach"
            className="w-auto object-contain transition-all duration-500"
            style={{ height: "48px" }}
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center" style={{ gap: "12px" }}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block hover:text-[var(--color-accent)] transition-colors duration-300"
                style={{
                  padding: "8px 18px",
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                  fontWeight: activeSection === link.href ? 500 : 400,
                  color: activeSection === link.href
                    ? isScrolled ? "var(--color-primary)" : "var(--color-accent)"
                    : isScrolled ? "rgba(7,26,46,0.6)" : "rgba(255,255,255,0.7)",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden lg:inline-flex items-center group transition-all duration-500 hover:bg-[var(--color-cta)] hover:border-transparent"
          style={{
            gap: "10px",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            padding: "10px 28px",
            borderRadius: "2px",
            border: isScrolled ? "1px solid rgba(26,26,46,0.2)" : "1px solid rgba(255,255,255,0.4)",
            color: isScrolled ? "rgba(26,26,46,1)" : "rgba(255,255,255,1)",
          }}
        >
          Book Site Visit
          <HiArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-50 p-2"
          style={{
            color: isMobileMenuOpen
              ? "#fff"
              : isScrolled
                ? "#1a1a2e"
                : "#fff",
          }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <div className="relative" style={{ width: "28px", height: "28px" }}>
            <span
              className="absolute left-0 bg-current rounded-full transition-all duration-500"
              style={{
                height: "1.5px",
                width: "24px",
                top: isMobileMenuOpen ? "13px" : "6px",
                transform: isMobileMenuOpen ? "rotate(45deg)" : "none",
              }}
            />
            <span
              className="absolute left-0 bg-current rounded-full transition-all duration-300"
              style={{
                height: "1.5px",
                width: "16px",
                top: "13px",
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              className="absolute left-0 bg-current rounded-full transition-all duration-500"
              style={{
                height: "1.5px",
                width: "24px",
                top: isMobileMenuOpen ? "13px" : "20px",
                transform: isMobileMenuOpen ? "rotate(-45deg)" : "none",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Fullscreen */}
      <div
        className="lg:hidden fixed inset-0 z-40 transition-all duration-500"
        style={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
      >
        {/* Glass Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(7,26,46,0.96)", // Midnight Navy with opacity
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className="relative h-full flex flex-col justify-between"
          style={{ paddingTop: "110px", paddingBottom: "48px", paddingLeft: "32px", paddingRight: "32px" }}
        >
          {/* Nav Links */}
          <nav className="flex-1 flex flex-col justify-center" style={{ marginTop: "-40px" }}>
            <ul>
              {NAV_LINKS.map((link, index) => (
                <li
                  key={link.label}
                  className="transition-all duration-500"
                  style={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? "translateY(0)" : "translateY(24px)",
                    transitionDelay: isMobileMenuOpen ? `${200 + index * 70}ms` : "0ms",
                  }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center justify-between transition-colors duration-300"
                    style={{
                      padding: "16px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      className="font-display font-light group-hover:text-secondary transition-all duration-300"
                      style={{
                        fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                        color: "rgba(255,255,255,0.85)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {link.label}
                    </span>
                    <HiArrowRight
                      className="group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300"
                      style={{ width: "20px", height: "20px", color: "rgba(255,255,255,0.15)" }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA */}
          <div
            className="transition-all duration-500"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(24px)",
              transitionDelay: isMobileMenuOpen ? "750ms" : "0ms",
            }}
          >
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-center hover:opacity-90 transition-all duration-300"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "#071A2E",
                gap: "12px",
                width: "100%",
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "16px",
                borderRadius: "2px",
              }}
            >
              Book Site Visit
              <HiArrowRight style={{ width: "16px", height: "16px" }} />
            </a>
            <p
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: "11px",
                textAlign: "center",
                marginTop: "24px",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Premium Beachside Living
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
