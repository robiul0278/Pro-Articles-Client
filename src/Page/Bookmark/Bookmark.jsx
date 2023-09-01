import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Bookmark = () => {
    const { user } = useAuth();
    const [book, setBook] = useState([]);
    // console.log(book);

    const url = `http://localhost:5000/bookarticle?email=${user?.email}`
    console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [url])
    return (
        <div>
            <h2>{book.length}</h2>
        </div>
    );
};

export default Bookmark;


