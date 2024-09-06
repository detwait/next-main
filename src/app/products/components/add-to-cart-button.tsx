'use client'

import { FC, useState } from "react";
import toast from "react-hot-toast";

export const AddToCartButton: FC<{
  product: ProductDetailsType;
}> = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const addToCartButtonClick = (productTitle: string) => {
    if (!loading) {
      // Simulate a 300ms delay
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success(`${productTitle} is added to your cart!`);
      }, 300);
    }
  };

  return (
    <button
      onClick={() => addToCartButtonClick(product.title)}
      className={`px-6 py-3 ${loading ? 'bg-gray-500' : 'bg-blue-600'} text-white font-medium rounded-lg shadow ${loading ? '' : 'hover:bg-blue-700'} transition`}
    >
      {loading ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}
