import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {MainComponent} from "./Components/main-component";
import QuestionsComponent from "./Components/questions-component";
import {Question} from "./Components/question-component";
import {store} from "./store/store";
import {Provider} from "react-redux";
import {ScoreComponent} from "./Components/score-board-component";
import {SlovakiaInterview} from "./mock/interviews";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App/>}>

                        <Route path={'main'} element={<MainComponent/>}/>
                        <Route path={'question'} element={<QuestionsComponent/>}/>

                    </Route>

                    <Route path={'score-board1'} element={<ScoreComponent interview={SlovakiaInterview} questionNumber={String(SlovakiaInterview.countQuestion)}/>}/>
                    <Route path={'quest/:question'} element={<Question/>}/>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
reportWebVitals();
