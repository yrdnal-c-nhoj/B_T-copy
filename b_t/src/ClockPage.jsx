import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';

export default function ClockPage() {
    const { path } = useParams(); // match the Route path param
    const [ClockComponent, setClockComponent] = useState(null);

    useEffect(() => {
        if (path) {
            import(`./pages/${path}/Clock.jsx`)
                .then((module) => {
                    setClockComponent(() => module.default);
                })
                .catch((err) => {
                    console.error("Failed to load clock component:", err);
                    setClockComponent(() => () => <div>Clock not found</div>);
                });
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
