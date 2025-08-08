import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const sampleShoes = [
  {
    id: 1,
    name: "Urban Runner Pro",
    price: "$129.99",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Classic Leather Oxford",
    price: "$189.99",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Sport Elite Trainer",
    price: "$159.99",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Comfort Walk Casual",
    price: "$99.99",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Executive Business",
    price: "$249.99",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Adventure Hiker",
    price: "$179.99",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export default function ShoeDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const shoe = sampleShoes.find((s) => s.id === Number(id));

  if (!shoe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Shoe Not Found</h1>
          <p className="text-gray-600 mb-6">The shoe you are looking for does not exist.</p>
          <Button onClick={() => router.push("/shop")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <div className="flex flex-col items-center">
          <Image
            src={shoe.image}
            alt={shoe.name}
            width={300}
            height={300}
            className="mb-6 rounded"
          />
          <h1 className="text-3xl font-bold mb-2 text-gray-900">{shoe.name}</h1>
          <p className="text-xl text-orange-500 font-semibold mb-4">{shoe.price}</p>
          <p className="text-gray-700 mb-6">This is a detailed description of the {shoe.name}. Stylish, comfortable, and perfect for any occasion!</p>
          <Button onClick={() => router.push("/shop")}>Back to Shop</Button>
        </div>
      </div>
    </div>
  );
} 