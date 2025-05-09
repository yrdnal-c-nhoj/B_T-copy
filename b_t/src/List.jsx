
import GetList from "./utils/GetList"
import ListHeader from "./components/ListHeader";
import Copyright from "./components/Copyright";
import "./styles/List.css";

function List() {
    return <div>
        <ListHeader />
        <GetList />
        <Copyright />
    </div>;
}

export default List;
