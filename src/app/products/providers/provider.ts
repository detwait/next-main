import { productProviderOrigin } from "../../../config";
import { ProductProviderOriginType } from "../type/product-provide-origin.type";
import { ProductProviderType } from "../type/product-provider.type";
import fakestoreProvider from "./fakestore.provider";

/*
  We provide an interface for providers, so we can effortlessly switch to new ones in future.
  The current provider is defined by config.
*/

const mapOriginToProvider: Record<ProductProviderOriginType, ProductProviderType> = {
  [ProductProviderOriginType.fakestore]: fakestoreProvider,
};

export function getProducts(): Promise<ProductPreviewDetailsType[]> {
  return mapOriginToProvider[productProviderOrigin].getProducts();
}

export function getProductById(id: string): Promise<ProductDetailsType> {
  return mapOriginToProvider[productProviderOrigin].getProductById(id);
}