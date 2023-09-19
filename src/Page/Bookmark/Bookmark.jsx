// import { useEffect, useState } from "react";
// import useAuth from "../../Hooks/useAuth";
import MarkItem from "./MarkItem";
import useMyBookMark from "../../Hooks/useMyBookMark";
// import useMyBookMark from "../../Hooks/useMyBookMark";

const Bookmark = () => {
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
        <div className="max-w-7xl mx-auto bg-white  ">
            <div className="text-center mb-5">
                <div className="pt-16">
                    <h1 className="font-bold text-4xl px-4">Bookmark Article here..</h1>
                </div>
            </div>
            {
                bookarticle.map(mark => <MarkItem key={mark._id} mark={mark}></MarkItem>)
            }
        </div>
    );
};

export default Bookmark;


