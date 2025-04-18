/* eslint-disable react/prop-types */
import BlogCard from './BlogCard';



const BlogGrid = ({ blogs }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogGrid;