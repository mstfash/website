import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSlide } from '../../types.ts';

interface FeaturedTitlesProps {
  currentIndex: number;
  isTransitioning: boolean;
  isMobile: boolean;
  isLoaded?: boolean;
  slides?: HeroSlide[];
}

export const FeaturedTitles: React.FC<FeaturedTitlesProps> = ({
  currentIndex,
  isTransitioning,
  isLoaded,
  slides,
}) => {
  const location = useLocation();
  const shouldShow = location.pathname === '/';     
  if (!isLoaded || !shouldShow) return null;

  const safeIndex =
    slides && slides.length > 0 ? currentIndex % slides.length : 0;

  const slide = slides?.[safeIndex];
  const title = slide?.fields?.image?.fields?.title || '';
  if (!title) return null;

  return (
    <div
      className={`absolute z-40 left-1/2 bottom-28 transform -translate-x-1/2 transition-opacity duration-500 ${
        shouldShow ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div
        className={`transition-all duration-500 text-center ${
          isTransitioning
            ? 'opacity-0 translate-y-8'
            : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="bg-white bg-opacity-70  md:w-[60vw] w-[70vw] max-w-[700px] mx-auto">
          <div className="p-3">
            <h2 className="text-xl sm:text-xl md:text-2xl font-bold tracking-wider mb-2 text-gray-800">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
