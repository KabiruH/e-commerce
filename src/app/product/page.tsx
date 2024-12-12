"use client"
import { useState, useEffect } from 'react';
import { getProductCategories } from '@/lib/api.js';
import ProductFiltering from '@/components/ui/CategoryFilter';

export default function ProductsPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const productCategories = await getProductCategories();
        setCategories(productCategories);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex">
      {/* Category Sidebar */}
      <div className="w-1/5 p-4 border-r bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul>
          <li
            key="all"
            className={`cursor-pointer p-2 rounded-md ${!selectedCategory ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => setSelectedCategory(null)}
          >
            All Products
          </li>
          {categories.map(category => (
            <li
              key={category}
              className={`cursor-pointer p-2 rounded-md ${selectedCategory === category ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      {/* Products Section */}
      <div className="w-4/5 p-8">
        <div
          className="bg-cover bg-center h-64 rounded-md mb-8"
          style={{
            backgroundImage: `url('/pexels-olly-1050244.jpg')`,
          }}
        >
          <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-40 text-white rounded-md">
            <h1 className="text-4xl font-bold mb-4">Featured Products</h1>
            <p className="text-lg">Discover our latest collection</p>
          </div>
        </div>
        <ProductFiltering
          categories={categories}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
