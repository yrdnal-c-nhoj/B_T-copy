import TopNav from "./components/TopNav";
import Copyright from "./components/Copyright";
import SpreadsheetNav from "./utils/spreadsheet";
import './Home.css'
// import "./styles/List.css";

function Home() {
    return <div>
        <TopNav />
        <SpreadsheetNav />
        <Copyright />
    </div>;
}

export default Home;
