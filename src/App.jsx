import { useEffect, useState } from "react";
import "./App.css";
import Head from "./Head";
import Banner from "./Banner";
import Products from "./Products";
import FilterCategory from "./FilterCategory";
import FilterRatings from "./FilterRatings";
import FilterPrice from "./FilterPrice";
import DigiCartModel from "./DigiCartModel";

export default function App() {
  const [initialProducts, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(0);
  const [checkModelState, setModelState] = useState(false);

  async function getProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      alert("Failed to load Data");
    }
  }

  const setCartValues = (cartvalue) => {
    cartItems.some((item) => item.id === cartvalue.id)
      ? alert("Product already added to cart")
      : setCartItems([...cartItems, { ...cartvalue, quantity: 1 }]);
  };

  const setPriceRange = (price) => {
    setSelectedPriceRange(price);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeCartItem(productId);
      return;
    }

    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeCartItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const setModel = () => {
    setModelState(!checkModelState);
  };

  function setCategory(category, isChecked) {
    setSelectedCategories((item) =>
      isChecked ? [...item, category] : item.filter((item) => item !== category)
    );
  }
  function setRating(rating, isChecked) {
    setSelectedRatings((item) =>
      isChecked ? [...item, rating] : item.filter((item) => item !== rating)
    );
  }

  useEffect(function () {
    getProducts();
  }, []);

  const categories = [...new Set(initialProducts.map((p) => p.category))];
  const ratingArray = [
    {
      id: 4,
      stars: (
        <div>
          <i className="fa-solid fa-star text-[#f2c307]"></i>
          <i className="fa-solid fa-star text-[#f2c307]"></i>
          <i className="fa-solid fa-star text-[#f2c307]"></i>
          <i className="fa-solid fa-star text-[#f2c307]"></i>
          <i className="fa-solid fa-star"></i> & Up
        </div>
      ),
    },
    {
      id: 3,
      stars: (
        <div>
          <i className="fa-solid fa-star text-[#f2c307]"></i>
          <i className="fa-solid fa-star text-[#f2c307]"></i>
          <i className="fa-solid fa-star text-[#f2c307]"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i> & Up
        </div>
      ),
    },
    {
      id: 2,
      stars: (
        <div>
          <i className="fa-solid fa-star text-[#f2c307]"></i>
          <i className="fa-solid fa-star text-[#f2c307]"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i> & Up
        </div>
      ),
    },
    {
      id: 1,
      stars: (
        <div>
          <i className="fa-solid fa-star text-[#f2c307]"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i> & Up
        </div>
      ),
    },
  ];

  const productsFunction = () => {
    let categoryFilterArray =
      selectedCategories.length === 0
        ? initialProducts // Show all if nothing selected
        : initialProducts.filter((product) =>
            selectedCategories.includes(product.category)
          );

    let ratingFilterArray =
      selectedRatings.length === 0
        ? categoryFilterArray
        : categoryFilterArray.filter((product) =>
            selectedRatings.some((ratingId) => product.rating.rate >= ratingId)
          );

    let priceFilterArray =
      selectedPriceRange === 0
        ? ratingFilterArray
        : ratingFilterArray.filter(
            (product) => parseInt(product.price) <= selectedPriceRange
          );
    return priceFilterArray;
  };
  const products = productsFunction();
  return (
    <div>
      <Head cartItems={cartItems} setModel={setModel}></Head>
      <DigiCartModel
        checkModelState={checkModelState}
        closeModel={() => setModelState(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeCartItem={removeCartItem}
      ></DigiCartModel>
      <Banner />
      <div className="w-full flex ">
        <div className="w-1/5 border-r-[0.5px] border-gray-300">
          <FilterCategory
            categories={categories}
            setCategory={setCategory}
            selectedCategories={selectedCategories}
          ></FilterCategory>
          <FilterRatings
            ratingArray={ratingArray}
            selectedRatings={selectedRatings}
            setRating={setRating}
          ></FilterRatings>
          <FilterPrice
            selectedPriceRange={selectedPriceRange}
            setPriceRange={setPriceRange}
          ></FilterPrice>
        </div>
        <div className="w-4/5">
          <Products prod={products} setCartValues={setCartValues}></Products>
        </div>
      </div>
      <ul></ul>
    </div>
  );
}
