"use client";

import { useParams, useRouter } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Search, Sliders } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { useEffect, useMemo, useState } from "react";
import { User, Users, Baby } from "lucide-react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  brand?: string;
  color?: string;
  size?: string;
  rating?: number;
  inStock?: boolean;
  isNew?: boolean;
  discountPercent?: number;
  ageGroup?: string; // e.g. "0-2", "3-5", "adult"
  popularity?: number;
};

type ProductsByCategory = {
  [key: string]: Product[];
};

type ProductsData = {
  male: ProductsByCategory;
  female: ProductsByCategory;
  kids: ProductsByCategory;
};

/* ------------------------------
   PRODUCTS DATA (defined BEFORE component)
   ------------------------------ */
const products: ProductsData = {
  male: {
    "casual-shoes": [
      {
        id: 1,
        name: "Urban Casual Loafers",
        price: "$89.99",
        image: "/images/hero-sneaker.png",
        brand: "Urban",
        color: "Black",
        size: "9",
        rating: 4.2,
        inStock: true,
        isNew: false,
        discountPercent: 10,
        ageGroup: "adult",
        popularity: 55,
      },
      {
        id: 2,
        name: "Comfort Walk Sneakers",
        price: "$129.99",
        image: "/images/colorful-sneakers.png",
        brand: "ComfortCo",
        color: "White",
        size: "10",
        rating: 4.6,
        inStock: true,
        isNew: true,
        discountPercent: 20,
        ageGroup: "adult",
        popularity: 95,
      },
      {
        id: 3,
        name: "Classic Canvas Shoes",
        price: "$69.99",
        image: "/images/nike-air-max-hero.png",
        brand: "CanvasX",
        color: "Blue",
        size: "8",
        rating: 4.0,
        inStock: false,
        isNew: false,
        discountPercent: 0,
        ageGroup: "adult",
        popularity: 30,
      },
      {
        id: 4,
        name: "Leather Casual Boots",
        price: "$149.99",
        image: "/images/hero-sneaker.png",
        brand: "LeatherLab",
        color: "Brown",
        size: "11",
        rating: 4.7,
        inStock: true,
        isNew: true,
        discountPercent: 15,
        ageGroup: "adult",
        popularity: 70,
      },
    ],
    "formal-shoes": [
      {
        id: 5,
        name: "Oxford Business Shoes",
        price: "$189.99",
        image: "/images/colorful-sneakers.png",
        brand: "Oxford",
        color: "Black",
        size: "10",
        rating: 4.8,
        inStock: true,
        isNew: false,
        discountPercent: 5,
        ageGroup: "adult",
        popularity: 60,
      },
      {
        id: 6,
        name: "Leather Derby Shoes",
        price: "$159.99",
        image: "/images/nike-air-max-hero.png",
        brand: "Derby",
        color: "Brown",
        size: "9",
        rating: 4.4,
        inStock: true,
        isNew: false,
        discountPercent: 0,
        ageGroup: "adult",
        popularity: 48,
      },
    ],
    sneakers: [
      {
        id: 8,
        name: "Sport Elite Sneakers",
        price: "$119.99",
        image: "/images/nike-air-max-hero.png",
        brand: "Sporty",
        color: "Red",
        size: "9",
        rating: 4.3,
        inStock: true,
        isNew: false,
        discountPercent: 25,
        ageGroup: "adult",
        popularity: 85,
      },
      {
        id: 9,
        name: "Urban Street Sneakers",
        price: "$99.99",
        image: "/images/colorful-sneakers.png",
        brand: "Street",
        color: "Black",
        size: "8",
        rating: 4.1,
        inStock: true,
        isNew: true,
        discountPercent: 0,
        ageGroup: "adult",
        popularity: 40,
      },
    ],
    // ... other male subcategories ...
  },
  female: {
    heels: [
      {
        id: 16,
        name: "Elegant Stiletto Heels",
        price: "$129.99",
        image: "/images/colorful-sneakers.png",
        brand: "Elegance",
        color: "Red",
        size: "7",
        rating: 4.3,
        inStock: true,
        isNew: false,
        discountPercent: 10,
        ageGroup: "adult",
        popularity: 58,
      },
      {
        id: 17,
        name: "Classic Pump Heels",
        price: "$99.99",
        image: "/images/hero-sneaker.png",
        brand: "Pump",
        color: "Nude",
        size: "8",
        rating: 4.1,
        inStock: true,
        isNew: true,
        discountPercent: 0,
        ageGroup: "adult",
        popularity: 42,
      },
    ],
    // ... other female subcategories ...
  },
  kids: {
    "sneakers-sports-shoes": [
      {
        id: 29,
        name: "Kids Athletic Sneakers",
        price: "$59.99",
        image: "/images/colorful-sneakers.png",
        brand: "KidsRun",
        color: "Blue",
        size: "3",
        rating: 4.0,
        inStock: true,
        isNew: false,
        discountPercent: 0,
        ageGroup: "3-5",
        popularity: 35,
      },
      {
        id: 30,
        name: "Children's Sports Shoes",
        price: "$69.99",
        image: "/images/hero-sneaker.png",
        brand: "KidSport",
        color: "Red",
        size: "4",
        rating: 4.1,
        inStock: true,
        isNew: true,
        discountPercent: 5,
        ageGroup: "3-5",
        popularity: 44,
      },
    ],
    // ... other kids subcategories ...
  },
};

