import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();
}