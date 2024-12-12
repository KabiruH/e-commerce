"use client"
import React, { useState, useEffect } from 'react';
import { getAllCartProducts, getProductById } from '@/lib/api'; // Adjust import path
import {  Button } from '@/components/ui/button';
import {  Table, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table';

// Define the product type
interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  // Fetch cart products when the component mounts
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        setLoading(true);
        const carts = await getAllCartProducts();
        const products = [];

        // Map through the cart items to fetch individual product details
        for (const cart of carts) {
          for (const item of cart.products) {
            const product = await getProductById(item.productId);
            products.push({ ...product, quantity: item.quantity });
          }
        }

        setCartProducts(products);
      } catch (error) {
        console.error('Error fetching cart products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          
        </div>
      ) : cartProducts.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>{product.title}</span>
                  </div>
                </TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  ${(product.price * product.quantity).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}

      <div className="mt-6 flex justify-end">
        <Button variant="default">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default CartPage;
