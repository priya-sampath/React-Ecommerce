function FilterRatings({ ratingArray, selectedRatings, setRating }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-5 ml-5 mt-5">Filter by Ratings</h3>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <ul className="space-y-2">
            {ratingArray.map((rating, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`rating-${index}`}
                  value={rating.id}
                  checked={selectedRatings.includes(rating.id)}
                  onChange={(e) => setRating(rating.id, e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  cursor-pointer accent-blue-600"
                />
                <label
                  htmlFor={`rating-${index}`}
                  className="ml-3 text-sm font-medium text-gray-700 cursor-pointer capitalize"
                >
                  {rating.stars}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default FilterRatings;
