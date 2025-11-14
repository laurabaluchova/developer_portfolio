
const ProjectCard = ({title, imageSrc, description, liveUrl, sourceUrl=""}) => {
    return (
      <div className="mx-auto bg-white rounded-2xl ring overflow-hidden dark:bg-dark-theme dark:shadow-gray-700 z-10 relative">        
        <img
          src={imageSrc}
          alt="Project Thumbnail"
          className="w-full object-contain"
        />
  
        <div className="p-6">          
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
           {title}
          </h2>
          <p className="text-m text-gray-800 dark:text-white mb-4">
            {description}
          </p>  
          
          <div className="flex items-start gap-4 mt-4">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300 dark:bg-dark-theme-2 dark:text-dark-theme"
            >
              See Live
            </a>
            {sourceUrl != "" &&
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-black text-black bg-white rounded-lg shadow hover:bg-gray-700 hover:text-white focus:outline-none focus:ring focus:ring-gray-300 transition duration-300 dark:border-dark-theme-2 dark:bg-dark-theme dark:text-dark-theme-2"
            >
              Source Code
            </a>}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;