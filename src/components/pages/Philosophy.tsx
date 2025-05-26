import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getContentByType } from '@/contentful/contentful.ts';
import { PhilosophyPage } from '../../types.ts'; 

export const Philosophy = () => {
  const location = useLocation();
  const [philosophyContent, setPhilosophyContent] = useState<PhilosophyPage | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      const content = (await getContentByType('philosophyPage')) as PhilosophyPage | PhilosophyPage[];

      if (Array.isArray(content)) {
        setPhilosophyContent(content.length > 0 ? content[0] : null);
      } else {
        setPhilosophyContent(content);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const event = new CustomEvent('closeMenu');
    window.dispatchEvent(event);
  }, [location]);

  if (!philosophyContent) return null;

  return (
    <div className="md:flex md:flex-row md:h-screen shadow-[-8px_0_6px_0_rgba(0,0,0,0.3)] pt-16 md:p-4 p-8">
      {/* Title (Mobile Only) */}
      <h1 className="text-4xl my-8 font-light md:hidden">{philosophyContent.title}</h1>

      {/* Image */}
      <div className="w-full md:w-[50%] md:h-full">
        <img
          src={philosophyContent.heroImage?.fields.file.url}
          alt="Philosophy"
          className="w-full h-[50vh] md:h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[60%] md:overflow-y-auto">
        <div className="p-8 md:p-16">
          {/* Desktop Title */}
          <h1 className="text-4xl font-light mb-8 hidden md:block">{philosophyContent.title}</h1>
          <div className="space-y-6 text-gray-600">
            <p>{philosophyContent.introText}</p>
            <p className="font-bold">{philosophyContent.subtitle}</p>
            <p>{philosophyContent.secondText}</p>
            <p>
              <span className="font-bold">{philosophyContent.titleThirdText} </span>
              {philosophyContent.thirdText}
            </p>
            <p>
              <span className="font-bold">{philosophyContent.titleFourthText} </span>
              {philosophyContent.fourthText}
            </p>
            <p>{philosophyContent.fifthText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
