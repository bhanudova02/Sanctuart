import { HiOutlineGlobeAlt, HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";

const FEATURES = [
  { icon: HiOutlineGlobeAlt, label: "New Website" },
  { icon: HiOutlineLocationMarker, label: "Near Chirala" },
  { icon: HiOutlineClock, label: "Launching Soon" },
];

export default function ComingSoon() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071A2E] px-6 py-16 text-white">
      {/* Subtle Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(7,26,46,0.85) 0%, rgba(7,26,46,0.6) 45%, rgba(7,26,46,0.92) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl text-center">
        <img
          src="/logo/logo-white.png"
          alt="Sanctuary By The Beach"
          className="mx-auto h-16 w-auto object-contain md:h-20"
        />

        {/* Decorative divider */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="block h-px w-16" style={{ backgroundColor: "rgba(201,169,110,0.5)" }} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="rgba(201,169,110,0.7)"
            />
          </svg>
          <span className="block h-px w-16" style={{ backgroundColor: "rgba(201,169,110,0.5)" }} />
        </div>

        <p
          className="font-body mt-6 text-xs uppercase"
          style={{ letterSpacing: "0.25em", color: "rgba(201,169,110,0.9)" }}
        >
          Premium Coastal Villa Plots Near Chirala
        </p>

        <h1 className="font-display mt-5 text-4xl italic text-white sm:text-5xl md:text-6xl">
          Our Beachside Paradise
          <br />
          Is Coming Soon
        </h1>

        <p
          className="font-body mx-auto mt-6 max-w-xl text-sm leading-7 sm:text-base"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Sanctuary is getting ready with a refined digital experience for our
          15 acre gated coastal community, just 300m from the sea.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="border px-5 py-5 backdrop-blur-sm"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                backgroundColor: "rgba(255,255,255,0.06)",
              }}
            >
              <Icon
                className="mx-auto mb-3 h-5 w-5"
                style={{ color: "rgba(201,169,110,0.9)" }}
              />
              <p
                className="font-body text-xs uppercase"
                style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Aquinas Developers. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
