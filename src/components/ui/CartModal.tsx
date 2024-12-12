"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { removeFromCart } from "@/redux/cartSlice";
import { Trash2, ShoppingCart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableHeader,
} from "@/components/ui/table";

interface CartModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartModal({ isOpen, onOpenChange }: CartModalProps) {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cart.items);

  // Calculate total cart value
  const cartTotal = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  // Handle removing an item from the cart
  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Your Shopping Cart</DialogTitle>
          <DialogDescription>
            Review the items in your cart before checkout
          </DialogDescription>
        </DialogHeader>

        {cartProducts.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600">Your cart is empty</p>
          </div>
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cartProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="flex items-center space-x-4">
                        <span>{product.title}</span>
                      </div>
                    </TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>
                      ${(product.price * product.quantity).toFixed(2)}
                    </TableCell>
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
            <div className="mt-6 flex justify-between items-center">
              <div className="text-xl font-bold">
                Total: ${cartTotal.toFixed(2)}
              </div>
              {/* Call onOpenChange(false) to close the modal */}
              <Button variant="default" onClick={() => onOpenChange(false)}>
                Proceed to Payment
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
