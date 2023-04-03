import { FC } from "react";
import { ProjectType } from "../../types";
import './Card.css';

export const CardComponent: FC<ProjectType> = ( { imageSrc, projectName, link } ) => {
    return (
        <div className="card">
            <img className="project-image" src={ imageSrc } alt={ projectName } />
            <a className="project-link" href={ link } target="_blank" rel="noopener noreferrer">{ projectName }</a>
        </div>
    );
};