// GetList.jsx
import React, { useEffect, useState } from 'react';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQc5qURFR9zL6d4ej5hbP4-XBd8k9SYHTYdOrxgDAWhQ6MCzDj-xPk3di8ymvXoJ8CfsQ3MctWs_PyF/pub?output=csv';

function GetList({ onData }) {
    useEffect(() => {
        fetch(SHEET_URL)
            .then((res) => res.text())
            .then((csv) => {
                const lines = csv.split('\n').slice(1); // Skip header
                const items = lines.map((line) => {
                    const [date, title] = line.split(',');
                    return {
                        date: date.trim(), // e.g., "04/19/25"
                        title: title?.trim() || '',
                        path: `/day/${date.trim().replaceAll('/', '-')}` // format to URL
                    };
                });
                onData(items);
            });
    }, []);

    return null; // No UI rendered
}

export default GetList;
