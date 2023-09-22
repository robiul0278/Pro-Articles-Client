import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { useSelector } from "react-redux";


const useAdmin = () => {
    const { loading } = useAuth();
    const {user} = useSelector((state) => state.auth)
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://premium-articles-platform-sever.vercel.app/role/${user?.email}`);

            return res.json();
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;