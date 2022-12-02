import React from "react";
import {nanoid} from 'nanoid';

type Answer = {
    Answer: string,
    id: string,
    isAnswerCorrect: Boolean,
}

export type QuestionType = {
    TextQuestion: string,
    Time: number,
    Answers: Answer[],
    CorrectAnswers: Boolean[],
    id: string,
    isRadioForm: Boolean,
}

export const questionsSlovakiaMock : QuestionType[] = [
    {
        TextQuestion: 'Какое население у Словакии?',
        Time: 60,
        Answers: [{Answer: '5,447 миллиона', isAnswerCorrect: true, id: nanoid()},
            {Answer: '3,221 миллиона', isAnswerCorrect: false, id: nanoid()},
            {Answer: '4,366 миллиона', isAnswerCorrect: false, id: nanoid()},
            {Answer: '6,633 миллиона', isAnswerCorrect: false, id: nanoid()}
        ],
        CorrectAnswers: [true, false, false, false],
        id: '1',
        isRadioForm: true,
    },

    {
        TextQuestion: 'С какими странами граничит столица Словакии?',
        Time: 60,
        Answers:
            [{Answer: 'Австрия, Чехия', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Польша, Австрия, Чехия', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Польша, Венгрия', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Австрия, Венгрия', isAnswerCorrect: true, id: nanoid()},
            ],
        CorrectAnswers: [false, false, false, true],
        id: '2',
        isRadioForm: true
    },

    {
        TextQuestion: 'Дата наступления независимости Словакии?',
        Time: 60,
        Answers:
            [{Answer: '2 апреля 1991', isAnswerCorrect: false, id: nanoid()},
                {Answer: '1 января 1993 года', isAnswerCorrect: true, id: nanoid()},
                {Answer: '2 февраля 1992', isAnswerCorrect: false, id: nanoid()},
                {Answer: '26 декабря 1991', isAnswerCorrect: false, id: nanoid()},
            ],
        CorrectAnswers: [false, true, false, false],
        id: '3',
        isRadioForm: true
    },

    {
        TextQuestion: 'Какой валютой пользуются в Словакии?',
        Time: 60,
        Answers:
            [{Answer: 'Словацкая Крона', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Марки', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Евро', isAnswerCorrect: true, id: nanoid()},
                {Answer: 'Фунт', isAnswerCorrect: false, id: nanoid()},
            ],
        CorrectAnswers: [false, false, true, false],
        id: '4',
        isRadioForm: true
    },

    {
        TextQuestion: 'Большинство граждан Словакии исповедуют?',
        Time: 60,
        Answers:
            [{Answer: 'Протестантизм', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Ничего не исповедуют', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Католицизм', isAnswerCorrect: true, id: nanoid()},
                {Answer: 'Православие', isAnswerCorrect: false, id: nanoid()},
            ],
        CorrectAnswers: [false, false, true, false],
        id: '5',
        isRadioForm: true
    },

    {
        TextQuestion: 'Два самых распространенных языков Словакии?',
        Time: 60,
        Answers:
            [{Answer: 'Словацкий', isAnswerCorrect: true, id: nanoid()},
                {Answer: 'Чешский', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Польский', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Венгерский', isAnswerCorrect: true, id: nanoid()},
            ],
        CorrectAnswers: [true, false, false, true],
        id: '6',
        isRadioForm: false
    },

    {
        TextQuestion: 'На какой реке лежит Братислава?',
        Time: 60,
        Answers:
            [{Answer: 'Днепр', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Райн', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Дунай', isAnswerCorrect: true, id: nanoid()},
                {Answer: 'Луар', isAnswerCorrect: false, id: nanoid()},
            ],
        CorrectAnswers: [false, false, true, false],
        id: '7',
        isRadioForm: true
    },

    {
        TextQuestion: 'Какие цвета есть на флаге словакии?',
        Time: 60,
        Answers:
            [{Answer: 'Белый', isAnswerCorrect: true, id: nanoid()},
                {Answer: 'Черный', isAnswerCorrect: false, id: nanoid()},
                {Answer: 'Красный', isAnswerCorrect: true, id: nanoid()},
                {Answer: 'Синий', isAnswerCorrect: true, id: nanoid()},
            ],
        CorrectAnswers: [true, false, true, true],
        id: '8',
        isRadioForm: false
    },

]