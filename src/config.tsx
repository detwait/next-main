import { ProductProviderOriginType } from "./app/products/type/product-provide-origin.type";
import { IconComponentType } from "./app/type/icon-component";
import { Section } from "./app/type/section";

export const productProviderOrigin: ProductProviderOriginType = ProductProviderOriginType.fakestore;
export const GOOGLE_API_KEY: string = 'AIzaSyCeOgcRXfbaJosALbugpUPNsOurmvt_Wxg';

export const sections: Section[] = [
  {
    name: 'MAIN',
    items: [
      {
        name: 'Worldmap',
        link: '/worldmap',
        isDefault: true,
        iconComponentType: IconComponentType.globe,
      },
      {
        name: 'Products',
        link: '/products',
        iconComponentType: IconComponentType.package,
      },
    ],
  },
  {
    name: 'Other',
    items: [
      {
        name: 'Feedback',
        link: '/feedback',
        iconComponentType: IconComponentType.feedback,
      },
      {
        name: 'About',
        link: '/about',
        iconComponentType: IconComponentType.about,
      },
    ],
  }
];