import {Interview1Navbar} from "./interview1-navbar";
import {Interviews} from "../mock/interviews";
import {useSelector} from "react-redux";
import {StoreState} from "../store/store";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useNavigate} from "react-router-dom";
import {MouseEvent} from "react";
import {useDispatch} from "react-redux";
import {cleanAnswers} from "../store/store";

type ScoreComponentProps = {
    questionNumber : string,
    interview: Interviews
}
export function ScoreComponent(props : ScoreComponentProps):JSX.Element{
    const {questionNumber, interview} = props;
    const dispatch = useDispatch();
    const answers = useSelector((state : StoreState) => state.editReducer.answers);
    const navigate = useNavigate();
    const onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
        navigate('../');
        dispatch(cleanAnswers());

    }

    return (<>
            <Interview1Navbar questionNumber={questionNumber} interview={interview}/>

        <Typography variant={"h3"} sx={{textAlign: 'center', marginTop: '100px'}}>
            Поздравляем!<br/>
            Вы ответили верно на {answers.filter((ans) => ans).length}
        </Typography>
        <Box sx={{marginTop: '100px', textAlign: 'center'}}>
            <Button variant={"contained"} startIcon={<ArrowBackIosIcon/>} onClick={onButtonClick}>Вернуться назад</Button>
        </Box>

        </>)
}
