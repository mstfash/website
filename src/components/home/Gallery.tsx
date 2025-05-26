import { GallerySlides, GalleryImage } from "@/types.ts";

export interface GalleryProps {
  GallerySlides: GallerySlides | GallerySlides[];
}

const Gallery: React.FC<GalleryProps> = ({ GallerySlides }) => {
  let allImages: GalleryImage[] = [];

  if (Array.isArray(GallerySlides)) {
    allImages = GallerySlides.flatMap(slide => slide.fields.galleryImages);
  } else {
    allImages = GallerySlides.fields.galleryImages;
  }

  return (
    <section className="bg-white w-full mx-auto my-28 px-4">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          {/* Img 1 */}
          <div className="w-full h-full md:h-[300px] xl:h-[500px]">
            <a href="#" className="group block w-full h-full overflow-hidden relative">
              <img
                src={allImages[2]?.fields?.file?.url || ''}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Img 2 */}
          <div className="w-full h-full md:h-[300px] xl:h-[500px]">
            <a href="#" className="group block w-full h-full overflow-hidden relative">
              <img
                src={allImages[3]?.fields?.file?.url || ''}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Img 3.1 + 3.2 stacked */}
          <div className="flex flex-col gap-4 w-full h-full md:h-[300px] xl:h-[500px]">
            <a href="#" className="group block w-full h-full md:h-1/2 overflow-hidden relative">
              <img
                src={allImages[4]?.fields?.file?.url || ''}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
            <a href="#" className="group block w-full h-full md:h-1/2 overflow-hidden relative">
              <img
                src={allImages[1]?.fields?.file?.url || ''}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Img 5 */}
          <div className="w-full h-full md:h-[300px] xl:h-[500px]">
            <a href="#" className="group block w-full h-full overflow-hidden relative">
              <img
                src={allImages[0]?.fields?.file?.url || ''}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
