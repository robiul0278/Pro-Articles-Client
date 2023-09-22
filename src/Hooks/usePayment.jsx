import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useSelector } from 'react-redux';

const usePayment = () => {
    const {loading } = useAuth();
    const {user} = useSelector((state) => state.auth)
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: payment = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [payment, refetch]
};

export default usePayment;