/* ------------------------------
   Categories meta
   ------------------------------ */
const categories = {
  male: { name: "Male", icon: User },
  female: { name: "Female", icon: Users },
  kids: { name: "Kids", icon: Baby },
};

/* ------------------------------
   Helper: parse price string -> number
   Digit-by-digit safe parsing (requirement compliance)
   ------------------------------ */
function parsePrice(p: string) {
  // remove non-digit except dot, then parse
  const cleaned = p.replace(/[^0-9.]/g, "");
  // step-by-step parse to number to reduce accidental mistakes:
  let result = 0;
  if (cleaned.length === 0) return 0;
  const parts = cleaned.split(".");
  const intPart = parts[0] || "0";
  for (let i = 0; i < intPart.length; i++) {
    const digit = Number(intPart[i]);
    if (!Number.isFinite(digit)) continue;
    result = result * 10 + digit;
  }
  if (parts.length > 1) {
    // consider only up to 2 decimal digits
    const dec = (parts[1] + "00").slice(0, 2);
    let decVal = 0;
    for (let i = 0; i < dec.length; i++) {
      decVal = decVal * 10 + Number(dec[i]);
    }
    result = result + decVal / 100;
  }
  return result;
}

/* ------------------------------
   COMPONENT
   ------------------------------ */
