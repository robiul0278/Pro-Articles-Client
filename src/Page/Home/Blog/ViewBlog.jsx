/* eslint-disable react/prop-types */
import { useLoaderData} from 'react-router-dom';
import { ArrowLeft, Bookmark, Clock, Share2 } from 'lucide-react';

const ViewBlog = () => {
    const singleArticle = useLoaderData()
    const { image, authorImage, authorName, date, description, title, category } = singleArticle;

    // Use a temporary DOM element to parse and manipulate the HTML safely
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = description;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    // Trim the text to the first 150 characters
    // const truncatedText = textContent.slice(0, 500);
    const truncatedDescription = `<p>${textContent}</p>`;
    const details = <div dangerouslySetInnerHTML={{ __html: truncatedDescription }} />;

    return (
        <article className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Back Button */}
        <button
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Articles
        </button>
  
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              {category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {/* <span>{blog.readTime} min read</span> */}
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
          
          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={authorImage}
                alt={title}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div className="ml-3">
                <p className="font-medium text-gray-900">{authorName}</p>
                <p className="text-sm text-gray-500">
                  {new Date(date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>
  
        {/* Featured Image */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-10">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
            {details}
        </div>
  
        {/* Related Tags */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Topics</h3>
          <div className="flex flex-wrap gap-2">
            {['Web Development', 'Frontend', 'React', 'TypeScript', 'Best Practices'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
};

export default ViewBlog;