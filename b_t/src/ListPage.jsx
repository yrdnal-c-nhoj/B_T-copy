// DayPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function DayPage({ date, title, prev, next }) {
    return (
        <div>
            <h1>{title || `Page for ${date}`}</h1>
            <nav>
                {prev && <Link to={prev.path}>← {prev.date}</Link>}
                {next && <Link to={next.path}>{next.date} →</Link>}
            </nav>
        </div>
    );
}

export default DayPage;
