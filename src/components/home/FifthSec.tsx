import { FifthSlide, RichTextContent } from '@/types.ts';
import React from 'react';

interface FifthSecProps {
  fifthSlides: FifthSlide | FifthSlide[];
}

const FifthSec: React.FC<FifthSecProps> = ({ fifthSlides }) => {
  const slidesArray = Array.isArray(fifthSlides) ? fifthSlides : [fifthSlides];

  const getRichTextValue = (richText?: RichTextContent): string => {
    return richText?.content?.[0]?.content?.[0]?.value || '';
  };

  return (
    <>
      {slidesArray.map((slide, idx) => {
        const imageUrl = slide?.fields?.image?.fields?.file?.url || '';
const descriptionPairs = Object.keys(slide.fields)
  .filter((key) => key.startsWith('titleDescription'))
  .map((titleKey) => {
    const number = titleKey.replace('titleDescription', '');
    const descriptionKey = `description${number}` as keyof typeof slide.fields;

    const title = slide.fields[titleKey as keyof typeof slide.fields] as string;
    const description = getRichTextValue(slide.fields[descriptionKey] as RichTextContent);

    return { title, description };
  });

        return (
          <section key={idx} className="bg-white my-28 px-4">
            <div className="flex flex-col xl:flex-row items-stretch justify-around w-full gap-8">
              {/* الصورة */}
              <div className="xl:w-1/2 w-full">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={slide?.fields?.titleDiscription1 || 'Image'}
                    className="w-full h-full xl:object-top object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                    No Image Available
                  </div>
                )}
              </div>

              {/* النصوص */}
              <div className="xl:w-1/2 w-full flex flex-col justify-start text-left gap-6 p-4">
                {descriptionPairs.map((pair, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-bold">{pair.title}</h3>
                    <p className="text-md">{pair.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default FifthSec;
