"use client"

import { useState, useEffect } from 'react';
import { getAllProducts } from '@/lib/api.js';
import { Card } from '@/components/ui/card'; // Assuming you have a Card component in this path


interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductsPage() {
    const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    };

    fetchProducts();
  }, []);

  if (!allProducts || allProducts.length === 0) {
    return <p>No products available.</p>;
  }

  return <PaginatedProducts products={allProducts} />;
}

function PaginatedProducts({ products }: { products: Product[] }) {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <Card key={product.id}>
            <a href={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.category}</p>
                <p className="text-lg font-bold text-green-600">Price: ${product.price}</p>
                <p className="text-gray-500 text-sm mt-2">{product.description}</p>
              </div>
            </a>
          </Card>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
