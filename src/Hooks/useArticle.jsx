// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useArticle = () => {
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://premium-articles-platform-sever.vercel.app/article')
            .then(res => res.json())
            .then(data => {
                setArticle(data);
                setLoading(false);
            });
    }, [])

    // const { data: article = [], isLoading: loading, refetch } = useQuery({
    //     queryKey: ['article'],
    //     queryFn: async () => {
    //         const res = await fetch('https://premium-articles-platform-sever.vercel.app/article');
    //         return res.json();
    //     }
    // })

    return [article, loading]
}

export default useArticle;