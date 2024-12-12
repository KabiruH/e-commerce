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
      setIsLoading(true); // Add a loading state (optional)
      try {
        const productCategories = await getProductCategories();
        setCategories(productCategories);
      } catch (error) {
        setError(error); // Handle errors (optional)
      } finally {
        setIsLoading(false); // Update loading state (optional)
      }
    };
  
    fetchCategories();
  }, []);
  

  return (
    <div className="flex">
      {/* Category Sidebar */}
      <div className="w-1/5 p-4 border-r">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <ul>
          <li 
            key="all"
            className={`cursor-pointer p-2 ${!selectedCategory ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
            onClick={() => setSelectedCategory(null)}
          >
            All Products
          </li>
          {categories.map(category => (
            <li 
              key={category}
              className={`cursor-pointer p-2 ${selectedCategory === category ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Products Section */}
      <div className="w-4/5">
        <ProductFiltering 
          categories={categories} 
          selectedCategory={selectedCategory} 
        />
      </div>
    </div>
  );
}