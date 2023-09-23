import { useForm } from "react-hook-form";
import useArticle from "../../../Hooks/useArticle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Comments = ({ id }) => {

    const [article] = useArticle()
    const {user} = useSelector((state) => state.auth)

    const postComment = article.filter(item => item._id === id)
    console.log(postComment[0]?._id);

    const { register, handleSubmit, reset } = useForm();


    const CommentLink = () => {
      if (user) {
          return (
              <div className="bg-error text-white px-3 py-2 rounded-md mr-2 text-sm" type="submit">Comment Post</div>
          );
      } else {
          return (
              <Link className="text-blue-500" to="/login">Please Login!</Link>
          );
      }
      // return null;
  };


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
                reset
                console.log(data)
                if (data.success === true) {
                    reset({ something: "" })
                    console.log("Hello");
                }
            });
    }

    return (
        <div>
            {
                postComment[0]?.comments?.slice(0,3).map(text =>

                    <div key={text._id}className="p-4 my-3 bg-gray-100">
                    <div className="flex items-center">
                      <img
                        className="w-12 h-12 rounded-full shadow-md mr-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                        alt="avatar"
                      />
                      <div>
                        <h6 className="font-bold mb-1">Lily Coleman</h6>
                        <p className="text-sm text-gray-500 mb-0">
                          Shared publicly - Jan 2020
                        </p>
                      </div>
                    </div>
        
                    <p className="mt-3 mb-4 pb-2">
                    {text.comment}
                    </p>
{/*         
                    <div className="flex justify-start">
                 <i className="far fa-comment-dots mr-2"></i>
                        <p className="mb-0">Comment</p>
                                  <a href="#!" className="flex items-center mr-3">
                        <i className="far fa-thumbs-up mr-2"></i>
                        <p className="mb-0">Like</p>
                      </a>
                      <a href="#!" className="flex items-center mr-3">
                 </a>
                      <a href="#!" className="flex items-center mr-3">
                        <i className="fas fa-share mr-2"></i>
                        <p className="mb-0">Share</p>
                      </a>
                    </div> */}
                  </div>

                )
            }
      <div className="w-full my-3">
        <div className="bg-white">

          <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-3">
        <h1 className="text-xl text-font-semibold my-3">Comment</h1>

            <div className="flex items-start w-full">
              <img
                className="w-10 h-10 rounded-full shadow-md mr-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                alt="avatar"
              />
              <div className="w-full">
                <textarea
                {...register("comment")} placeholder="Comment..." required
                  className="w-full h-20 bg-white border p-2 rounded-md"
                  id="textAreaExample"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-2 pt-1">
              <button
              
                
              >
                {CommentLink()}
              </button>
            </div>
          </form>
        </div>
      </div>


        </div>
    );
};

export default Comments;


