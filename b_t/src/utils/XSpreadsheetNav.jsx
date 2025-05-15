import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQc5qURFR9zL6d4ej5hbP4-XBd8k9SYHTYdOrxgDAWhQ6MCzDj-xPk3di8ymvXoJ8CfsQ3MctWs_PyF/pub?output=csv';

function SpreadsheetNav() {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        fetch(CSV_URL)
            .then(response => response.text())
            .then(data => {
                const rows = data.split('\n');
                const cleanedDates = rows.map(row => row.trim().split(',')[0]).filter(Boolean);
                setDates(cleanedDates);
            })
            .catch(err => {
                console.error("Failed to load spreadsheet:", err);
            });
    }, []);

    return (
        <nav>
            <ul>
                {dates.map(date => (
                    <li key={date}>
                        <Link to={`/clock/${date}`}>Clock for {date}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SpreadsheetNav;
