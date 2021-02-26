import React from 'react';

import './App.scss';
import Footer from './containers/footer/Footer';
import Navbar from './containers/navbar/Navbar';
import Landing from './containers/landing/Landing';
import CookiesPolicies from "./components/cookies-policies/CookiesPolicies";

function App() {
    return (
        <div className="container is-fluid">
            <Navbar></Navbar>
            <Landing></Landing>
            <Footer></Footer>
            <CookiesPolicies show={false}></CookiesPolicies>
        </div>
    );
}

export default App;
