import Link from "next/link";
import { ProductDetails } from "../components/product-details";
import { getProductById } from "../providers/provider";

export default async function ProductDetailsPage({ params }: any) {
  const { id } = params;
  const product: ProductDetailsType = await getProductById(id);

  return (
    <div className="container mx-auto p-4 mt-0">
      <nav className="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <svg className="fill-current w-6 h-6 mx-3" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M64 512c0 247 201 448 448 448s448-201 448-448S759 64 512 64 64 265 64 512z m64 0c0-211.8 172.2-384 384-384s384 172.2 384 384-172.2 384-384 384-384-172.2-384-384z" fill="#47444F" /><path d="M548.6 287.9L376.3 448H768v64H376.4l172.2 160.1-39 41.9-251.7-234.1L509.6 246z" fill="#47444F" />
            </svg>
            <Link className="text-gray-700 hover:text-gray-400" href={`/products`}>Back to Products</Link>
          </li>
        </ol>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <ProductDetails key={product.title} product={product} />
      </div>
    </div>
  );
}
