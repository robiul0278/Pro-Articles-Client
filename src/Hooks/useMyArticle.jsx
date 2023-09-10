import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useMyArticle = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const { refetch, data: myArticle = [] } = useQuery({
        queryKey: ['myArticle', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/userArticle?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [myArticle, refetch]
};

export default useMyArticle;