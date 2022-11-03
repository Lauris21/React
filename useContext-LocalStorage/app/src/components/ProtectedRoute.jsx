import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "./../context/AuthContext"
import AppBar from "./AppBar";

const ProtectedRoute = () => {

    const { user} = useAuth();
    const outlet = useOutlet();

    if (!user) {
        return <Navigate to="/" option={{ replace: true}} />
    }

    return (
        <div>
            <AppBar
                pages={[
                    { label: "Settings", path: "settings" },
                    { labeñ: "Profile", path: "profile" },
                ]} />
                {outlet}
        </div>
    )

}

export default ProtectedRoute;