
const ProjectCard = ({title, imageSrc, description, liveUrl, sourceUrl}) => {
    return (
      <div className="w-1/3 mx-auto bg-white rounded-2xl shadow-md overflow-hidden dark:bg-gray-800 dark:shadow-gray-700">
        {/* Project Image */}
        <img
          src={imageSrc}
          alt="Project Thumbnail"
          className="w-full object-contain"
        />
  
        {/* Card Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
           {title}
          </h2>
          <p className="text-m text-gray-800 dark:text-white mb-4">
            {description}
          </p>
  
          {/* Buttons */}
          <div className="flex items-start gap-4 mt-4">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-300 transition duration-300"
            >
              See Live
            </a>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-black text-black bg-white rounded-lg shadow hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 transition duration-300"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;