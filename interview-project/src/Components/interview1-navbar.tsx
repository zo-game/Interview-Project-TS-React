import {Container} from "@mui/system";
import {AppBar, LinearProgress, Toolbar, Typography} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import Box from "@mui/material/Box";
import {classes} from "./question-component";
import {Interviews} from "../mock/interviews";

type Interview1NavbarProps = {
    questionNumber : string,
    interview: Interviews
}

export function Interview1Navbar({questionNumber, interview} : Interview1NavbarProps) {
    const {countQuestion, interviewTitle} = interview;
    const questionIndex = Number(questionNumber);
    return (
        <>
            <AppBar position={'static'} sx={{bgcolor: 'white'}}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <HelpOutlineIcon sx={{color: '#006666', fontSize: '40px', marginRight: '10px'}}/>
                        <Typography sx={{color: '#828282', fontFamily: 'Roboto'}} fontSize={20}>{questionNumber}/{countQuestion}</Typography>
                        <Typography sx={{color: '#828282', fontFamily: 'Roboto', margin: '0 auto'}} fontSize={25}>{interviewTitle}</Typography>
                        <LightbulbCircleIcon sx={{color: 'green', fontSize: '40px'}}/>
                    </Toolbar>
                </Container>
                <Box>
                    <LinearProgress variant={'buffer'} value={Math.round(questionIndex/countQuestion * 100)} valueBuffer={Math.round(questionIndex/countQuestion * 100) + 20}  className={classes().root}/>
                </Box>
            </AppBar>
        </>
    )
}