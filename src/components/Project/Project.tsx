type ProjectProps = {
    image: string,
    index: number
};

const Project = ({image, index}: ProjectProps) => {
    return <img src={image} alt={`project-${index}`} />
};

export default Project;