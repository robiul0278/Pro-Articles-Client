import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import { useSelector } from 'react-redux';
// import useAxiosSecure from './useAxiosSecure';

const useMyBookMark = () => {
    const { loading } = useAuth();
    const {user} = useSelector((state) => state.auth)
    // const [axiosSecure] = useAxiosSecure();
    const { refetch, data: bookarticle = [] } = useQuery({
        queryKey: ['bookarticle', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://premium-articles-platform-sever.vercel.app/bookarticle/${user?.email}`)
            // console.log('res from axios', res)
            const data = await res.json();
            return data;
        },
    })

    return {bookarticle, refetch}
};

export default useMyBookMark;
