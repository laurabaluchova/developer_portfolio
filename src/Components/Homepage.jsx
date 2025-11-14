import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mt-20  px-4 z-10 relative">
      <p className="text-3xl sm:text-5xl">Hello World,</p>
      <p className="text-4xl sm:text-6xl md:text-7xl font-bold text-center animate-fade-in">
        I am Laura!
      </p>
      <img
        className="w-full h-auto object-contain mt-3 sm:h-90"
        src="lines.svg"
      />
      <p className="text-l m-3 mt-1 max-w-prose text-left mx-auto">
        After two and a half years of experience with UX design and research I
        decided to extend my knowledge and focus on web and app development.
        <br />I have three and a half years of experience in IT field. I made
        various courses dring maternity leaves, worked on own projects and
        participated in various IT projects, e.g. for Česko.Digital or
        non-profit organization SONRISA .
      </p>
      <button
        className="hover:bg-gray-700 bg-black text-white px-4 py-2 rounded m-3 mb-10 cursor-pointer dark:bg-dark-theme-2 dark:text-dark-theme"
        onClick={() => {
          navigate("/projects");
        }}
      >
        Check out my projects
      </button>
    </div>
  );
}

export default Homepage;
