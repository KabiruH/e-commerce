import { getProductById } from '@/lib/api.js';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import ProductCart from '@/components/ui/ProductCart';
import CartPage from '@/app/cart/page';

interface Product {
  id: string;
  title: string;
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
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Image */}
        <div className="relative max-w-md mx-auto md:max-w-12pax">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto max-w-md md:max-w-full object-cover rounded-md shadow-md"
          />
          <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs px-3 py-1 rounded-tr-md">
            Single Product
          </div>
        </div>
        
        {/* Right Section: Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-xl text-red-500 font-semibold">KSh {product.price.toFixed(2)}</p>
          <p className="text-gray-700">{product.description}</p>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-semibold">SKU:</span> {product.id}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Category:</span> {product.category}
            </p>
          </div>
          
          {/* Quantity Selector and Add to Cart */}
          <ProductCart product={product} />
          
          {/* Back to Products Link */}
          <a
            href="/products"
            className="inline-block mt-6 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Back to Products
          </a>
        </div>
      </div>
      
      {/* Cart Section */}
      <div className="mt-12">
        <CartPage />
      </div>
    </div>
  );
}