import { useQuery } from "@tanstack/react-query";

const useArticle = () => {
    const { data: article = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['article'],
        queryFn: async () => {
            const res = await fetch('https://premium-articles-platform-sever.vercel.app/article');
            const data = await res.json();
            // console.log(data)
            return data;
        }
    });

    return {article, loading, refetch};
}

export default useArticle;