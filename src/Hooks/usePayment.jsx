import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const usePayment = () => {
    const { user, loading } = useAuth();
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