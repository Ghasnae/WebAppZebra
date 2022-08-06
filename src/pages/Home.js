import React from 'react';
import Header from '../components/Header'
import DatatablePage from '../components/DatatablePage';
import Filtres from '../components/Filtres';


const Home = () => {
    return (
        <div className="home-container">
            <Header></Header>
            <Filtres></Filtres>
            <DatatablePage></DatatablePage>
        </div>
    );
};

export default Home;