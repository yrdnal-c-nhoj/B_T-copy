import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';

const clockModules = import.meta.glob('./pages/**/Clock.jsx');

export default function ClockPage() {
    const { path } = useParams();
    const [ClockComponent, setClockComponent] = useState(null);

    useEffect(() => {
        if (path) {
            const modulePath = `./pages/${path}/Clock.jsx`;
            const loader = clockModules[modulePath];

            if (loader) {
                loader().then((module) => {
                    setClockComponent(() => module.default);
                }).catch((err) => {
                    console.error("Error loading component:", err);
                    setClockComponent(() => () => <div style={{ color: 'red' }}>Clock failed to load</div>);
                });
            } else {
                console.warn("No matching module found for", modulePath);
                setClockComponent(() => () => <div style={{ color: 'orange' }}>Clock not found: {path}</div>);
            }
        }
    }, [path]);

    return (
        <>
            <Header />
            {ClockComponent ? <ClockComponent /> : <div>Loading Clock...</div>}
            <Footer />
        </>
    );
}
