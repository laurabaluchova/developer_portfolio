import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

    return (
       <div className="flex flex-col items-center justify-center mt-20  px-4">
  <p className="text-3xl sm:text-5xl">Hello World,</p>
  <p className="text-4xl sm:text-6xl md:text-7xl font-bold text-center animate-fade-in">
    I am Laura!
  </p>
  <img className="w-full h-auto object-contain mt-3 sm:h-90" src="lines.svg"/>
 < p className="text-l m-3 mt-1 max-w-prose text-center mx-auto">
             After two and a half years of experience with UX design and research I decided to extend my knowledge and focus on frontend development with React.

With previous IT experience during internship at PwC and at the university on certain courses, I am looking forward to start with frontend development in practice.

I am currently on maternity leave and open to discussion about entry-level job with time flexibility. 
</p>
<button className="bg-black text-white px-4 py-2 rounded m-3 mb-10 cursor-pointer dark:bg-dark-theme-2 dark:text-dark-theme" onClick={() => {
    navigate("/projects"); 
  }}>Check out my projects</button>

  
</div>

    )
};

export default Homepage;