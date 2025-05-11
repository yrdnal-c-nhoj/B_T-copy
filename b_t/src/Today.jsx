import Header from "./components/Header";
import Footer from "./components/Footer";
import ClockLoader from "./utils/ClockLoader";
import "./styles/Footer.css";
import "./styles/Header.css";


function Today() {
    return (
        <div>
            <Header />
            <ClockLoader />
            <Footer />
        </div>
    );

}

export default Today;


