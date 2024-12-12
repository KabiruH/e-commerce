"use client"
import { useState, useEffect } from 'react';
import { getAllProducts } from '@/lib/api.js';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductFiltering({ 
  categories, 
  selectedCategory 
}: { 
  categories: string[], 
  selectedCategory: string | null 
}) {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);
  console.log(categories)

  

  // Filter products when products or selected category changes
  useEffect(() => {
    const products = selectedCategory
      ? allProducts.filter(product => product.category === selectedCategory)
      : allProducts;
    
    setFilteredProducts(products);
    setCurrentPage(1); // Reset to first page when filtering changes
  }, [allProducts, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
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

  if (allProducts.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
      </h1>
      
      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found in this category.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <Card key={product.id}>
                <Link href={`/product/${product.id}`}>
                  <Image
                  width={0}
                  height={0}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <p className="text-gray-600">{product.category}</p>
                    <p className="text-lg font-bold text-green-600">Price: Kes{product.price}</p>
                    {/* <p className="text-gray-500 text-sm mt-2">{product.description}</p> */}
                  </div>
                </Link>
              </Card>
            ))}
          </div>
          
          {totalPages > 1 && (
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
          )}
        </>
      )}
    </div>
  );
}