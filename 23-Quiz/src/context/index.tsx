import axios from "axios";
import { ChangeEventHandler, FC, FormEvent, ReactNode, createContext, useContext, useState } from "react";
import { AppContextType, QuizType } from "../types";


const table = {
    sports: 21,
    history: 23,
    politics: 24
};


const API_ENDPOINT = 'https://opentdb.com/api.php?';


const AppContext = createContext<AppContextType>( {
    waiting: true,
    loading: true,
    questions: [],
    index: 0,
    correct: 0,
    error: false,
    isModalOpen: false,
    nextQuestion: () => null,
    checkAnswer: () => null,
    closeModal: () => null,
    quiz: {
        amount: 10,
        category: 'sports',
        difficulty: 'easy'
    },
    handleChange: () => null,
    handleSubmit: () => null
} );


const AppProvider: FC<{ children: ReactNode; }> = ( { children } ) => {
    const [ waiting, setWaiting ] = useState( true );
    const [ loading, setLoading ] = useState( false );
    const [ questions, setQuestions ] = useState( [] );
    const [ index, setIndex ] = useState( 0 );
    const [ correct, setCorrect ] = useState( 0 );
    const [ error, setError ] = useState( false );
    const [ quiz, setQuiz ] = useState<QuizType>( {
        amount: 10,
        category: 'sports',
        difficulty: 'easy',
    } );
    const [ isModalOpen, setIsModalOpen ] = useState( false );

    const fetchQuestions = async ( url: string ) => {
        setLoading( true );
        setWaiting( false );

        const response = await axios( url ).catch( console.log );

        if ( response ) {
            const data = response.data.results;

            if ( data.length > 0 ) {
                setQuestions( data );
                setLoading( false );
                setWaiting( false );
                setError( false );
            } else {
                setWaiting( true );
                setError( true );
            }
        } else {
            setWaiting( true );
        }
    };

    const nextQuestion = () => {
        setIndex( ( oldIndex ) => {
            const index = oldIndex + 1;

            if ( index > questions.length - 1 ) {
                openModal();
                return 0;
            } else {
                return index;
            }
        } );
    };

    const checkAnswer = ( value: boolean | null ) => {
        if ( value ) {
            setCorrect( ( oldState ) => oldState + 1 );
        }
        nextQuestion();
    };

    const openModal = () => {
        setIsModalOpen( true );
    };

    const closeModal = () => {
        setWaiting( true );
        setCorrect( 0 );
        setIsModalOpen( false );
    };

    const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = ( event ) => {
        const name = event.target.name;
        const value = event.target.value;

        setQuiz( { ...quiz, [ name ]: value } );
    };

    const handleSubmit = ( e: FormEvent ) => {
        e.preventDefault();

        const { amount, category, difficulty } = quiz;
        const url = `${ API_ENDPOINT }amount=${ amount }&difficulty=${ difficulty }&category=${ table[ category ] }&type=multiple`;

        fetchQuestions( url );
    };

    return (
        <AppContext.Provider value={ {
            waiting,
            loading,
            questions,
            index,
            correct,
            error,
            isModalOpen,
            nextQuestion,
            checkAnswer,
            closeModal,
            quiz,
            handleChange,
            handleSubmit
        } }>
            { children }
        </AppContext.Provider>
    );
};


export const useGlobalContext = () => {
    return useContext( AppContext );
};


export { AppContext, AppProvider };
