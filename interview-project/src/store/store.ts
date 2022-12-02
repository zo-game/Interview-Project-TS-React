import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit';

export type InitialState = {
    answers: boolean[]
}

const initialState : InitialState = {
    answers: []
}


const answersReducer = createSlice({
    name: 'editReducer',
    initialState,
    reducers: {
        addAnswer: (state, action) => {
            const prevAnswers = state.answers;
            state.answers = [...prevAnswers, action.payload];
        },
        cleanAnswers : (state) => {
            state.answers = [];
        }
    }
})

export const {addAnswer, cleanAnswers} = answersReducer.actions;

export const rootReducer = combineReducers({
    'editReducer' : answersReducer.reducer
});

export const store = configureStore({reducer: rootReducer});

export type StoreState = ReturnType<typeof store.getState>
