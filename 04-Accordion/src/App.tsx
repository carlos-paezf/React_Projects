import { useState } from "react";
import { SingleQuestionComponent } from "./components/SingleQuestionComponent";
import { questionsData } from "./data";

function App () {
    const [ questions, setQuestions ] = useState( questionsData );

    return (
        <main>
            <div className="container">
                <h3>Questions and answers about login</h3>

                <section className="info">
                    {
                        questions.map( ( question ) => <SingleQuestionComponent key={ question.id } { ...question } /> )
                    }
                </section>
            </div>
        </main>
    );
}

export default App;
