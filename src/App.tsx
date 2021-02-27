import React from 'react';

import './App.scss';
import Footer from './containers/footer/Footer';
import Navbar from './containers/navbar/Navbar';
import Landing from './containers/landing/Landing';
import CookiesPolicies from "./components/cookies-policies/CookiesPolicies";
import { ContextApiProvider } from "./context-api/ContextApi";

function App() {
    return (
        <ContextApiProvider>
            <div className="container">
                <Navbar></Navbar>
                <Landing></Landing>
                <Footer></Footer>
                <CookiesPolicies show={false}></CookiesPolicies>
            </div>
        </ContextApiProvider>
    );
}

export default App;
