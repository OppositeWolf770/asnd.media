

interface ProjectProps {
    img: string;
    name: string;
}

const ProjectItem: React.FC<ProjectProps> = ({img, name}) => {
    return (
        <>
        <div className="Project">
            <img src={img} alt="" className="Project-Image"></img>
            <div className="Project-Name">{name}</div>
        </div>
        </>
    )
}

export default ProjectItem