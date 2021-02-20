import React from 'react';

import './App.scss';
import Footer from './containers/footer/Footer';
import Navbar from './containers/navbar/Navbar';
import Landing from './containers/landing/Landing';
import LoginModal from "./components/login-modal/LoginModal";

function App() {
    return (
        <>
            <div className="container is-fluid">
                <Navbar></Navbar>
                <Landing></Landing>
                <Footer></Footer>
            </div>
            <LoginModal></LoginModal>
        </>
    );
}

export default App;
