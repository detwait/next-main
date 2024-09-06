import { IconComponentType } from "./icon-component";

export interface SectionItem {
  name: string;
  link: string;
  iconComponentType: IconComponentType;
  isDefault?: boolean;
}