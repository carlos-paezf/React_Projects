import { FC } from "react";
import { PhotoType } from "./types";


export const Photo: FC<PhotoType> = ( { urls, alt_description, likes, user } ) => {
    return (
        <article className="photo">
            <img src={ urls.regular } alt={ alt_description } />

            <div className="photo-info">
                <div>
                    <h4>{ user.name }</h4>
                    <p>{ likes } likes</p>
                </div>

                <a href={ user.portafolio_url }>
                    <img src={ user.profile_image.medium } alt="" className="user-img" />
                </a>
            </div>
        </article>
    );
};