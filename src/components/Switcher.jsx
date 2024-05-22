import React from 'react';
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contacts from "./Contacts.jsx";
import {navItems} from "../utils/constants.js";

const Switcher = ({currentPage}) => {
    switch (currentPage) {
        case navItems[0]:
            return <Home></Home>
        case navItems[1]:
            return <AboutMe></AboutMe>
        case navItems[2]:
            return <StarWars></StarWars>
        case navItems[3]:
            return <Contacts/>
    }
    return (

        <div>
            <Home/>
        </div>
    );
};

export default Switcher;