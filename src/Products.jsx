function Products({ prod, setCartValues }) {
  const products = prod;
  const maxStars = 5;
  const starSymbol = "★";
  const stars = starSymbol.repeat(maxStars);

  function addRatingWithFillWidth(rating) {
    let percentage = ((parseFloat(rating) / maxStars) * 100).toFixed(2) + "%";
    return percentage;
  }

  function truncateDescription(text) {
    if (text.length <= 65) {
      return text; // show full content
    }
    return text.slice(0, 65) + "...";
  }

  return (
    <div className="w-[100%] mx-auto flex flex-wrap gap-6 justify-center">
      {products.map((element, index) => (
        <div
          key={index}
          className="w-1/5 rounded-[10px] shadow-md border-1 border-gray-300 "
        >
          <div className="bg-gray-300 p-2 m-0 rounded-t-[10px]">
            <img
              src={element.image}
              alt="product"
              className="w-full h-[200px] object-contain"
            />
          </div>
          <div className="bg-[#FFFFFF] rounded-b-[10px] ">
            <div className="flex justify-between items-center pt-4 text-base font-semibold">
              <div className="ml-4 mr-4">{element.title}</div>
            </div>
            <div className="m-2">
              <div>{truncateDescription(element.description)}</div>
            </div>

            <div className="flex justify-between items-center pt-8 pb-4 text-[10px] opacity-80">
              <div className="ml-4 font-semibold text-xl">
                <div>Rs.{element.price}</div>
                <div className="stars">
                  <span className="stars-background">{stars}</span>
                  <span
                    className="stars-fill"
                    style={{
                      width: `${addRatingWithFillWidth(element.rating.rate)}`,
                    }}
                  >
                    {stars}
                  </span>
                </div>
              </div>

              <div className="mr-4">
                <button
                  className="bg-[#fc7b03] text-white text-base px-1 py-2 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out 
                hover:-translate-y-[3px] active:-translate-y-[1.5px]"
                  onClick={() => setCartValues(element)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Products;
