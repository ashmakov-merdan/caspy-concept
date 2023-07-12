import Project from "../Project/Project";
import { useState } from "react";
import "./grid.scss";

type ProjectProps = {
    projects: {
        img: string
    }[]
}

const Grid = ({projects}: ProjectProps) => {
  const [ data ] = useState(projects);

  return (
    <div className="projects">
        {
          data.map((project, index) => {
              return <Project key={index} image={project.img} index={index}  />
          })
        }
    </div>
  )
};

export default Grid;