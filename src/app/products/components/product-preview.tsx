import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

export const ProductPreview: FC<{
  product: any;
}> = ({ product }) => {
  return (
    <div className="break-words">
      <div className="aspect-[16/9] relative">
        <Link href={`/products/${product.id}`}>
          <Image
            alt={product.title}
            className="object-cover"
            src={product.imageUrl || "/images/placeholder.webp"}
            fill
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4 mb-8">
        <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
          {product.price}$
        </div>
        <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </h2>
        <div className="prose lg:prose-lg leading-relaxed md:text-base lg:text-lg line-clamp-4 text-muted-foreground">
          {product.description}
        </div>
      </div>
    </div>
  );
};