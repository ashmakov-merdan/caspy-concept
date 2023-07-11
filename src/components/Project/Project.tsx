type ProjectProps = {
    image: string,
    index: number
};

const Project = ({image, index}: ProjectProps) => {
    return (
        <div>
            <img src={image} alt={`project-${index}`} />
        </div>
    )
};

export default Project;