import React from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import Story from './Story.jsx'

const Home = () => {
    return (<main className="clearfix">
            <Hero></Hero>
            <DreamTeam></DreamTeam>
            <Story/>
        </main>);
};

export default Home;