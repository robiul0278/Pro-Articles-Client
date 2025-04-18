import { useState } from 'react';
import { Search } from 'lucide-react';
import BlogGrid from './BlogGrid';
import CategorySidebar from './CategorySidebar';
// import { blogs } from './data/blogData';
import { categories } from './data/categoryData';
import useArticle from '../../../Hooks/useArticle';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const {article} = useArticle('');


  // Filter blogs based on active category and search term
  const filteredBlogs = article.filter(blog => {
    const matchesCategory = activeCategory === 'all' || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedBlogs = filteredBlogs.slice(0, visibleBlogs);
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleBlogs(6); // Reset visible blogs when category changes
  };

  const handleLoadMore = () => {
    setVisibleBlogs(prev => prev + 3);
  };

  return (
    <div className="px-2 md:px-0 lg:px-0 py-8">
      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-indigo-600">Insight</span>Hub
          </h1>
          <div className="relative w-full md:w-64 lg:w-80">
            <input 
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <p className="text-lg text-gray-600">Discover insightful articles on technology, design, and development</p>
      </header>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar for larger screens */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <CategorySidebar 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Mobile Category Selection */}
        <div className="lg:hidden mb-6">
          <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-1">
            Select Category
          </label>
          <select
            id="category-select"
            className="w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            value={activeCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <BlogGrid blogs={displayedBlogs} />
          
          {visibleBlogs < filteredBlogs.length && (
            <div className="mt-10 text-center">
              <button
                onClick={handleLoadMore}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Load More
              </button>
            </div>
          )}
          
          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what your looking for
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;