import React, { useEffect, useState } from 'react';

// Go up one level to find all ../pages/*/Clock.jsx modules
const clockModules = import.meta.glob('../pages/*/Clock.jsx');

function getTodayFolder() {
    const now = new Date();
    const pad = n => n.toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
    const month = pad(now.getMonth() + 1);
    const day = pad(now.getDate());
    return `${year}-${month}-${day}`;
}

function getSortedFolders(modules) {
    return Object.keys(modules)
        .map(path => ({
            path,
            folder: path.match(/\/pages\/([^/]+)\//)?.[1] || '',
        }))
        .filter(obj => obj.folder) // Remove unmatched paths
        .sort((a, b) => b.folder.localeCompare(a.folder));
}

export default function ClockLoader() {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        const today = getTodayFolder();
        const sorted = getSortedFolders(clockModules);

        console.log('Today:', today);
        console.log('Available Clock paths:', Object.keys(clockModules));
        console.log('Sorted folders:', sorted.map(s => s.folder));

        const found = sorted.find(({ folder }) => folder <= today);
        console.log('Matched folder:', found?.folder || 'None');

        if (found) {
            console.log(`Attempting to import: ${found.path}`);
            clockModules[found.path]().then(mod => {
                console.log('Module loaded:', mod);
                setComponent(() => mod.default);
            }).catch(err => {
                console.error('Error loading Clock.jsx module:', err);
            });
        } else {
            console.warn('No matching Clock.jsx found for today or earlier.');
        }
    }, []);

    // Debug: Log if the component is being rendered
    console.log('Rendering component:', Component);

    return Component ? (
        <>
            {console.log('Rendering loaded Clock component')}
            <Component />
        </>
    ) : (
        <div>Loading clock…</div>
    );
}
