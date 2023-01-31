import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import Footer from '../Component/Footer/Footer';
import Header from '../Component/Header/Header';

const Main = () => {
    const {theme} = useContext(authContext)
    return (
        <div className={` text-${theme === 'dark' ? 'white' : 'black'} bg-${
            theme === "light" ? "light" : "dark"
          }`} >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;