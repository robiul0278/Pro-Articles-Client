import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import MarkItem from "./MarkItem";

const Bookmark = () => {
    const { user } = useAuth();
    const [book, setBook] = useState([]);
    console.log(book);

    const url = `https://premium-articles-platform-sever.vercel.app/bookarticle/${user?.email}`
    console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [url])


    return (
        <div>
            <h2 className="text-center">{book.length}</h2>
            {
                book.map(mark => <MarkItem key={mark._id} mark={mark}></MarkItem>)
            }
        </div>
    );
};

export default Bookmark;


