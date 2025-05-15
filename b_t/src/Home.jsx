import TopNav from "./components/TopNav";
import Copyright from "./components/Copyright";
import SpreadsheetNav from "./utils/SpreadsheetNav";
import './Home.css'

function Home() {
    return <div>
        <TopNav />
        <SpreadsheetNav />
        <Copyright />
    </div>;
}

export default Home;
