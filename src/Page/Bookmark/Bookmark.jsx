// import { useEffect, useState } from "react";
// import useAuth from "../../Hooks/useAuth";
import MarkItem from "./MarkItem";
import useMyBookMark from "../../Hooks/useMyBookMark";
import { useContext } from "react";
import { ThemContext } from "../../Routes/ThemProvider";
import { Helmet } from "react-helmet";
// import useMyBookMark from "../../Hooks/useMyBookMark";

const Bookmark = () => {
    const [{ theme }] = useContext(ThemContext)
    // const { user } = useAuth();
    // const [book, setBook] = useState([]);
    // // console.log(book);

    // const url = `https://premium-articles-platform-sever.vercel.app/bookarticle/${user?.email}`
    // console.log(url);
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setBook(data))
    // }, [url])
    const { bookarticle } = useMyBookMark();

    console.log(bookarticle);


    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="max-w-7xl mx-auto bg-white pt-20">
                    <Helmet>
            <title>ProWriter | Bookmark</title>
            </Helmet>
            <div className="text-center mb-5">
            <div className="text-center outline outline-offset-2 outline-cyan-500  p-8">
                <h1 className="text-4xl font-bold ">Bookmark Article</h1>
             
            </div>
            </div>
            <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                {
                    bookarticle.map(mark => <MarkItem key={mark._id} mark={mark}></MarkItem>)
                }
            </div>
        </div>
    );
};

export default Bookmark;