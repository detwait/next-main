import { ProductProviderType } from "../type/product-provider.type";

const fakeStoreUrl: string = 'https://fakestoreapi.com';

async function getProducts(): Promise<ProductPreviewDetailsType[]> {
  const res = await fetch(`${fakeStoreUrl}/products`);
  const data = await res.json();

  return data.map((product: any) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    imageUrl: product.image,
  }));
}

async function getProductById(productId: string): Promise<ProductDetailsType> {
  const res = await fetch(`${fakeStoreUrl}/products/${productId}`);
  const { id, title, description, price, image, rating, category } = await res.json();

  return {
    id,
    title,
    description,
    price,
    category,
    rating: rating?.rate || 0,
    imageUrl: image,
  };
}

const provider: ProductProviderType = {
  getProducts,
  getProductById,
};

export default provider;