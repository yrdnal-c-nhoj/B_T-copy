import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import List from './List';
import About from './About';
import Today from './Today';

function App() {
    return (
        <Routes>

            {/* <Route path="/" element={<HomePage />} /> */}

            <Route path="/today" element={<Today />} />
            <Route path="/" element={<List />} />
            <Route path="/" element={<Today />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;

