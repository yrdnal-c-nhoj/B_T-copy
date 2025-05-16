// import { useParams } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Clock from './pages/25-05-15/Clock'

export default function ClockPage() {
    // const { path } = useParams();

    return (
        <>
            <Header />
            <Clock />
            <Footer />
        </>

    );
}
