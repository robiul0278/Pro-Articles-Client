import { useForm } from "react-hook-form";
import useArticle from "../../../Hooks/useArticle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Comments = ({ id }) => {

  const { article, refetch } = useArticle()
  const { user } = useSelector((state) => state.auth)

  const postComment = article.filter(item => item._id === id)
  // console.log(postComment[0]?.comments[0]);

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
    const commentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = commentDate.toLocaleDateString('en-US', options); // Format as "Month Day, Year"

    // console.log(article._id);
    const { comment } = data;
    const Comment = { comment, name: user.displayName, image: user.photoURL, date }

    fetch(`https://premium-articles-platform-sever.vercel.app/addComment?id=${postComment[0]?._id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(Comment)
    })
      .then(res => res.json())
      .then(data => {
        reset();
        console.log(data)
        if (data.success === true) {
          refetch();
          reset({ something: "" })
          console.log("Hello");
        }
      });
  }

  return (
    <div>
      {
        postComment[0]?.comments?.map(text =>

          <div key={text._id} className="p-4 my-3 bg-gray-100">
            <div className="flex items-center">
              <img
                className="w-8 rounded-full shadow-md mr-3"
                src={text.comment.image}
                alt="avatar"
              />
              <div>
                <h6 className="font-bold mb-1">{text.comment.name}</h6>
                <p className="text-sm text-gray-500 mb-0">
                  {text.comment.date}
                </p>
              </div>
            </div>

            <p className="mt-3 font-mono mb-4 pb-2">
              {text.comment.comment}
            </p>
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
                src={user?.photoURL}
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


