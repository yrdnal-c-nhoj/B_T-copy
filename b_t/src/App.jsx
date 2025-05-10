import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import List from './List';
import About from './About';
import Today from './Today';
import NotFound from './NotFound'; // Import your error page

function App() {
    return (
        <Routes>
            <Route path="/" element={<Today />} />
            <Route path="/about" element={<About />} />
            <Route path="/today" element={<List />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
    );
}

export default App;
