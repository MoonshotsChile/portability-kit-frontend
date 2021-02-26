import React from 'react';

import './App.scss';
import Footer from './containers/footer/Footer';
import Navbar from './containers/navbar/Navbar';
import Landing from './containers/landing/Landing';
import ContextApi from "./context-api/ContextApi";
import CookiesPolicies from "./components/cookies-policies/CookiesPolicies";

function App() {
    return (
        <ContextApi.Provider value={{login: true}}>
            <div className="container is-fluid">
                <Navbar></Navbar>
                <Landing></Landing>
                <Footer></Footer>
                <CookiesPolicies show={true}></CookiesPolicies>
            </div>
        </ContextApi.Provider>
    );
}

export default App;
