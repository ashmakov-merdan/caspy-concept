import PinterestGrid from "rc-pinterest-grid/lib/Grid";
import Project from "../Project/Project";
import { useState } from "react";

type ProjectProps = {
    projects: {
        img: string
    }[]
}

const Grid = ({projects}: ProjectProps) => {
    const [ data ] = useState(projects);

    const width = window.innerWidth;
    let imageSize;
    let columns;

    if(width > 1440){
        imageSize = 420;
        columns = 3;
    }
    if(width <= 1440){
        imageSize = 420;
        columns = 3;
    }
    if(width <= 768){
        imageSize = 300
        columns = 2
    }
    if(width <= 540){
        imageSize = 280
        columns = 1
    }

    return (
        <div className="projects">
            <PinterestGrid
                columns={columns}
                columnWidth={imageSize}
                gutterWidth={10}
                gutterHeight={10}
                responsive={width > 1440 ? false : true}
            >
                {
                    data.map((project, index) => {
                        return <Project key={index} image={project.img} index={index}  />
                    })
                }
            </PinterestGrid>
        </div>
    )
};

export default Grid;