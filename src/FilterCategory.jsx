function FilterCategory({ categories, selectedCategories, setCategory }) {
  console.log(categories);
  return (
    <div>
      <h3 className="text-xl font-bold mb-5 ml-5">Filter by Categories</h3>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={(e) => setCategory(category, e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  cursor-pointer accent-blue-600"
                />
                <label
                  htmlFor={`category-${index}`}
                  className="ml-3 text-sm font-medium text-gray-700 cursor-pointer capitalize"
                >
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default FilterCategory;
