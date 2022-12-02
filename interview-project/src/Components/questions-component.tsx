import React, { Component }  from 'react';
import {Button} from "@mui/material";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import {useNavigate} from "react-router-dom";

export default function QuestionsComponent():JSX.Element{
    const navigate = useNavigate();
    return (
        <div style={{textAlign: "center", paddingTop:'10%'}}>
            <Button onClick={() => navigate('/quest/1')} variant={'contained'} sx={{backgroundColor: 'black'}} endIcon={<GolfCourseIcon/>}>GO</Button>
        </div>
    )
}