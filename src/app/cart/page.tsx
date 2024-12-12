"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { removeFromCart } from '@/redux/cartSlice';
import { Trash2 } from 'lucide-react';
import { CartModal } from '@/components/ui/CartModal';
import {  
  Table,  
  TableBody,  
  TableHead,  
  TableRow,  
  TableCell,  
  TableHeader
} from '@/components/ui/table';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cart.items);
  const [isCartOpen, setCartOpen] = useState(false);

  // Calculate total cart value
  const cartTotal = cartProducts.reduce(
    (total, product) => total + (product.price * product.quantity),
    0
  );

  // Handle removing an item from the cart
  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  // If cart is empty, return null or a minimal indicator
  if (cartProducts.length === 0) {
    return null; // Or you could return a small badge/indicator
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.title}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>${(product.price * product.quantity).toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleRemoveItem(product.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold">Total: ${cartTotal.toFixed(2)}</span>
        <Button onClick={() => setCartOpen(true)}>
          Proceed to Checkout
        </Button>
      </div>    

      <CartModal 
        isOpen={isCartOpen} 
        onOpenChange={setCartOpen} 
      />
    </>
  );
};

export default CartPage;