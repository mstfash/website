import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FeaturedTitles } from '../home/FeaturedTitles';
import { Link, useLocation } from 'react-router-dom';
import { getContentByType } from '@/contentful/contentful.ts';

interface LogoFile {
  url?: string;
}

interface LogoFields {
  file?: LogoFile;
}

interface Logo {
  fields?: LogoFields;
}

interface LogoTitlePage {
  titlePage?: string;
  logo?: Logo;
}

interface NavigationProps {
  isMobile: boolean;
  isMenuOpen: boolean;
  handleMenuToggle: () => void;
  handleLogoClick: () => void;
  currentImageIndex: number;
  isTransitioning: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  isMobile,
  isMenuOpen,
  handleMenuToggle,
  handleLogoClick,
  currentImageIndex,
  isTransitioning,
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Use proper type for logo state
  const [logo, setLogo] = useState<LogoTitlePage | null>(null);

  const getPageName = (logo: LogoTitlePage | null): string => {
    if (location.pathname === '/projects' || location.pathname.startsWith('/projects/')) {
      return logo?.titlePage || '';
    }
    return '';
  };

  const pageName = getPageName(logo);

  useEffect(() => {
    const fetchMenu = async () => {
      const menuEntries = await getContentByType<LogoTitlePage>('logotitlePages');
      setLogo(menuEntries);
    };

    fetchMenu();
  }, []);

  const displayText =
    location.pathname === '/projects' || location.pathname.startsWith('/projects/')
      ? pageName
      : pageName;

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white z-50 flex justify-between items-center px-4 md:hidden shadow-sm">
        <button
          onClick={handleMenuToggle}
          className="text-gray-400 hover:text-gray-600 transition-colors p-2 z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <img
          src={logo?.logo?.fields?.file?.url || 'Marsam44'}
          alt="Logo"
          className="w-[40%] h-8 object-cover"
        />
      </nav>

      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 p-8 z-50 hidden md:flex justify-end">
        <button
          onClick={handleMenuToggle}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Desktop Logo */}
      <div
        onClick={handleLogoClick}
        className={`z-10 hidden md:block cursor-pointer ${
          isHomePage
            ? 'left-0 sm:left-0 md:left-1 lg:left-5 fixed xl:bottom-8 bottom-5 xl:left-8'
            : 'fixed xl:bottom-8 bottom-2 xl:left-8 left-2'
        }`}
      >
        <img
          src={logo?.logo?.fields?.file?.url || 'Marsam44'}
          alt="Logo"
          className="w-full h-auto xl:w-64 lg:w-52 md:w-44 w-40 object-cover"
        />
      </div>

      {/* Page name */}
      <div
        className={`z-10 hidden md:block cursor-pointer text-right text-3xl tracking-wider ${
          isHomePage
            ? 'absolute xl:top-12 top-5 xl:left-10 left-5'
            : 'fixed xl:top-32 top-32 xl:left-16 left-5'
        }`}
      >
        {pageName && (
          <div className="page-name mr-10 text-lg md:text-lg xl:text-4xl  font-light mb-2 leading-tight max-w-full whitespace-normal overflow-hidden ">
            {displayText.split(' ').map((word, index) => (
              <span key={index} className="flex">
                {(location.pathname === '/projects' ||
                  location.pathname.startsWith('/projects/')) ? (
                  <Link to="/projects" className=" font-light">
                    {word}
                  </Link>
                ) : (
                  ''
                )}
                <br />
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Featured Titles */}
      <FeaturedTitles
        currentIndex={currentImageIndex}
        isTransitioning={isTransitioning}
        isMobile={isMobile}
      />
    </>
  );
};
