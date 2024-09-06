'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GlobeIcon from '../../components/svg/globe-icon';
import NewsIcon from '../../components/svg/news-icon';
import { FC } from 'react';
import { IconComponentProps } from '../type/icon-component-props';
import { IconComponentType } from '../type/icon-component';
import { SidebarItemProps } from '../type/sidebar-item-props';
import PackageIcon from '../../components/svg/package-icon';
import AboutIcon from '../../components/svg/about-icon';
import FeedbackIcon from '../../components/svg/feedback-icon';

const iconMap: Record<IconComponentType, FC<IconComponentProps>> = {
  [IconComponentType.globe]: GlobeIcon,
  [IconComponentType.news]: NewsIcon,
  [IconComponentType.package]: PackageIcon,
  [IconComponentType.about]: AboutIcon,
  [IconComponentType.feedback]: FeedbackIcon,
};

const SidebarSectionItem: React.FC<SidebarItemProps> = ({ item }) => {
  const pathname = usePathname();
  const IconComponent: FC<IconComponentProps> = iconMap[item.iconComponentType];

  return (
    <Link href={item.link}>
      <div className={`${ (!!item.isDefault && pathname === '/') || pathname === item.link ? 'bg-gray-200' : ''} w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer`}>
        <IconComponent className="mr-2" />
          <span className="text-gray-700">{item.name}</span>
      </div>
    </Link>
  );
}

export default SidebarSectionItem;