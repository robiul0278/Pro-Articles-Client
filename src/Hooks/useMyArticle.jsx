import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useSelector } from 'react-redux';

const useMyArticle = () => {
    const { loading } = useAuth();
    const {user} = useSelector((state) => state.auth)
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