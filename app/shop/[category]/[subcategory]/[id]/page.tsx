// // app/product/page.tsx
// "use client";

// import { useState } from "react";
// import { Heart, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

// const product = {
//   title: "Modern Stylish Jacket",
//   description:
//     "A sleek and stylish jacket perfect for all seasons. Crafted with premium materials for maximum comfort and durability.",
//   price: 2499,
//   colors: ["#f97316", "#ffffff", "#000000"],
//   sizes: ["S", "M", "L", "XL"],
//   images: [
//     "/images/jacket1.jpg",
//     "/images/jacket2.jpg",
//     "/images/jacket3.jpg",
//     "/images/jacket4.jpg",
//   ],
//   details: "Made from 100% organic cotton. Machine washable. Imported.",
//   reviews: [
//     { name: "Amit", rating: 5, comment: "Amazing quality, fits perfectly!" },
//     { name: "Priya", rating: 4, comment: "Looks great, slightly loose fit." },
//   ],
// };

// export default function ProductPage() {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

//   const nextImage = () =>
//     setSelectedImage((prev) => (prev + 1) % product.images.length);
//   const prevImage = () =>
//     setSelectedImage(
//       (prev) => (prev - 1 + product.images.length) % product.images.length
//     );

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
//       {/* Left - Main Image, Thumbnails, Colors */}
//       <div className="flex flex-col items-center">
//         {/* Main Image */}
//         <div className="relative w-full max-w-md bg-orange-50 p-4 rounded-lg shadow-md">
//           <img
//             src={product.images[selectedImage]}
//             alt="Product"
//             className="w-full h-[500px] object-cover rounded-lg border-4 border-orange-400"
//           />
//           <button
//             onClick={prevImage}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-orange-100"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={nextImage}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-orange-100"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Thumbnails */}
//         <div className="flex gap-4 mt-4">
//           {product.images.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`Thumbnail ${idx + 1}`}
//               className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-transform ${
//                 selectedImage === idx
//                   ? "border-orange-500 scale-105"
//                   : "border-gray-300 hover:scale-105"
//               }`}
//               onClick={() => setSelectedImage(idx)}
//             />
//           ))}
//         </div>

//         {/* Color Options */}
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold text-orange-600">Choose Color:</h3>
//           <div className="flex gap-3 mt-3">
//             {product.colors.map((color) => (
//               <button
//                 key={color}
//                 style={{ backgroundColor: color }}
//                 className={`w-10 h-10 rounded-full border-2 ${
//                   selectedColor === color
//                     ? "border-orange-500 ring-2 ring-orange-400"
//                     : "border-gray-300"
//                 }`}
//                 onClick={() => setSelectedColor(color)}
//               ></button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right - Product Info (Unchanged) */}
//       <div>
//         <h1 className="text-3xl font-bold">{product.title}</h1>
//         <p className="text-gray-600 mt-3">{product.description}</p>
//         <p className="text-2xl font-semibold mt-4">₹{product.price}</p>

//         {/* Sizes */}
//         <div className="mt-6">
//           <h3 className="font-medium mb-2">Size</h3>
//           <div className="flex gap-3">
//             {product.sizes.map((size) => (
//               <button
//                 key={size}
//                 className={`px-4 py-2 border rounded-lg ${
//                   selectedSize === size
//                     ? "border-orange-500 bg-orange-500 text-white"
//                     : "border-gray-300 hover:border-orange-500"
//                 }`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-8 flex gap-4">
//           <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
//             <ShoppingCart className="w-5 h-5" /> Add to Cart
//           </button>
//           <button className="p-3 border rounded-lg hover:bg-orange-100">
//             <Heart className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Product Details */}
//         <div className="mt-10">
//           <h3 className="text-lg font-semibold">Product Details</h3>
//           <p className="text-gray-600 mt-2">{product.details}</p>
//         </div>

//         {/* Reviews */}
//         <div className="mt-8">
//           <h3 className="text-lg font-semibold">Customer Reviews</h3>
//           <div className="mt-3 space-y-3">
//             {product.reviews.map((r, idx) => (
//               <div key={idx} className="border-b pb-3">
//                 <p className="font-medium">{r.name}</p>
//                 <p className="text-yellow-500">
//                   {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
//                 </p>
//                 <p className="text-gray-600">{r.comment}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// app/product/page.tsx
"use client";

