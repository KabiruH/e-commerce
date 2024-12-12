'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/components/ui/button';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { addToCart } from '@/redux/cartSlice';
import { CartModal } from '@/components/ui/CartModal'; // Import the new modal

interface ProductCartProps {
  product: {
    id: string;
    title: string;
    price: number;
  };
}

export default function ProductCart({ product }: ProductCartProps) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 10)); // Limit to 10 items
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1)); // Minimum 1 item
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      ...product,
      quantity
    }));
    setIsCartModalOpen(true); // Open cart modal after adding item
  };

  return (
    <>
      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              onClick={decrementQuantity}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="px-4 text-lg font-semibold">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={incrementQuantity}
              disabled={quantity >= 10}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <Button
            onClick={handleAddToCart}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
        <p className="text-sm text-gray-500">
          Subtotal: Kes{(product.price * quantity).toFixed(2)}
        </p>
      </div>

      {/* Cart Modal */}
      <CartModal 
        isOpen={isCartModalOpen} 
        onOpenChange={setIsCartModalOpen} 
      />
    </>
  );
}