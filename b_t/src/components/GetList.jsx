import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQc5qURFR9zL6d4ej5hbP4-XBd8k9SYHTYdOrxgDAWhQ6MCzDj-xPk3di8ymvXoJ8CfsQ3MctWs_PyF/pub?output=csv';

export default function GetList() {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetch(SHEET_CSV_URL)
            .then(res => res.text())
            .then(text => {
                const rows = text.trim().split('\n').map(row => row.split(','));
                const items = rows.slice(1).map(([path, date, label]) => ({ path, date, label }));
                setLinks(items.reverse());
            });
    }, []);

    return (
        <ul className="no-dots link-list" >
            {
                links.map((link, i) => (
                    <li key={i}>
                        <div className='label'>
                            <Link to={link.path}>
                                <span className="date">{link.date}</span>.
                                <span className="label-text">{link.label}</span>
                            </Link>
                        </div>
                    </li>
                ))
            }
        </ul >

    );
}
