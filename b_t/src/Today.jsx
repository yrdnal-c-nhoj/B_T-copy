import Header from "./components/Header";
import './components/styles/Header.css';
import Footer from "./components/Footer";
import './components/styles/Footer.css';
// import DigitClock from "./components/clocks/DigitClock";


function Today() {
    return (
        <div>
            <Header />
            <DigitClock />
            <GetList />
            <h1>Today's  clock</h1>

            <DigitClock />

            <h1>Today's Clock!!!!!</h1>

            <Footer />
        </div>
    );

}

export default Today;
