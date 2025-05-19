import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
// import Clock from './pages/25-05-14/Clock';

const clockModules = import.meta.glob('./pages/**/Clock.jsx');

export default function ClockPage() {


    return (
        <>
            <Header />
            <Clock />
            <Footer />
        </>
    );
}
