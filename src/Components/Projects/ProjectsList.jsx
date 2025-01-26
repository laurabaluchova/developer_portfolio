import ProjectCard from "./ProjectCard";

const ProjectsList = ({projects}) => {    
    return (
    <div className="flex">
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