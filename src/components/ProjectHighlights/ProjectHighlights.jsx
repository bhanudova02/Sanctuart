import {
  TbBuildingCommunity,
  TbWalk,
  TbRulerMeasure,
  TbBuildingPavilion,
} from "react-icons/tb";

const STATS = [
  {
    icon: TbBuildingCommunity,
    value: "15",
    unit: "Acres",
    description: "Premium Gated Community",
  },
  {
    icon: TbWalk,
    value: "5",
    unit: "Min Walk",
    description: "To The Beach",
  },
  {
    icon: TbRulerMeasure,
    value: "200–400",
    unit: "Sq.Yds",
    description: "Premium Villa Plots",
  },
  {
    icon: TbBuildingPavilion,
    value: "Premium",
    unit: "Clubhouse",
    description: "World Class Amenities",
  },
];

const ProjectHighlights = () => {
  return (
    <section
      id="project-highlights"
      className="w-full relative z-20"
      style={{
        backgroundColor: "var(--color-primary)", // Midnight Navy
        borderTop: "1px solid rgba(51, 184, 200, 0.2)", // Ocean Teal slightly transparent
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ width: "100%" }}
        >
          {STATS.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={stat.description}
                className="flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2 group"
                style={{
                  padding: "60px 32px",
                  borderRight:
                    index < 3 ? "1px solid var(--color-border)" : "none",
                  borderBottom: "none",
                }}
              >
                {/* Icon Box */}
                <div
                  className="flex items-center justify-center transition-all duration-500"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(51, 184, 200, 0.05)",
                    border: "1px solid rgba(51, 184, 200, 0.2)",
                    marginBottom: "24px",
                  }}
                >
                  <StatIcon
                    className="transition-colors duration-500 group-hover:text-white"
                    style={{
                      width: "32px",
                      height: "32px",
                      color: "var(--color-accent)",
                    }}
                  />
                </div>

                {/* Value & Unit */}
                <h3
                  className="font-display flex items-baseline justify-center"
                  style={{ gap: "8px", marginBottom: "12px" }}
                >
                  <span
                    style={{
                      fontSize: "clamp(2rem, 3vw, 2.5rem)",
                      fontWeight: 400,
                      color: "#ffffff",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-body"
                    style={{
                      fontSize: "12px",
                      color: "rgba(51, 184, 200, 0.8)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    {stat.unit}
                  </span>
                </h3>

                {/* Description */}
                <p
                  className="font-body"
                  style={{
                    fontSize: "13px",
                    color: "var(--color-text-secondary)",
                    letterSpacing: "0.08em",
                    lineHeight: 1.6,
                    maxWidth: "200px",
                  }}
                >
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;
