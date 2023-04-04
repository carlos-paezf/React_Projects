import { FC, useState } from "react";
import { ProjectType } from "../../types";
import './Card.css';

export const CardComponent: FC<ProjectType> = ( { imageSrc, projectName, link } ) => {
    const [ loaded, setLoaded ] = useState( false );

    return (
        <div className="card">
            <img className={ `project-image ${ !loaded && 'loading-blur' }` } src={ imageSrc } alt={ projectName } onLoad={ () => setLoaded( true ) } />
            <a className="project-link" href={ link } target="_blank" rel="noopener noreferrer">{ projectName }</a>
        </div>
    );
};