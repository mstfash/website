import { FirstSlideItem } from "@/types.ts";
import { highlightKeywords } from "@/utils/highlightKeyword.tsx";

interface FirstSecProps {
  firstSlides: FirstSlideItem[] | FirstSlideItem | null;
  keywords?: string[];
}

const FirstSec: React.FC<FirstSecProps> = ({ firstSlides }) => {
  if (!firstSlides) return null;

  const slidesArray = Array.isArray(firstSlides) ? firstSlides : [firstSlides];

  const keywords = slidesArray[0]?.fields?.highlightKeywords
    ? slidesArray[0].fields.highlightKeywords.split(',').map(kw => kw.trim())
    : [];

  return (
    <section className="bg-white my-28">
      {slidesArray.map((slide, index) => (
        <div
          key={index}
          className="xl:flex flex-col md:flex-row justify-between gap-24 w-full mb-10 items-center md:px-10 px-4"
        >
          {/* Left Image */}
          <div className="xl:w-1/2  w-full ">
            <img
              src={slide.fields.image.fields.file.url}
              alt={slide.fields.title1}
              className="w-full xl:h-[500px] h-full object-cover "
            />
          </div>

          {/* Right Text */}
          <div className="xl:w-1/2 flex flex-col  text-center md:text-left gap-6 p-4 xl:p-0">
            <p className="text-md">
              {highlightKeywords(slide.fields.title1, keywords)}
            </p>
            <p className="text-md">
              {highlightKeywords(slide.fields.title2, keywords)}
            </p>
            <p className="text-md">
              {highlightKeywords(slide.fields.title3, keywords)}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FirstSec;
