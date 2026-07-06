import hero from "../../assets/hero.png";

const ProjectHighlights = () => {
  return (
    <div
      className="relative py-8 p-4 border-6 border-gray-400 border-l-0 border-r-0 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative flex justify-center items-center gap-3">
        <div className="border border-gray-300 p-4 bg-white/90"> 5 Min Walk To Beach</div>
        <div className="border border-gray-300 p-4 bg-white/90">G+1 Clubhouse</div>
        <div className="border border-gray-300 p-4 bg-white/90">200–400 Sq.Yds</div>
        <div className="border border-gray-300 p-4 bg-white/90">Just 5 Hours From Hyderabad</div>
      </div>
    </div>
  );
};

export default ProjectHighlights;
