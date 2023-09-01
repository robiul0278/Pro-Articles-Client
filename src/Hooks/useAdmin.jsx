import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useAdmin = () => {
    const { user, loading } = useAuth();
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