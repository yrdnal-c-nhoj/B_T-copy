import Header from "./components/Header";
import Footer from "./components/Footer";
import Clock from ".pages/{}/Clock";
import "./styles/Footer.css";
import "./styles/Header.css";


function ClockPage() {
    return (
        <div>
            <Header />
            <Clock />
            <Footer />
        </div>
    );

}

export default Today;


