import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { getContentByType } from '@/contentful/contentful.ts';
import type { HireUsPage } from './../../types.ts';

export const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    const event = new CustomEvent('closeMenu');
    window.dispatchEvent(event);
  }, [location]);

  const [hireUsPage, setHireUsPage] = useState<HireUsPage | null>(null);

useEffect(() => {
  const fetchData = async () => {
    const content = await getContentByType('hireUsPage') as HireUsPage | HireUsPage[];
    if (Array.isArray(content)) {
      setHireUsPage(content.length > 0 ? content[0] : null);
    } else {
      setHireUsPage(content);
    }
  };

  fetchData();
}, []);


  if (!hireUsPage) return null;

  return (
    <div className="md:flex md:flex-row md:h-screen shadow-[-8px_0_6px_0_rgba(0,0,0,0.3)] pt-16 md:p-4 p-8">
      {/* Title (Mobile Only) */}
      <h1 className="text-4xl font-light py-8 md:hidden">{hireUsPage.title}</h1>

      {/* Image */}
      <div className="w-full md:w-[50%] md:h-full">
        <img
          src={hireUsPage.heroImage?.fields?.file?.url}
          alt="Contact"
          className="w-full h-[50vh] md:h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[60%] md:overflow-y-auto mt-8">
        <div className="p-0 md:p-12">
          {/* Desktop Title */}
          <h1 className="text-4xl font-light mb-8 hidden md:block">
            {hireUsPage.title}
          </h1>

          {/* General Contact */}
          <div>
            <p>{hireUsPage.introText}</p>
            <p className="my-8">{hireUsPage.subText}</p>
          </div>

          <div className="mb-12">
            <h3 className="font-bold text-xl mb-2">
              {hireUsPage.forInquiries}
            </h3>

            <a
              href={`mailto:${hireUsPage.eMailInquiries}`}
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors "
            >
              <Mail className="w-5 h-5 mr-2" />
              {hireUsPage.eMailInquiries}
            </a>
          </div>

          {/* Offices */}
          <div className="mt-8">
            <h2 className="text-2xl font-light mb-6">
              {hireUsPage.ourOffices}
            </h2>

            {/* Grid with both offices */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-4 items-center">
              {/* Dover Office */}
              <div className="space-y-2 text-left max-w-md">
                <h3
                  className="text-xl font-light mb-4 overflow-hidden text-ellipsis"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.2em',
                    maxHeight: '2.4em',
                  }}
                >
                  {hireUsPage.doverOffice}
                </h3>
                <div className="inline-flex items-start text-gray-600 transition-colors  max-w-xs text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mr-1" />
                  <p>{hireUsPage.addressDoverOffice}</p>
                </div>
                <a
                  href={`mailto:${hireUsPage.eMailDoverOffice}`}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colorstext-sm pt-4 text-[15px]"
                >
                  <Mail className="w-5 h-5 mr-1 " />
                  {hireUsPage.eMailDoverOffice}
                </a>
              </div>

              {/* Cairo Office */}
              <div className="space-y-2 text-left max-w-md">
                <h3
                  className="text-xl font-light mb-4 overflow-hidden text-ellipsis"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    lineHeight: '1.2em',
                    maxHeight: '2.4em',
                  }}
                >
                  {hireUsPage.cairoOffice}
                </h3>
                <div className="inline-flex items-center text-gray-600 transition-colors max-w-xs text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mr-1" />
                  <p className="whitespace-normal leading-snug break-words">
                    {hireUsPage.addressCairoOffice}
                  </p>
                </div>
                <a
                  href={`mailto:${hireUsPage.eMailCairoOffice}`}
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors pt-4 text-[15px]"
                >
                  <Mail className="w-5 h-5 mr-1 " />
                  {hireUsPage.eMailCairoOffice}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
