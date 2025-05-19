// Import React hooks for state and lifecycle management
import { useEffect, useState } from "react";

// URL of the published Google Sheet as a CSV
const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQc5qURFR9zL6d4ej5hbP4-XBd8k9SYHTYdOrxgDAWhQ6MCzDj-xPk3di8ymvXoJ8CfsQ3MctWs_PyF/pub?output=csv";

function SpreadsheetNav() {
    // Initialize state to store parsed spreadsheet rows
    const [rows, setRows] = useState([]);

    // Fetch spreadsheet data when the component mounts
    useEffect(() => {
        // Fetch the CSV content from the Google Sheets URL
        fetch(SHEET_URL)
            // Convert the response to text
            .then((res) => res.text())
            // Process the CSV text
            .then((csvText) => {
                // Split the text into lines
                const lines = csvText.trim().split("\n");

                // Extract and clean up header names from the first line
                const headers = lines[0].split(",").map((h) => h.trim());

                // Process each remaining line into an object using the headers
                const data = lines.slice(1).map((line) => {
                    // Split the line by commas and trim whitespace
                    const values = line.split(",").map((v) => v.trim());

                    // Create a row object by matching values to headers
                    const row = {};
                    headers.forEach((header, i) => {
                        row[header] = values[i];
                    });

                    return row;
                });

                // Filter out any rows missing a date or title, then reverse for newest first
                setRows(data.filter((row) => row.date && row.title).reverse());
            })
            // Log any errors if the fetch or parsing fails
            .catch((err) => console.error("Failed to fetch spreadsheet:", err));
    }, []); // Empty dependency array ensures this runs only once on mount

    // Render the list of links using the processed row data
    return (
        <ul>
            {rows.map((row) => (
                // Each list item is keyed by its date for uniqueness
                <li key={row.date}>
                    {/* Link to the page path specified in the row */}
                    <a href={`/pages/${row.path}`} className="nav_item">
                        {/* Display the title from the spreadsheet row */}
                        <span className="clock_title">{row.title}</span>

                        {/* Display the date from the spreadsheet row */}
                        <span className="clock_date">{row.date}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

// Export the component for use elsewhere in the app
export default SpreadsheetNav;
