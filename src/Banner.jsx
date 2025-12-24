import b1 from "./assets/banner/b1.jpg";
import b2 from "./assets/banner/b2.jpg";
import b3 from "./assets/banner/b3.jpg";
import b4 from "./assets/banner/b4.jpg";
import b5 from "./assets/banner/b5.jpg";
import b6 from "./assets/banner/b6.jpg";
import { useEffect, useState } from "react";
function Banner() {
  const productImages = [b1, b2, b3, b4, b5, b6];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? productImages.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === productImages.length - 1 ? 0 : current + 1);
  };

  useEffect(function () {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl">
      <div>
        {productImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="banner"
            className={`absolute w-full h-full object-contain transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button> */}

      {/* <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button> */}
    </div>
  );
}
export default Banner;
