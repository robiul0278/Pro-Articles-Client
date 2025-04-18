// import { useEffect, useState } from "react";
// import useAuth from "../../Hooks/useAuth";
import MarkItem from "./MarkItem";
import useMyBookMark from "../../Hooks/useMyBookMark";
import { Helmet } from "react-helmet";
// import useMyBookMark from "../../Hooks/useMyBookMark";

const Bookmark = () => {
    const { bookarticle } = useMyBookMark();


    return (
        <div className="max-w-7xl mx-auto bg-white pt-20">
                    <Helmet>
            <title>ProWriter | Bookmark</title>
            </Helmet>
            <div className="text-center mb-5">
            <div className="text-center outline outline-offset-2 outline-cyan-500  p-8">
                <h1 className="text-4xl font-bold ">Bookmark Article</h1>
             
            </div>
            </div>
            <div>
                {
                    bookarticle.map(mark => <MarkItem key={mark._id} mark={mark}></MarkItem>)
                }
            </div>
        </div>
    );
};

export default Bookmark;