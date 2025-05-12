import React, { useEffect, useState } from 'react';

// Import all Clock.jsx modules from one level up: src/pages/*/
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
    // Extract folder names from paths like '../pages/25-05-09/Clock.jsx'
    return Object.keys(modules)
        .map(path => ({
            path,
            folder: path.match(/\/pages\/([^/]+)\//)[1],
        }))
        .sort((a, b) => b.folder.localeCompare(a.folder));
}

export default function ClockLoader() {
    const [Component, setComponent] = useState(null);

    useEffect(() => {
        const today = getTodayFolder();
        const sorted = getSortedFolders(clockModules);

        const found = sorted.find(({ folder }) => folder <= today);

        if (found) {
            clockModules[found.path]().then(mod => {
                setComponent(() => mod.default);
            });
        }
    }, []);

    return Component ? <Component /> : <div>Loading clock...</div>;
}
