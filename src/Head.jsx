import logo from "./assets/logo.png";
function Head({ cartItems, setModel }) {
  console.log(cartItems.length);
  return (
    <nav className="w-[80%] mx-auto flex items-center justify-between font-primary mt-3 sm:gap-3">
      <div className="md:flex-1">
        <div>
          <img src={logo} alt="logo" className="w-[20px] md:w-[50px] inline" />
          <span className="text-sm md:text-base ml-5">DigiMart.</span>
        </div>
      </div>
      <div className="flex-1">
        {/* <ul className="hidden md:flex items-center gap-x-10 justify-center text-base opacity-80">
          <li
            className="hover:border-b-2 hover:border-b-[#083F9B] cursor-pointer"
            onClick={() => showCategory(category)}
          >
            Home
          </li>
          <li className="hover:border-b-2 hover:border-b-[#083F9B] cursor-pointer">
            Clothing
          </li>
          <li className="hover:border-b-2 hover:border-b-[#083F9B] cursor-pointer">
            Jewellary
          </li>
          <li className="hover:border-b-2 hover:border-b-[#083F9B] cursor-pointer">
            Electronics
          </li>
        </ul> */}
      </div>

      <div className="flex-1">
        <div className="md:flex-1 flex justify-center md:gap-8 gap-4 items-center cursor-pointer">
          <div className="relative hidden md:inline">
            <input
              type="text"
              placeholder="Search DigiMart..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2"></i>
          </div>
          {/* <i className="fa-solid fa-heart"></i> */}
          <i className="fa-thin fa-star"></i>
          <i
            className="fa-solid fa-cart-arrow-down relative text-2xl text-[#1B2336] opacity-90"
            onClick={() => setModel()}
          >
            <span className="absolute  text-[12px] text-white rounded-full px-1.5 py-1 top-[-15px] left-[20px] bg-[#fc7b03]">
              {cartItems.length}
            </span>
          </i>
          {/* <i className="fa-solid fa-user"></i> */}
        </div>
      </div>
    </nav>
  );
}
export default Head;
