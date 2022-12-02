import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import {Navbar} from "../Components/navbar-component";
import {Question} from "../Components/question-component";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/Question">
                <Question/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;