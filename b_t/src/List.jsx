
import GetList from "./components/GetList";
import LHeader from "./components/LHeader";
import Copyright from "./components/Copyright";
import "./styles/List.css";

export default function List() {
    return <div>
        <LHeader />
        <GetList />
        <Copyright />
    </div>;
}
