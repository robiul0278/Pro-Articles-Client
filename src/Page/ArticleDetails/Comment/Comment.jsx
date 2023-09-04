import { useState } from "react";


const Comments = () => {
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
                <><p className="textarea textarea-primary w-80 mt-3">{text}</p></>
            ))}
        </div>
    );
};

export default Comments;