import React from 'react';

import './App.scss';
import Footer from './containers/footer/Footer';
import Navbar from './containers/navbar/Navbar';
import Landing from './containers/landing/Landing';
import LoginModal from "./components/login-modal/LoginModal";
import ContextApi from "./context-api/ContextApi";

function App() {
    return (
        <ContextApi.Provider value={{login: true}}>
            <div className="container is-fluid">
                <Navbar></Navbar>
                <Landing></Landing>
                <Footer></Footer>
            </div>
            <LoginModal></LoginModal>
        </ContextApi.Provider>
    );
}

export default App;
