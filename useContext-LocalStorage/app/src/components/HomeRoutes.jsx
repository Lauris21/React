import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AppBar from "./AppBar";

const HomeRoutes = () => {

    const { user } = useAuth();
    const outlet = useOutlet();

    if (user) {
        return <Navigate to="dashboard/profile" option={{ replace: true}} />
    }

    return (
        <div>
            <AppBar
                pages={[
                    { label: "Home", path: "/" },
                    { label: "Login", path: "/login"}
                ]} />
                {outlet}
        </div>
    )
}

export default HomeRoutes;