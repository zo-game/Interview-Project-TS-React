import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {useEffect} from "react";


export function CircularProgressWithLabel({time} : { time: number }):JSX.Element {
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    //     }, 800);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // }, []);
    const [currentTime, setTimer] = useState(time);
    useEffect(()=>{
        const timer = setInterval(() => {
            setTimer((prevTime) => (prevTime <= 0 ? 0 : prevTime - 1));

        }, 1000);

        return () => {
            clearInterval(timer);};
    }, []);


    return (
        <Box sx={{ position: 'relative', display: 'inline-flex', textAlign: 'center'}}>
            <CircularProgress variant="determinate" value={Math.round(100-(time - currentTime)*100/time)} size={100} thickness={1.2} sx={{color: '#00EAD9'}}/>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                    fontSize={20}
                >{`${ConvertToMinute(currentTime)}`}</Typography>
            </Box>
        </Box>
    );
}

function ConvertToMinute(sec: number):String{
    return `${Math.floor(sec / 60 )} : ${sec % 60}`;
}
