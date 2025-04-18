/* eslint-disable react/prop-types */

const CategorySidebar = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
      
      <ul className="space-y-1">
        <li>
          <button
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
              activeCategory === 'all'
                ? 'bg-indigo-50 text-indigo-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => onCategoryChange('all')}
          >
            All Articles
          </button>
        </li>
        
        {categories.map(category => (
          <li key={category.id}>
            <button
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-indigo-50 text-indigo-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="flex items-center">
                <span 
                  className="w-2 h-2 rounded-full mr-2" 
                  style={{ backgroundColor: category.color }}
                />
                {category.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
      
      <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
        <h3 className="text-sm font-medium text-indigo-900 mb-2">Looking for something?</h3>
        <p className="text-xs text-indigo-700 mb-3">
          Browse our categories or use the search bar to find specific topics.
        </p>
      </div>
    </div>
  );
};

export default CategorySidebar;