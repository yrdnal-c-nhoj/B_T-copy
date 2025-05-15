import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import(`./pages/${date}/Clock.jsx`)


function ClockPage() {
    const { date } = useParams(); // e.g. "25-05-15"
    const [ClockComponent, setClockComponent] = useState(null);

    useEffect(() => {
        import(`./pages/${date}/Clock.jsx`)
            .then((module) => setClockComponent(() => module.default))
            .catch((error) => {
                console.error(`No Clock.jsx found for date: ${date}`, error);
                setClockComponent(() => () => <div>Clock not found for {date}</div>);
            });
    }, [date]);

    return (
        <div>
            {ClockComponent ? <ClockComponent /> : <div>Loading clock...</div>}
        </div>
    );
}

export default ClockPage;
