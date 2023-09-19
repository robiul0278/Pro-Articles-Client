import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';

const useMyBookMark = () => {
    const { user, loading } = useAuth();
    // const [axiosSecure] = useAxiosSecure();
    const { refetch, data: bookarticle = [] } = useQuery({
        queryKey: ['bookarticle', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://premium-articles-platform-sever.vercel.app/bookarticle?email=${user?.email}`)
            // console.log('res from axios', res)
            const data = await res.json();
            return data;
        },
    })

    return {bookarticle, refetch}
};

export default useMyBookMark;