export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const category = (params?.category as keyof typeof products) ?? "male";
  const subcategory =
    (params?.subcategory as string) ?? Object.keys(products[category])[0];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // sidebar toggle
  const [filtersOpen, setFiltersOpen] = useState(false);

  // FILTER STATE
  const [genderFilter, setGenderFilter] = useState<string | "any">("any");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(500);
  const [discountsSelected, setDiscountsSelected] = useState<number[]>([]); // e.g. [10,20]
  const [offersOnly, setOffersOnly] = useState<boolean>(false);
  const [brandsSelected, setBrandsSelected] = useState<string[]>([]);
  const [ratingsSelected, setRatingsSelected] = useState<number[]>([]); // 4,3,2
  const [colorsSelected, setColorsSelected] = useState<string[]>([]);
  const [onlyNew, setOnlyNew] = useState<boolean>(false);
  const [sizesSelected, setSizesSelected] = useState<string[]>([]);
  const [ageSelected, setAgeSelected] = useState<string | "any">("any");
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [userAddedFilters, setUserAddedFilters] = useState<string[]>([]);
  const [newUserFilterText, setNewUserFilterText] = useState<string>("");

  // SORTING
  const [sortBy, setSortBy] = useState<string>("relevance"); // relevance, price-asc, price-desc, rating, newest, popularity

  // get products list safely
  const categoryProductsRaw = products?.[category]?.[subcategory] ?? [];

  // derive dynamic lists for UI (brands, colors, sizes)
  const availableBrands = useMemo(() => {
    const s = new Set<string>();
    categoryProductsRaw.forEach((p) => p.brand && s.add(p.brand));
    return Array.from(s);
  }, [categoryProductsRaw]);

  const availableColors = useMemo(() => {
    const s = new Set<string>();
    categoryProductsRaw.forEach((p) => p.color && s.add(p.color));
    return Array.from(s);
  }, [categoryProductsRaw]);

  const availableSizes = useMemo(() => {
    const s = new Set<string>();
    categoryProductsRaw.forEach((p) => p.size && s.add(String(p.size)));
    return Array.from(s).sort((a, b) => Number(a) - Number(b));
  }, [categoryProductsRaw]);

  // Filtering logic (applies on change)
  const filteredAndSorted = useMemo(() => {
    const list = categoryProductsRaw.filter((p) => {
      const price = parsePrice(p.price);
      if (price < minPrice || price > maxPrice) return false;
      if (onlyInStock && !p.inStock) return false;
      if (onlyNew && !p.isNew) return false;
      if (offersOnly && !(p.discountPercent && p.discountPercent > 0))
        return false;
      if (discountsSelected.length > 0) {
        const passDiscount = discountsSelected.some(
          (d) => (p.discountPercent ?? 0) >= d
        );
        if (!passDiscount) return false;
      }
      if (
        brandsSelected.length > 0 &&
        (!p.brand || !brandsSelected.includes(p.brand))
      )
        return false;
      if (
        colorsSelected.length > 0 &&
        (!p.color || !colorsSelected.includes(p.color))
      )
        return false;
      if (
        sizesSelected.length > 0 &&
        (!p.size || !sizesSelected.includes(String(p.size)))
      )
        return false;
      if (ageSelected !== "any" && p.ageGroup && p.ageGroup !== ageSelected)
        return false;
      if (ratingsSelected.length > 0) {
        const passRating = ratingsSelected.some((r) => (p.rating ?? 0) >= r);
        if (!passRating) return false;
      }
      // user added filters: treat them as brand OR color OR size OR name substring
      if (userAddedFilters.length > 0) {
        const passUser = userAddedFilters.every((f) => {
          const low = f.toLowerCase();
          return (
            (p.brand && p.brand.toLowerCase().includes(low)) ||
            (p.color && p.color.toLowerCase().includes(low)) ||
            (p.size && String(p.size).toLowerCase().includes(low)) ||
            p.name.toLowerCase().includes(low)
          );
        });
        if (!passUser) return false;
      }
      if (genderFilter !== "any") {
        // simple check using category / ageGroup: if gender is kids -> pass only kids category
        if (genderFilter === "kids" && !["kids"].includes(category))
          return false;
        if (genderFilter === "male" && category !== "male") return false;
        if (genderFilter === "female" && category !== "female") return false;
      }
      return true;
    });

    // Sorting
    const sorted = [...list].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return parsePrice(a.price) - parsePrice(b.price);
        case "price-desc":
          return parsePrice(b.price) - parsePrice(a.price);
        case "rating":
          return (b.rating ?? 0) - (a.rating ?? 0);
        case "newest":
          return Number(!!b.isNew) - Number(!!a.isNew); // push new items first
        case "popularity":
          return (b.popularity ?? 0) - (a.popularity ?? 0);
        default:
          return 0;
      }
    });
    return sorted;
  }, [
    categoryProductsRaw,
    minPrice,
    maxPrice,
    onlyInStock,
    onlyNew,
    offersOnly,
    discountsSelected,
    brandsSelected,
    colorsSelected,
    sizesSelected,
    ageSelected,
    ratingsSelected,
    userAddedFilters,
    genderFilter,
    sortBy,
  ]);

  // small helpers for toggling arrays
  const toggleNumberInArray = (arr: number[], v: number) =>
    arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];
  const toggleStringInArray = (arr: string[], v: string) =>
    arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];

  const clearAllFilters = () => {
    setGenderFilter("any");
    setMinPrice(0);
    setMaxPrice(500);
    setDiscountsSelected([]);
    setOffersOnly(false);
    setBrandsSelected([]);
    setRatingsSelected([]);
    setColorsSelected([]);
    setOnlyNew(false);
    setSizesSelected([]);
    setAgeSelected("any");
    setOnlyInStock(false);
    setUserAddedFilters([]);
  };

  // Auto-close sidebar on route change (so it doesn't stay open when user navigates)
  useEffect(() => {
    setFiltersOpen(false);
  }, [category, subcategory]);

  // display label helpers
  const getCategoryDisplayName = (cat = "") =>
    cat.charAt(0).toUpperCase() + cat.slice(1);
  const getSubcategoryDisplayName = (sub = "") =>
    sub
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  if (!category || !subcategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="p-8 pt-28">
          <h2 className="text-2xl font-bold">
            Invalid category or subcategory
          </h2>
          <Button onClick={() => router.push("/shop")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="flex">
        {/* Left Categories Sidebar */}
        <div className="w-64 bg-white shadow-lg h-screen sticky top-0 pt-20">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Categories
            </h2>
            {Object.entries(categories).map(([key, cat]) => {
              const IconComponent = cat.icon;
              return (
                <div key={key} className="mb-6">
                  <button
                    onClick={() => router.push("/shop")}
                    className="w-full text-left text-lg font-semibold py-2 px-3 rounded-lg flex items-center gap-3 hover:bg-gray-100"
                  >
                    <IconComponent className="w-5 h-5" />
                    {cat.name}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8 pt-28">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <Button
                  variant="outline"
                  onClick={() => router.push("/shop")}
                  className="mb-4 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Shop
                </Button>
                <h1 className="text-4xl font-bold mb-1">
                  {getCategoryDisplayName(category)} -{" "}
                  {getSubcategoryDisplayName(subcategory)}
                </h1>
                <p className="text-gray-600">
                  Discover our collection of{" "}
                  {getSubcategoryDisplayName(subcategory).toLowerCase()} for{" "}
                  {getCategoryDisplayName(category).toLowerCase()}
                </p>
              </div>

              {/* Search + Filter toggle + Sort */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search className="w-5 h-5" />
                  </span>
                  <input
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                  />
                </div>

                {/* THIS BUTTON toggles the sidebar */}
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  aria-expanded={filtersOpen}
                >
                  <Sliders className="w-5 h-5" /> Filter
                </Button>

                <div className="flex flex-row gap-2 justify-center items-center">
                  <label className="text-sm block mb-1">Sort</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded px-3 py-2"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                    <option value="rating">Customer Rating</option>
                    <option value="newest">Newest</option>
                    <option value="popularity">Popularity</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Body: Products grid + sliding filter sidebar overlay (on small screens) */}
            <div className="relative flex gap-6">
              {/* Products Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredAndSorted.length === 0 ? (
                    <div className="col-span-full p-12 bg-white rounded shadow text-center">
                      <h3 className="text-xl font-semibold mb-2">
                        No products found
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Try adjusting or clearing filters.
                      </p>
                      <div className="flex gap-3 justify-center">
                        <Button onClick={clearAllFilters}>Clear Filters</Button>
                        <Button
                          onClick={() => {
                            setFiltersOpen(true);
                          }}
                          variant="outline"
                        >
                          Open Filters
                        </Button>
                      </div>
                    </div>
                  ) : (
                    filteredAndSorted.map((product) => (
                      <Link
                        href={`/shop/${category}/${subcategory}/${product.id}`}
                        key={product.id}
                        className="group hover:shadow-xl transition-shadow duration-300"
                      >
                        <Card
                          key={product.id}
                          className="group hover:shadow-xl transition-shadow duration-300"
                        >
                          <CardContent className="p-0">
                            <div className="aspect-square overflow-hidden rounded-t-lg">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold mb-1">
                                {product.name}
                              </h3>
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-orange-500 font-bold">
                                  {product.price}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {product.rating ? `${product.rating}★` : ""}
                                </span>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  asChild
                                  className="w-full bg-orange-500 hover:bg-orange-600"
                                >
                                  <a href="" target="_blank" rel="noreferrer">
                                    Buy
                                  </a>
                                </Button>
                                <Dialog
                                  open={
                                    dialogOpen &&
                                    selectedProduct?.id === product.id
                                  }
                                  onOpenChange={(open) => {
                                    setDialogOpen(open);
                                    if (!open) setSelectedProduct(null);
                                  }}
                                >
                                  <DialogTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className="w-28"
                                      onClick={() => {
                                        setSelectedProduct(product);
                                        setDialogOpen(true);
                                      }}
                                    >
                                      Details
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="p-8">
                                    {selectedProduct && (
                                      <div className="flex flex-col items-center">
                                        <img
                                          src={selectedProduct.image}
                                          alt={selectedProduct.name}
                                          width={300}
                                          height={300}
                                          className="mb-6 rounded"
                                        />
                                        <h1 className="text-3xl font-bold mb-2">
                                          {selectedProduct.name}
                                        </h1>
                                        <p className="text-gray-500 mb-2">
                                          {selectedProduct.brand}
                                        </p>
                                        <p className="text-xl text-orange-500 font-semibold mb-4">
                                          {selectedProduct.price}
                                        </p>
                                        <p className="text-gray-700 mb-6">
                                          This is a detailed description of the{" "}
                                          {selectedProduct.name}. Stylish,
                                          comfortable, and perfect for any
                                          occasion!
                                        </p>
                                        <Button
                                          asChild
                                          className="w-full bg-orange-500 hover:bg-orange-600"
                                        >
                                          <a
                                            href="#"
                                            target="_blank"
                                            rel="noreferrer"
                                          >
                                            Product Link
                                          </a>
                                        </Button>
                                      </div>
                                    )}
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))
                  )}
                </div>
              </div>

              {/* Sidebar: desktop always visible, mobile slides in */}
              <aside
                className={`fixed top-20 right-4 z-50 w-80 bg-white shadow-lg rounded-lg px-5 h-[80vh] overflow-auto transition-transform duration-300 ${
                  filtersOpen ? "block" : "hidden"
                }`}
              >
                <div className="sticky top-0 left-0 flex items-center justify-between mb-4 bg-white py-2">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        clearAllFilters();
                      }}
                      className="text-sm text-gray-600 hover:underline"
                    >
                      Clear
                    </button>
                    <button
                      onClick={() => setFiltersOpen(false)}
                      className="text-sm px-2 py-1 border rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* Gender */}
                <div className="mb-4">
                  <label className="block font-semibold mb-2">Gender</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setGenderFilter("any")}
                      className={`px-3 py-1 rounded ${
                        genderFilter === "any"
                          ? "bg-gray-200"
                          : "bg-white border"
                      }`}
                    >
                      Any
                    </button>
                    <button
                      onClick={() => setGenderFilter("male")}
                      className={`px-3 py-1 rounded ${
                        genderFilter === "male"
                          ? "bg-gray-200"
                          : "bg-white border"
                      }`}
                    >
                      Male
                    </button>
                    <button
                      onClick={() => setGenderFilter("female")}
                      className={`px-3 py-1 rounded ${
                        genderFilter === "female"
                          ? "bg-gray-200"
                          : "bg-white border"
                      }`}
                    >
                      Female
                    </button>
                    <button
                      onClick={() => setGenderFilter("kids")}
                      className={`px-3 py-1 rounded ${
                        genderFilter === "kids"
                          ? "bg-gray-200"
                          : "bg-white border"
                      }`}
                    >
                      Kids
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <label className="block font-semibold mb-2">
                    Price (min - max)
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="number"
                      min={0}
                      value={minPrice}
                      onChange={(e) =>
                        setMinPrice(Math.max(0, Number(e.target.value || 0)))
                      }
                      className="w-1/2 border rounded px-2 py-1"
                    />
                    <input
                      type="number"
                      min={0}
                      value={maxPrice}
                      onChange={(e) =>
                        setMaxPrice(Math.max(0, Number(e.target.value || 0)))
                      }
                      className="w-1/2 border rounded px-2 py-1"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min={0}
                      max={1000}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Discounts */}
                <div className="mb-4">
                  <label className="block font-semibold mb-2">Discounts</label>
                  {[10, 20, 30, 50].map((d) => (
                    <label key={d} className="flex items-center gap-2 mb-1">
                      <input
                        type="checkbox"
                        checked={discountsSelected.includes(d)}
                        onChange={() =>
                          setDiscountsSelected(
                            toggleNumberInArray(discountsSelected, d)
                          )
                        }
                      />
                      <span>{d}% or more</span>
                    </label>
                  ))}
                </div>

                {/* Offers */}
                <div className="mb-4">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={offersOnly}
                      onChange={(e) => setOffersOnly(e.target.checked)}
                    />
                    <span>Only show offers (has discount)</span>
                  </label>
                </div>

                {/* Brands */}
                <div className="mb-4">
                  <label className="block font-semibold mb-2">Brands</label>
                  {availableBrands.length === 0 ? (
                    <div className="text-sm text-gray-500">No brands found</div>
                  ) : (
                    availableBrands.map((b) => (
                      <label key={b} className="flex items-center gap-2 mb-1">
                        <input
                          type="checkbox"
                          checked={brandsSelected.includes(b)}
                          onChange={() =>
                            setBrandsSelected(
                              toggleStringInArray(brandsSelected, b)
                            )
                          }
                        />
                        <span>{b}</span>
                      </label>
                    ))
                  )}
                </div>

                {/* Ratings */}
                <div className="mb-4">
                  <label className="block font-semibold mb-2">
                    Customer Ratings
                  </label>
                  {[4, 3, 2].map((r) => (
                    <label key={r} className="flex items-center gap-2 mb-1">
                      <input
                        type="checkbox"
                        checked={ratingsSelected.includes(r)}
                        onChange={() =>
                          setRatingsSelected(
                            toggleNumberInArray(ratingsSelected, r)
                          )
                        }
                      />
                      <span>{r}★ & above</span>
                    </label>
                  ))}
                </div>

                {/* Colors */}
                <div className="mb-4">
                  <label className="block font-semibold mb-2">Colors</label>
                  {availableColors.length === 0 ? (
                    <div className="text-sm text-gray-500">No colors</div>
                  ) : (
                    availableColors.map((c) => (
                      <label key={c} className="flex items-center gap-2 mb-1">
                        <input
                          type="checkbox"
                          checked={colorsSelected.includes(c)}
                          onChange={() =>
                            setColorsSelected(
                              toggleStringInArray(colorsSelected, c)
                            )
                          }
                        />
                        <span>{c}</span>
                      </label>
                    ))
                  )}
                </div>

                {/* New arrivals */}
                <div className="mb-4">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={onlyNew}
                      onChange={(e) => setOnlyNew(e.target.checked)}
                    />
                    <span>New arrivals only</span>
                  </label>
                </div>

                {/* Size */}
                <div className="mb-4">
                  <label className="block font-semibold mb-2">Size</label>
                  {availableSizes.length === 0 ? (
                    <div className="text-sm text-gray-500">No sizes</div>
                  ) : (
                    availableSizes.map((s) => (
                      <label key={s} className="flex items-center gap-2 mb-1">
                        <input
                          type="checkbox"
                          checked={sizesSelected.includes(s)}
                          onChange={() =>
                            setSizesSelected(
                              toggleStringInArray(sizesSelected, s)
                            )
                          }
                        />
                        <span>{s}</span>
                      </label>
                    ))
                  )}
                </div>

                {/* Age */}
                <div className="mb-4">
                  <label className="block font-semibold mb-2">Age</label>
                  <select
                    value={ageSelected}
                    onChange={(e) => setAgeSelected(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                  >
                    <option value="any">Any</option>
                    <option value="0-2">0-2</option>
                    <option value="3-5">3-5</option>
                    <option value="6-10">6-10</option>
                    <option value="adult">Adult</option>
                  </select>
                </div>

                {/* Availability */}
                <div className="mb-4">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={onlyInStock}
                      onChange={(e) => setOnlyInStock(e.target.checked)}
                    />
                    <span>In stock only</span>
                  </label>
                </div>

                {/* User-added filter tags */}
                <div className="mb-4">
                  <label className="block font-semibold mb-2">
                    Other (add custom filter)
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      value={newUserFilterText}
                      onChange={(e) => setNewUserFilterText(e.target.value)}
                      placeholder="e.g. 'vegan' or 'summer'"
                      className="flex-1 border rounded px-2 py-1"
                    />
                    <button
                      onClick={() => {
                        if (newUserFilterText.trim()) {
                          setUserAddedFilters((prev) => [
                            ...prev,
                            newUserFilterText.trim(),
                          ]);
                          setNewUserFilterText("");
                        }
                      }}
                      className="px-3 py-1 border rounded"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {userAddedFilters.map((f, idx) => (
                      <span
                        key={f + idx}
                        className="px-2 py-1 bg-gray-100 rounded flex items-center gap-2 text-sm"
                      >
                        {f}
                        <button
                          onClick={() =>
                            setUserAddedFilters((prev) =>
                              prev.filter((x) => x !== f)
                            )
                          }
                          className="ml-1 text-xs"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply / Clear */}
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="flex-1 px-4 py-2 border rounded"
                  >
                    Done
                  </button>
                  <button
                    onClick={clearAllFilters}
                    className="flex-1 px-4 py-2 bg-orange-500 text-white rounded"
                  >
                    Clear
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
