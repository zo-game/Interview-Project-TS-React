import {FormControlLabel, Radio, Typography,
    FormGroup, Checkbox} from "@mui/material";
import {useParams} from "react-router-dom";
import {CircularProgressWithLabel} from "./progress-circular";
import Box from '@mui/material/Box';
import {FormControl} from "@mui/material";
import {Paper, Button} from "@mui/material";
import {RadioGroup} from "@mui/material";
import {ChangeEvent, FormEvent, MouseEvent, useState} from "react";
import { QuestionType} from "../mock/questions";
import {makeStyles} from "@mui/styles";
import {Interview1Navbar} from "./interview1-navbar";
import {SlovakiaInterview} from "../mock/interviews";
import {addAnswer} from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


export const classes = makeStyles(() => ({
    root: {
        "& .MuiLinearProgress-colorPrimary": {
            backgroundColor: "#b8f6ed",
        },
        "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#00EAD9",
        },
    },
}));

export function Question():JSX.Element{
    const questionsSlovakiaMock : QuestionType[] = SlovakiaInterview.questions;
    const {question} = useParams();
    const dispatch = useDispatch();
    const currentQuestion : QuestionType = questionsSlovakiaMock.filter((ques) => ques.id === question)[0];
    const navigate = useNavigate();

    const [checkedAnswer, setCheckedAnswer] = useState('-1');
    const [checkedAnswers, changeCheckedAnswers] = useState([false, false, false, false]);
    const falses = [false, false, false, false];
    const onFormControlLabelChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckedAnswer(event.target.value);
        const inputIndex = Number(event.target.value);
        const changedFlag = true;
        changeCheckedAnswers([...falses.slice(0, inputIndex), changedFlag, ...falses.slice(inputIndex+1)]);
        setButtonError(false)
    }

    const [isButtonError, setButtonError] = useState(false);

    const setDefaultValues = () => {
        setCheckedAnswer('-1');
        changeCheckedAnswers([...falses]);
        setButtonError(false);
    }


    const onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        if(checkedAnswers.every((check) => check === false)){
            setButtonError(true)
        }
        else{
            setDefaultValues();

            const correctAnswers = currentQuestion.CorrectAnswers;
            const comparisonAnswers = correctAnswers.every((answer, index) =>
                answer === checkedAnswers[index]
            );
            dispatch(addAnswer(comparisonAnswers));
            if(SlovakiaInterview.countQuestion > Number(question)){
                navigate(`../quest/${Number(question) + 1}`);
            }
            else{
                navigate('../score-board1')
            }

        }
    }

    const onFormGroupChange = (event: FormEvent<HTMLDivElement>) => {
        const inputIndex = Number((event.target as HTMLTextAreaElement).value);
        const changedFlag = !checkedAnswers[inputIndex];
        changeCheckedAnswers([...checkedAnswers.slice(0, inputIndex), changedFlag, ...checkedAnswers.slice(inputIndex+1)]);
        setButtonError(false);
    }
    const boxShadow = `0px 3px 5px ${isButtonError ? 'red' : 'grey'}`;
    return(
        <>
            <Interview1Navbar questionNumber={question} interview={SlovakiaInterview}/>
            <Box sx={{textAlign: 'center',  width: '80%', margin: '0 auto', marginTop: '5%'}}>
                <CircularProgressWithLabel time={currentQuestion.Time}/>
                <Typography sx={{fontFamily: 'Roboto', marginBottom: '5%'}} fontSize={30}>{currentQuestion.TextQuestion}</Typography>
                <FormControl sx={{ margin: '0 auto', width: '100%'}}>
                    {currentQuestion.isRadioForm
                        ? <RadioGroup  sx={{gap: '20px'
                        , display: 'grid', gridTemplateColumns:'50% 50%', margin: '0 auto',
                        marginBottom: '5%', width: '60%'}}
                                                               value={checkedAnswer} onChange={onFormControlLabelChange}>
                        {currentQuestion.Answers.map((answer, index) =>
                            <Paper square  sx={{boxShadow: `${boxShadow}`, padding: '5px 20px', textAlign:'left'}} elevation={3} key={answer.id}>
                                <FormControlLabel  label={answer.Answer} value={index} control={<Radio/>} /></Paper>
                        )}
                    </RadioGroup>
                        :
                        <FormGroup
                            sx={{gap: '20px'
                                , display: 'grid', gridTemplateColumns:'50% 50%', margin: '0 auto',
                                marginBottom: '5%', width: '60%'}}
                            onChange={onFormGroupChange}
                        >
                            {currentQuestion.Answers.map((answer, index) =>
                                <Paper square sx={{padding: '5px 20px', textAlign:'left'}} elevation={3} key={answer.id}>
                                    <FormControlLabel label={answer.Answer} value={index} control={<Checkbox/>} /></Paper>
                            )}
                        </FormGroup>
                    }
                </FormControl>


                <Box textAlign={'right'}>
                    <Button variant={'text'} sx={{color: '#006666', marginRight: '20px',
                    }}>Пропустить</Button>
                    <Button variant={'contained'} sx={{color: '#006666', backgroundColor: '#c5c7c7',
                        borderRadius: '0',
                    '&:hover': {
                        backgroundColor: '#006666',
                        color: 'white'}
                    }}
                            onClick={onButtonClick}
                       >Ответить</Button>
                </Box>
                {isButtonError ? <Typography variant={'h5'} color={"error"}>Отметьте ответы</Typography> : <></>}

            </Box>
        </>
    )
}