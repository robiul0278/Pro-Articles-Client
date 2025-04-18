/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Clock, Bookmark, BookmarkCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = (e) => {
    e.preventDefault();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Link
    to={blog?._id ? `/view/${blog?._id}` : "#"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 z-10">
            <button 
              onClick={toggleBookmark}
              className="p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              {isBookmarked ? (
                <BookmarkCheck className="h-5 w-5 text-indigo-600" />
              ) : (
                <Bookmark className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-3 left-3 text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-800">
            {blog.category}
          </span>
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {/* {blog.excerpt} */}
            </p>
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center">
              <img 
                src={blog.authorImage} 
                alt={blog.authorName} 
                className="w-8 h-8 rounded-full object-cover border border-gray-200"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">
                {blog.authorName}
              </span>
            </div>
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {/* <span className="text-xs">{blog.readTime} min read</span> */}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;