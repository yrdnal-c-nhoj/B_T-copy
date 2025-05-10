import React, { useEffect, useState } from 'react';

// 1. Use Vite's glob import to get all Clock.jsx modules
const clockModules = import.meta.glob('../pages/*/Clock.jsx');

function getTodayFolder() {
    const now = new Date();
    // Format as 'YY-MM-DD'
    const pad = n => n.toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
    const month = pad(now.getMonth() + 1);
    const day = pad(now.getDate());
    return `${year}-${month}-${day}`;
}

function getSortedFolders(modules) {
    // Extract folder names from paths like './pages/25-05-09/Clock.jsx'
    return Object.keys(modules)
        .map(path => ({
            path,
            folder: path.match(/\.\/pages\/([^/]+)\//)[1],
        }))
        .sort((a, b) => b.folder.localeCompare(a.folder));
}

export default function ClockLoader() {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        const today = getTodayFolder();
        const sorted = getSortedFolders(clockModules);

        // Find the first folder that is today or before
        const found = sorted.find(({ folder }) => folder <= today);

        if (found) {
            clockModules[found.path]().then(mod => {
                setComponent(() => mod.default);
            });
        }
    }, []);

    if (!Component) return <div>Loading...</div>;
    return <Component />;
}
