import { getProductById } from '@/lib/api.js';
import { notFound } from 'next/navigation';
import {Card} from '@/components/ui/card'; 
import ProductCart from '@/components/ui/ProductCart'

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product: Product | null = await getProductById(id);

  if (!product) {
    return notFound(); 
  }

  return (
    <div className="container mx-auto p-4">
      <Card>
        <div className="p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-green-600 font-semibold">Price: ${product.price}</p>
          <p className="text-gray-600 text-sm mt-4">{product.category}</p>
          <p className="text-gray-600 text-sm mt-4">{product.description}</p>

          <ProductCart product={product} />
          
          <a
            href="/products"
            className="inline-block mt-6 text-blue-500 hover:text-blue-700 underline"
          >
            Back to Products
          </a>
        </div>
      </Card>
    </div>
  );
}
