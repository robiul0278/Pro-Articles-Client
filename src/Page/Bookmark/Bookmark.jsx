import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import MarkItem from "./MarkItem";

const Bookmark = () => {
    const { user } = useAuth();
    const [book, setBook] = useState([]);
    console.log(book);

    const url = `http://localhost:5000/bookarticle/${user?.email}`
    console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [url])

    //    const { image, authorImage, authorName, date, title, _id, description } = book;


    return (
        <div className="mx-auto container">
            <h2 className="text-center mt-5 text-4xl">Total BookMark:  {book.length}</h2>

            {/* card wise data show */}
            <div className="  gap-1 mt-3 ">
                {
                    book.map(mark => (
                       
                           
                          <MarkItem key={mark._id} mark={mark}></MarkItem>
                         
                    ))
                }
            </div>

        </div>
    );
};

export default Bookmark;

{/* <div className="card w-96 bg-base-100 shadow-xl">
<figure><img src={mark?.image} alt="Shoes" /></figure>
<div className="card-body">
    <h2 className="card-title">{mark.title}</h2>
    <p>{mark.description?.slice(0, 150)}</p>
</div>

</div> */}










