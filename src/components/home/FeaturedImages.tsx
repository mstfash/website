import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getContentByType } from '../../contentful/contentful.ts';
import { FeaturedTitles } from './FeaturedTitles.tsx';
import {
  FaqSlide,
  FifthSlide,
  FirstSlideItem,
  FourthSecItem,
  GallerySlides,
  HeroSlide,
} from '../../types.ts';
import FirstSec from './FirstSec.tsx';
import YoutubeSec from './YoutubeSec.tsx';
import FourthSec from './FourthSec.tsx';
import FifthSec from './FifthSec.tsx';
import { FaqSec } from './FaqSec.tsx';
import Gallery from './Gallery.tsx';
import Footer from '../layout/Footer.tsx';

interface FeaturedTitlesProps {
  isMobile: boolean;
}

interface HomepageContent {
  homePageHeroSlide: HeroSlide[];
  homePageSecondSection: FirstSlideItem[];
  homePageYoutubeSection: HeroSlide[];
  homePageFourthSection: FourthSecItem[];
  homePageFifthSection: FifthSlide[];
  homePageFaqSection: FaqSlide[];
  homePageGallerySection: HeroSlide[];
}

export const FeaturedImages: React.FC<FeaturedTitlesProps> = ({ isMobile }) => {
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [firstSlides, setFirstSlides] = useState<FirstSlideItem[] | null>(null);
  const [homePageFourthSection, setHomePageFourthSection] = useState<
    FourthSecItem[]
  >([]);

  const [homePageYoutubeSection, setHomePageYoutubeSection] = useState<
    HeroSlide[]
  >([]);
  const [fifthSlides, setFifthSlides] = useState<FifthSlide[]>([]);
  const [faqSlides, setFaqSlides] = useState<FaqSlide[]>([]);
  const [GallerySlides, setGallerySlides] = useState<GallerySlides[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const content: HomepageContent | null = await getContentByType(
        'homepage'
      );
      if (!content) {
        return;
      }
      setHeroSlides(content?.homePageHeroSlide);
      setFirstSlides(content?.homePageSecondSection);
      setHomePageYoutubeSection(content?.homePageYoutubeSection);
      setHomePageFourthSection(
        content?.homePageFourthSection as FourthSecItem[]
      );
      setFifthSlides(content?.homePageFifthSection as FifthSlide[]);
      setFaqSlides(content?.homePageFaqSection as FaqSlide[]);
      setGallerySlides(
        content?.homePageGallerySection as unknown as GallerySlides[]
      );

      setCurrentImageIndex(0);
      setNextImageIndex(1 % content?.homePageHeroSlide?.length);
    };
    fetchData();
  }, []);
  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setNextImageIndex((prev) => (prev + 1) % heroSlides.length);

      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);
  }, [heroSlides.length]);

  useEffect(() => {
    if (heroSlides.length === 0) return;

    resetInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [heroSlides.length, resetInterval]);

  const handlePrevImage = () => {
    if (heroSlides.length === 0) return;
    setIsTransitioning(true);
    const prevIndex =
      currentImageIndex === 0 ? heroSlides.length - 1 : currentImageIndex - 1;
    setNextImageIndex(prevIndex);

    setTimeout(() => {
      setCurrentImageIndex(prevIndex);
      setIsTransitioning(false);
    }, 500);

    resetInterval(); // Reset interval on manual navigation
  };

  const handleNextImage = () => {
    if (heroSlides.length === 0) return;
    setIsTransitioning(true);
    const nextIndex = (currentImageIndex + 1) % heroSlides.length;
    setNextImageIndex(nextIndex);

    setTimeout(() => {
      setCurrentImageIndex(nextIndex);
      setIsTransitioning(false);
    }, 500);

    resetInterval(); // Reset interval on manual navigation
  };

  if (!heroSlides || heroSlides.length === 0) {
    return null;
  }

  const currentSlide = heroSlides[currentImageIndex];
  const nextSlide = heroSlides[nextImageIndex];

  const currentImageUrl = currentSlide.fields.image
    ? 'https:' + currentSlide.fields.image.fields.file.url
    : '';
  const nextImageUrl = nextSlide.fields.image
    ? 'https:' + nextSlide.fields.image.fields.file.url
    : '';

  return (
    <div className="bg-white shadow-[-8px_0_6px_0_rgba(0,0,0,0.3)]">
      <div className="h-screen ">
        <div className="relative h-full md:p-8 ">
          {/* Current Image */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isTransitioning ? 'opacity-0 ' : 'opacity-100'
            }`}
          >
            <div className="h-full ml-auto relative overflow-hidden bg-white p-4 pt-20 md:p-4">
              <img
                src={currentImageUrl}
                alt={currentSlide.fields.title || 'Current Slide'}
                className="w-full h-full xl:object-bottom object-cover"
              />

              {/* Featured Titles component */}
              <FeaturedTitles
                slides={heroSlides}
                currentIndex={currentImageIndex}
                isTransitioning={isTransitioning}
                isMobile={isMobile}
                isLoaded={true}
              />

              {/* Left Arrow */}
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-black/70 transition-colors z-30"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-black/70 transition-colors z-30"
              >
                <ChevronRight size={20} />
              </button>

              {/* Mobile Gradient Overlay */}
              <div className="md:hidden absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>
          </div>

          {/* Next Image (Pre-loaded) */}
          <div className="absolute inset-0 -z-10">
            <div className="h-full  ml-auto relative overflow-hidden bg-white md:p-4">
              <img
                src={nextImageUrl}
                alt={nextSlide.fields.title || 'Next Slide'}
                className="w-full h-full xl:object-bottom object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <FirstSec firstSlides={firstSlides} />
      <YoutubeSec homePageYoutubeSection={homePageYoutubeSection} />
      <FourthSec homePageFourthSection={homePageFourthSection} />
      <FifthSec fifthSlides={fifthSlides} />
      <FaqSec faqSlides={faqSlides} />
      <Gallery GallerySlides={GallerySlides} />
      <Footer />
    </div>
  );
};
