import React from 'react';
import { Redirect } from 'react-router-dom'

const Home = () => {
    return (
        <Redirect to={"/Operations/Production-house"}/>
    );
};

export default Home;