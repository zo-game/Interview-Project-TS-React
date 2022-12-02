import {QuestionType, questionsSlovakiaMock} from "./questions";


export type Interviews = {
    countQuestion: number,
    questions: QuestionType[],
    interviewTitle : string
}

export const SlovakiaInterview : Interviews = {
    questions: questionsSlovakiaMock,
    countQuestion : questionsSlovakiaMock.length,
    interviewTitle: 'Факты о словакии'
}
