import { FC } from "react";
import Image from "next/image";
import { AddToCartButton } from "./add-to-cart-button";
import Rating from "../../../components/other/rating";

export const ProductDetails: FC<{
  product: ProductDetailsType;
}> = ({ product }) => {
  return (
    <>
      <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
        <div className="aspect-[16/9] relative mb-6">
          <Image
            alt={product.title}
            src={product.imageUrl || "/images/placeholder.webp"}
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            {product.title}
          </h1>
          <div className="prose lg:prose-lg tracking-tighter text-gray-400">
            {product.category}
          </div>
          <p className="text-xl text-gray-600">{product.price}$</p>
          <div className="text-xl text-gray-600">
            <Rating currentValue={product.rating} maxValue={5} />
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </>
  );
};