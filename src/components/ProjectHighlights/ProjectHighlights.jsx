const highlights = [
  "5 Min Walk To Beach",
  "G+1 Clubhouse",
  "200–400 Sq.Yds",
  "Just 5 Hours From Hyderabad",
];

const ProjectHighlights = () => {
  return (
    <div className="relative py-8 border-6 border-gray-400 border-l-0 border-r-0 bg-cover bg-center bg-fixed overflow-hidden">
      <div className="project-highlights-marquee relative flex items-center">
        {[0, 1, 2, 3].map((group) => (
          <div
            key={group}
            className="flex items-center gap-8 px-[20vw] shrink-0"
            aria-hidden={group > 0}
          >
            {highlights.map((highlight) => (
              <div
                key={`${group}-${highlight}`}
                className="border border-gray-300 py-4 px-6 bg-white/90 rounded-sm"
              >
                {highlight}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectHighlights;
