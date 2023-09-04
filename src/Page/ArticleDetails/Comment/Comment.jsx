import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";


const Comments = () => {
    const { user } = useAuth();
    console.log(user.displayName)
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])
    const onChangeHandler = (e) => {
        setComment(e.target.value)
    }
    const handleComment = () => {
        setComments((comments) => [...comments, comment])
    }
    return (
        <div>
            <div>
                <h1>Comment</h1>
                <textarea className="textarea textarea-primary textarea-sm w-full max-w-xs" value={comment} onChange={onChangeHandler} placeholder="Comment..."></textarea>
                <div className='mt-3'>
                    <button className="btn btn-neutral mr-8">Cancel</button>
                    <button onClick={handleComment} className="btn btn-secondary">Comment</button>
                </div>
            </div>
            {comments.map((text) => (
                <><div className="mt-5">
                    <span className="mt-5">{user.displayName}</span><p className="textarea  bg-slate-50 w-80 scroll-mt-3">{text}</p>
                </div></>
            ))}
        </div>
    );
};

export default Comments;