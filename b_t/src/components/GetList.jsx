import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQc5qURFR9zL6d4ej5hbP4-XBd8k9SYHTYdOrxgDAWhQ6MCzDj-xPk3di8ymvXoJ8CfsQ3MctWs_PyF/pub?gid=0&single=true&output=csv';
export default function GetList() {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(SHEET_CSV_URL)
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.text();
            })
            .then(text => {
                const rows = text.trim().split('\n').map(row => row.split(','));
                const items = rows.slice(1)
                    .filter(row => row.length >= 3)
                    .map(([path, date, label]) => ({
                        path: path.trim(),
                        date: date.trim(),
                        label: label.trim()
                    }))
                    .sort((a, b) => new Date(b.date) - new Date(a.date)); // descending by date

                setLinks(items);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch CSV:', err);
                setError('Failed to load list.');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <ul className="no-dots link-list">
            {links.map((link, i) => (
                <li key={i}>
                    <div className="label">
                        <Link to={link.path}>
                            <span className="date">{link.date}</span>.
                            <span className="label-text"> {link.label}</span>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}
