export interface ProductProviderType {
  getProducts: () => Promise<ProductPreviewDetailsType[]>,
  getProductById: (id: string) => Promise<ProductDetailsType>,
}