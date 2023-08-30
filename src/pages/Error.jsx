import React from 'react';
import Navbar from "../components/UI/Navbar/Navbar";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./About";
import Posts from "./Posts";

const Error = () => {
    const url404 = 'https://sun9-67.userapi.com/impg/V-CIPXI3y0ouCN-kZdVhXicNkNXxQekG6XC9yQ/AlUQGnYNb4o.jpg?size=1920x928&quality=96&sign=69762d1e2124c49b411ebdc1f07f0141&type=album'
    return (
        <div className='error_handler'>
            <Link to='/posts'> <img src={url404}/> </Link>
        </div>
    );
};

export default Error;