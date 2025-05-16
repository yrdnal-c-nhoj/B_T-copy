import { useParams } from "react-router-dom";
import { Suspense, lazy } from "react";

function DynamicClockPage() {
    const { folder } = useParams();

    const ClockComponent = lazy(() =>
        import(`./pages/${folder}/Clock.jsx`)
    );

    return (
        <Suspense fallback={<div>Loading clock...</div>}>
            <ClockComponent />
        </Suspense>
    );
}

export default DynamicClockPage;
