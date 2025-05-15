import { useEffect, useState } from "react";

const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQc5qURFR9zL6d4ej5hbP4-XBd8k9SYHTYdOrxgDAWhQ6MCzDj-xPk3di8ymvXoJ8CfsQ3MctWs_PyF/pub?output=csv";

function SpreadsheetNav() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        fetch(SHEET_URL)
            .then((res) => res.text())
            .then((csvText) => {
                const lines = csvText.trim().split("\n");
                const headers = lines[0].split(",").map((h) => h.trim());

                const data = lines.slice(1).map((line) => {
                    const values = line.split(",").map((v) => v.trim());
                    const row = {};
                    headers.forEach((header, i) => {
                        row[header] = values[i];
                    });
                    return row;
                });

                setRows(data.filter((row) => row.date && row.title).reverse());
            })
            .catch((err) => console.error("Failed to fetch spreadsheet:", err));
    }, []);

    return (
        <ul>
            {rows.map((row) => (
                <li key={row.date}>
                    <a href={`/pages/${row.path}`} className="nav_item">
                        <span className="clock_title">{row.title}</span>
                        <span className="clock_date">{row.date}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default SpreadsheetNav;
