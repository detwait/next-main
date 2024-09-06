import { IconComponentProps } from "../../app/type/icon-component-props";

const BurgerIcon: React.FC<IconComponentProps> = ({ className }) => {
  return (
    <svg className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
    </svg>
  );
}

export default BurgerIcon;