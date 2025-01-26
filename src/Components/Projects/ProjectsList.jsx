import ProjectCard from "./ProjectCard";

const ProjectsList = ({projects}) => {    
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
       {projects.map((project, i) => {
        return (
        <ProjectCard 
            key={i} 
            id={project.id} 
            title={project.title} 
            imageSrc={project.imageSrc}
            description={project.description}
            liveUrl={project.liveUrl}
            sourceUrl={project.sourceUrl}
        />
    );
    })
    }  
    </div>
    );
}

export default ProjectsList;