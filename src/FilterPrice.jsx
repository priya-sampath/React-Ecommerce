function FilterPrice({ selectedPriceRange, setPriceRange }) {
  return (
    <div className="pt-4 ml-5">
      <h3 className="text-xl font-bold mb-5  mt-5">Filter by Price</h3>

      <div className="mb-4 w-full flex flex-col">
        <label className="block text-sm font-medium text-gray-700 mb-5">
          Up to: Rs.{selectedPriceRange}
        </label>
        <input
          type="range"
          min="5"
          max="1000"
          step="10"
          value={selectedPriceRange}
          onChange={(e) => setPriceRange(parseInt(e.target.value))}
          className=" w-3/4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1 mr-10">
          <span>Rs.5</span>
          <span>Rs.1000</span>
        </div>
      </div>
    </div>
  );
}
export default FilterPrice;
