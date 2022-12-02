import { AppBar, Button, Toolbar, Typography, Box, Tabs, Tab} from '@mui/material';
import { Container } from '@mui/system';
import {makeStyles} from '@mui/styles';
import {Outlet, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';



const useStyles = makeStyles((theme) => ({
    navbar: {
        background: 'linear-gradient(45deg, #000 30%, #000 90%)',
    },


}))




export function Navbar():JSX.Element{
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0});
    const classes = useStyles();
    const navigate = useNavigate();
    const [currentTab, changeTab] = useState<number | boolean>(0);

    return(<>
        <Slide in={!trigger} >
            <AppBar className={classes.navbar} >
                <Container fixed>
                    <Toolbar>
                        <Typography variant='h5'
                                    style={{
                                        background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        marginRight: '5%'
                                    }}>Вопросник</Typography>

                        <Tabs textColor='inherit' value={currentTab} indicatorColor='secondary'>

                            <Tab label={'Main'} onClick={()=> {
                                navigate('main')
                                changeTab(0)
                            }}/>

                            <Tab label={'Вопросы'} onClick={()=> {
                                navigate('question')
                                changeTab(1)
                            }}/>
                        </Tabs>
                    </Toolbar>
                </Container>

            </AppBar>

        </Slide>

        <Outlet />
    </>)
}