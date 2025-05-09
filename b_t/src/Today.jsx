import Header from "./components/Header";
import Footer from "./components/Footer";
import Clock from ".utils/ClockReady";
import "./pages/25-05-06/random.css";
import "./styles/Footer.css";
import "./styles/Header.css";


function Today() {
    return (
        <div>
            <Header />
            <Clock />
            <Footer />
        </div>
    );

}

export default Today;


