import { FC, useState } from "react";
import { QuestionType } from "../types";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export const SingleQuestionComponent: FC<QuestionType> = ( { title, info } ) => {
    const [ showInfo, setShowInfo ] = useState( false );

    return (
        <article className="question">
            <header>
                <h4>{ title }</h4>

                <button className="btn" onClick={ () => setShowInfo( !showInfo ) }>
                    { showInfo ? <AiOutlineMinus /> : <AiOutlinePlus /> }
                </button>
            </header>

            { showInfo && <p>{ info }</p> }
        </article>
    );
};