// utils/fetchSheetData.js
import axios from 'axios';

export const fetchDaysData = async () => {
    const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vQc5qURFR9zL6d4ej5hbP4-XBd8k9SYHTYdOrxgDAWhQ6MCzDj-xPk3di8ymvXoJ8CfsQ3MctWs_PyF/pub?output=csv');
    return response.data.split('\n').slice(1).map(row => {
        const [date, content] = row.split(',');
        return { date, content };
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
};
