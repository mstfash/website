import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getContentByType } from '@/contentful/contentful.ts';

// نوع خاص بالعنصر داخل القائمة الرئيسية (menu item)
interface MenuEntry {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
  };
}

// نوع بيانات الرد المتوقع من Contentful لصفحة القائمة
interface MenuSectionMainResponse {
  menuSection: MenuEntry[];
}

interface ServicePage {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    order: number;
  };
}

interface MenuProps {
  isMenuOpen: boolean;
  handleCategoryClick: (route: string) => void;
  servicesPages: ServicePage[];
}

export const Menu: React.FC<MenuProps> = ({
  isMenuOpen,
  handleCategoryClick,
  servicesPages,
}) => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<
    {
      label: string;
      route: string;
      slug: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getContentByType<MenuSectionMainResponse>('menuSectionMain');

        const menuEntries = Array.isArray(data)
          ? data
          : data?.menuSection && Array.isArray(data.menuSection)
          ? data.menuSection
          : [];

        if (!Array.isArray(menuEntries)) {
          setMenuItems([]);
          return;
        }

        const items = menuEntries
          .filter((item) => item.fields?.title && item.fields?.slug)
          .map((item) => ({
            label: item.fields.title,
            route: `/${item.fields.slug === 'home' ? '' : item.fields.slug}`,
            slug: item.fields.slug.toLowerCase(),
          }));

        const desiredOrder = [
          'home',
          'services',
          'projects',
          'philosophy',
          'people',
          'hire-us',
        ];

        const orderedItems = desiredOrder
          .map((slug) => items.find((item) => item.slug === slug))
          .filter(Boolean) as typeof items;

        setMenuItems(orderedItems);
      } catch (error) {
        console.error('Error fetching menu:', error);
        setMenuItems([]);
      }
    };

    fetchMenu();
  }, []);

  const handleLinkClick = (route: string) => {
    handleCategoryClick(route);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full md:w-1/4 h-screen bg-white transform transition-transform duration-500 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } z-40`}
    >
      <div className="p-8 pt-24 md:pt-32 ">
        <ul>
          {menuItems.map((item) => (
            <li key={item.slug} className="mb-3 ">
              {item.slug === 'services' ? (
                <>
                  <div
                    className="cursor-pointer flex items-center text-gray-700 hover:text-gray-500 transition-all duration-300 text-sm font-light relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gray-700 hover:after:w-full after:transition-all after:duration-300 border-b border-gray-300 "
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-2 ml-1 transition-transform duration-300 ${
                        isDropdownOpen ? 'transform rotate-180' : ''
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        d="M1 3L8.5 10L16 3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {isDropdownOpen && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {[...servicesPages]
                        .sort((a, b) => a.fields.order - b.fields.order)
                        .map((service) => (
                          <li key={service.sys.id}>
                            <Link
                              to={`/services/${service.sys.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(`/services/${service.sys.id}`);
                              }}
                              className={`text-gray-700 hover:text-gray-500 transition-all duration-300 text-sm font-light block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gray-700 hover:after:w-full after:transition-all after:duration-300 border-b border-gray-300 pb-1 ${
                                location.pathname === `/services/${service.sys.id}`
                                  ? 'text-gray-900 font-medium'
                                  : ''
                              }`}
                            >
                              {service.fields.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.route}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.route);
                  }}
                  className={`text-gray-700 hover:text-gray-500 transition-all duration-300 text-sm font-light block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gray-700 hover:after:w-full after:transition-all after:duration-300 border-b border-gray-300  ${
                    location.pathname === item.route
                      ? 'text-gray-900 font-medium'
                      : ''
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
