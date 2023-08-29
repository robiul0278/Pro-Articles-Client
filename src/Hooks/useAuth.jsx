import { useContext } from "react";
import { AuthContext } from "../FirebaseAuth/Provider/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;