import React from 'react';
import Showcase from './HomePage/Showcase';
import Status from './HomePage/Status';
import Cli from './HomePage/Cli';
import Cloud from './HomePage/Cloud';
import Planguage from './HomePage/Planguage';
import PlanguagesData from '../db/program_language.json';

const Home = () => {
 
    return (
        <div>

        <Showcase />
        <Status />
        <Cli />
        <Cloud />
        <Planguage PlanguagesData={PlanguagesData}/> 

        </div>
    )
}

export default Home
