import { useLocation } from "react-router-dom";
export default function Saved() {
    const location = useLocation();
    return (
        <>
            <p>{JSON.stringify(location.state)}</p>
            <p>SAVED</p>
        </>
    );
}
