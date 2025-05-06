// src/utils/fetchSheetData.js
import axios from "axios";

// Replace with your actual published Google Sheet CSV URL
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQc5qURFR9zL6d4ej5hbP4-XBd8k9SYHTYdOrxgDAWhQ6MCzDj-xPk3di8ymvXoJ8CfsQ3MctWs_PyF/pub?output=csv";

export async function fetchPages() {
    const response = await axios.get(SHEET_CSV_URL);
    // Assumes CSV: date,title,content
    return response.data
        .split('\n')
        .slice(1)
        .map(row => {
            const [path, date, label] = row.split(',');
            return { path, date, label };
        });
}





