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
  colors: ["#FF0000", "#ffffff", "#000000"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JUNE/17/XdVforSW_cfacd00a9a9c44c3a810862f0990453d.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JUNE/17/GEBzF7BU_975621c55b1345f085fcdc1494e05dc2.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JUNE/17/Ahf7N2lA_1df0bd8ed8db414a80c075e848e48fe5.jpg",
    "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JUNE/17/TCSelt2V_b54b31f80bf4400c886476dedcd96116.jpg",
  ],
  // Color-specific images for comparison
  colorImages: {
    "#FF0000": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2025/JUNE/17/XdVforSW_cfacd00a9a9c44c3a810862f0990453d.jpg",
    "#ffffff": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14528020/2023/12/26/8fd99b1b-cf23-4dbd-adef-e94444cc05d81703584461571NikeMenCOURTVISIONSneakers1.jpg",
    "#000000": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17206134/2023/12/13/88163f07-2c99-47c6-8f66-81e56cf77ba81702451322292NikeMenBlackCOURTLEGACYNNSneakers2.jpg",
  },
  // Color names for better display
  colorNames: {
    "#FF0000": "Red",
    "#ffffff": "White", 
    "#000000": "Black",
  },
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
      {/* Compare Colors Modal */}
{compareOpen && (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
    <div className="bg-white w-full max-w-5xl rounded-xl p-6 relative shadow-lg">
      {/* Close Button */}
      <button
        onClick={() => setCompareOpen(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-orange-600">
          Compare Colors
        </h2>
        {compareColors.length > 0 && (
          <button
            onClick={() => setCompareColors([])}
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {compareColors.length > 0 ? (
        <>
          {/* Comparison images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {compareColors.map((color, idx) => (
              <div
                key={idx}
                className="text-center border rounded-lg p-3 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={product.colorImages[color as keyof typeof product.colorImages] || product.images[0]}
                  alt={`Product in ${color}`}
                  className="w-full h-64 object-cover rounded-lg border"
                />
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span
                    className="w-6 h-6 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: color }}
                  ></span>
                  <p className="font-medium text-gray-700">
                    {product.colorNames[color as keyof typeof product.colorNames] || color}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Color checkboxes below images */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {product.colors.map((color) => (
              <label
                key={color}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={compareColors.includes(color)}
                  onChange={() => toggleCompareColor(color)}
                  className="w-5 h-5 accent-orange-500"
                />
                <span
                  className="w-7 h-7 rounded-full border shadow-sm group-hover:scale-110 transition"
                  style={{ backgroundColor: color }}
                ></span>
                <span className="text-sm text-gray-600">
                  {product.colorNames[color as keyof typeof product.colorNames] || color}
                </span>
              </label>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setCompareOpen(false)}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Done
            </button>
            <button
              onClick={() => setCompareColors([])}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear All
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-500 text-center mb-6">
            Select colors to compare. Choose up to 3 colors to see them side by side.
          </p>

          {/* Color checkboxes for empty state */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {product.colors.map((color) => (
              <label
                key={color}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={compareColors.includes(color)}
                  onChange={() => toggleCompareColor(color)}
                  className="w-5 h-5 accent-orange-500"
                />
                <span
                  className="w-7 h-7 rounded-full border shadow-sm group-hover:scale-110 transition"
                  style={{ backgroundColor: color }}
                ></span>
                <span className="text-sm text-gray-600">
                  {product.colorNames[color as keyof typeof product.colorNames] || color}
                </span>
              </label>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setCompareOpen(false)}
              className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  </div>
)}

    </>
  );
}
