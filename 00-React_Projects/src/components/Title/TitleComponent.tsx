import { FC } from "react";
import './Title.css';

type Props = {
    title: string;
};

export const TitleComponent: FC<Props> = ( { title } ) => {
    return (
        <div className="title">
            <h1>{ title }</h1>
            <span className="divider"></span>
        </div>
    );
};