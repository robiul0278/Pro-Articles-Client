import { useQuery } from "@tanstack/react-query";

const useArticleId = ({ id }) => {
    console.log(id);
    const { data: article = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['article'],
        queryFn: async () => {
            const res = await fetch(`https://premium-articles-platform-sever.vercel.app/article/${id}`);
            const data = await res.json();
            // console.log(data)
            return data;
        }
    });

    return [article, loading, refetch];
}

export default useArticleId;