import { useState } from "react";
import {
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const product = {
  title: "Modern Stylish Jacket",
  description:
    "A sleek and stylish jacket perfect for all seasons. Crafted with premium materials for maximum comfort and durability.",
  price: 2499,
  colors: ["#f97316", "#ffffff", "#000000"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "/images/jacket1.jpg",
    "/images/jacket2.jpg",
    "/images/jacket3.jpg",
    "/images/jacket4.jpg",
  ],
  details: "Made from 100% organic cotton. Machine washable. Imported.",
  reviews: [
    { name: "Amit", rating: 5, comment: "Amazing quality, fits perfectly!" },
    { name: "Priya", rating: 4, comment: "Looks great, slightly loose fit." },
  ],
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const [compareOpen, setCompareOpen] = useState(false);
  const [compareColors, setCompareColors] = useState<string[]>([]);

  const nextImage = () =>
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () =>
    setSelectedImage(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );

  const toggleCompareColor = (color: string) => {
    setCompareColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };
  

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        {/* Left - Main Image, Thumbnails, Colors */}
        <div className="flex flex-col items-center">
          {/* Main Image */}
          <div className="relative w-full max-w-md bg-orange-50 p-4 rounded-lg shadow-md">
            <img
              src={product.images[selectedImage]}
              alt="Product"
              className="w-full h-[500px] object-cover rounded-lg border-4 border-orange-400"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-orange-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-orange-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-transform ${
                  selectedImage === idx
                    ? "border-orange-500 scale-105"
                    : "border-gray-300 hover:scale-105"
                }`}
                onClick={() => setSelectedImage(idx)}
              />
            ))}
          </div>

          {/* Color Options + Compare Button */}
          <div className="mt-6 w-full text-center">
            <h3 className="text-lg font-semibold text-orange-600">
              Choose Color:
            </h3>
            <div className="flex gap-3 mt-3 justify-center">
              {product.colors.map((color) => (
                <button
                  key={color}
                  style={{ backgroundColor: color }}
                  className={`w-10 h-10 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-orange-500 ring-2 ring-orange-400"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedColor(color)}
                ></button>
              ))}
            </div>
            <button
              onClick={() => setCompareOpen(true)}
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Compare Colors
            </button>
          </div>
        </div>

        {/* Right - Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-3">{product.description}</p>
          <p className="text-2xl font-semibold mt-4">₹{product.price}</p>

          {/* Sizes */}
          <div className="mt-6">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-gray-300 hover:border-orange-500"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <button className="p-3 border rounded-lg hover:bg-orange-100">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Product Details */}
          <div className="mt-10">
            <h3 className="text-lg font-semibold">Product Details</h3>
            <p className="text-gray-600 mt-2">{product.details}</p>
          </div>

          {/* Reviews */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
            <div className="mt-3 space-y-3">
              {product.reviews.map((r, idx) => (
                <div key={idx} className="border-b pb-3">
                  <p className="font-medium">{r.name}</p>
                  <p className="text-yellow-500">
                    {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                  </p>
                  <p className="text-gray-600">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Compare Colors Modal */}
      {compareOpen && (
        // <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
        //   <div className="bg-white w-full max-w-4xl rounded-lg p-6 relative">
        //     <button
        //       onClick={() => setCompareOpen(false)}
        //       className="absolute top-4 right-4 text-gray-500 hover:text-black"
        //     >
        //       <X className="w-6 h-6" />
        //     </button>
        //     <h2 className="text-2xl font-bold mb-4 text-orange-600">
        //       Compare Colors
        //     </h2>

        //     {/* Color checkboxes */}
        //     <div className="flex gap-4 mb-6">
        //       {product.colors.map((color) => (
        //         <label key={color} className="flex items-center gap-2">
        //           <input
        //             type="checkbox"
        //             checked={compareColors.includes(color)}
        //             onChange={() => toggleCompareColor(color)}
        //           />
        //           <span
        //             className="w-6 h-6 rounded-full border"
        //             style={{ backgroundColor: color }}
        //           ></span>
        //         </label>
        //       ))}
        //     </div>

        //     {/* Comparison images */}
        //     {compareColors.length > 0 ? (
        //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        //         {compareColors.map((color, idx) => (
        //           <div key={idx} className="text-center">
        //             <img
        //               src={product.images[idx % product.images.length]}
        //               alt="Comparison"
        //               className="w-full h-64 object-cover rounded-lg border"
        //             />
        //             <p className="mt-2">{color}</p>
        //           </div>
        //         ))}
        //       </div>
        //     ) : (
        //       <p className="text-gray-500">Select colors to compare.</p>
        //     )}
        //   </div>
        // </div>
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
  <div className="bg-white w-full max-w-4xl rounded-lg p-6 relative">
    <button
      onClick={() => setCompareOpen(false)}
      className="absolute top-4 right-4 text-gray-500 hover:text-black"
    >
      <X className="w-6 h-6" />
    </button>

    <h2 className="text-2xl font-bold mb-4 text-orange-600">
      Compare Colors
    </h2>

    {/* Comparison images */}
    {compareColors.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {compareColors.map((color, idx) => (
          <div key={idx} className="text-center">
            {/* Slider for each color */}
            <div className="relative w-full h-64 overflow-hidden rounded-lg border">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${sliderIndex[color] * 100}%)`,
                  width: `${product.images.length * 100}%`
                }}
              >
                {product.images.map((img, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={img}
                    alt={`${color} view ${imgIdx + 1}`}
                    className="w-full h-64 object-cover flex-shrink-0"
                    style={{ width: "100%" }}
                  />
                ))}
              </div>
              {/* Prev Button */}
              <button
                onClick={() => prevSlide(color)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow"
              >
                ◀
              </button>
              {/* Next Button */}
              <button
                onClick={() => nextSlide(color)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow"
              >
                ▶
              </button>
            </div>
            <p className="mt-2 font-medium">{color}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500 mb-6">Select colors to compare.</p>
    )}

    {/* Color checkboxes BELOW images */}
    <div className="flex gap-4 justify-center">
      {product.colors.map((color) => (
        <label key={color} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={compareColors.includes(color)}
            onChange={() => toggleCompareColor(color)}
          />
          <span
            className="w-6 h-6 rounded-full border"
            style={{ backgroundColor: color }}
          ></span>
        </label>
      ))}
    </div>
  </div>
</div>

      )}
    </>
  );
}
