import { ChangeEventHandler, FormEvent } from "react";


export type AppContextType = {
    waiting: boolean;
    loading: boolean;
    questions: QuestionType[];
    index: number;
    correct: number;
    error: boolean;
    isModalOpen: boolean;
    quiz: QuizType;
    nextQuestion: () => void;
    checkAnswer: ( value: boolean | null ) => void;
    closeModal: () => void;
    handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    handleSubmit: ( event: FormEvent ) => void;
};


export type QuestionType = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[];
};


export type QuizType = {
    amount: number;
    category: 'sports' | 'history' | 'politics';
    difficulty: 'easy' | 'medium' | 'hard';
};