import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";



const Comments = () => {
    const { user } = useAuth();
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/addComment")
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, []);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        fetch('http://localhost:5000/addComment', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                reset()
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'Comment Add successfully',
                })
            });



    }

    return (
        <div>
            <div>
                <h1>Comment</h1>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <textarea className="textarea textarea-primary textarea-sm w-full max-w-xs" {...register("comment")} placeholder="Comment..."></textarea>
                    <div className='mt-3'>
                        <button type="submit" className="btn btn-secondary">Comment</button>
                    </div>
                </form>
            </div>
            {
                comments.map(text =>
                    <><div className="mt-5">
                        <span className="mt-5">{user?.displayName}</span><p className="textarea  bg-slate-50 w-80 scroll-mt-3" key={text._id}>{text.comment}</p>
                        <div className="mt-3">
                            <button className="mr-3">Replay</button>
                            <button className="mr-3">Edit</button>
                            <button className="mr-3"> Delete</button>
                        </div>
                    </div>
                    </>
                )
            }

        </div>
    );
};

export default Comments;


