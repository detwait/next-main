import { ProductPreview } from "./components/product-preview";
import { getProducts } from "./providers/provider";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductPreview key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}
