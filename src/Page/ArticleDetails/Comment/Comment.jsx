import { useForm } from "react-hook-form";
import useArticle from "../../../Hooks/useArticle";

// eslint-disable-next-line react/prop-types
const Comments = ({ id }) => {

    const [article] = useArticle()

    const postComment = article.filter(item => item._id === id)
    console.log(postComment[0]?._id);

    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {

        // console.log(article._id);

        fetch(`https://premium-articles-platform-sever.vercel.app/addComment?id=${postComment[0]?._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success === true) {
                    console.log("Hello");
                }
            });
    }

    return (
        <div>
            <div>
                <h1>Comment</h1>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <textarea className="textarea textarea-primary textarea-sm w-full max-w-xs" {...register("comment")} placeholder="Comment..."></textarea>
                    <div className='mt-3'>
                        <button type="submit" className="btn btn-error">Comment</button>
                    </div>
                </form>
            </div>
            {
                postComment[0]?.comments?.map(text =>
                    <p className="textarea mt-5  bg-slate-50 w-80 scroll-mt-3" key={text._id}>{text.comment}</p>

                )
            }


        </div>
    );
};

export default Comments;


