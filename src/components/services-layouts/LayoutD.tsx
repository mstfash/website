import { Service } from '@/types.ts';
import React from 'react';

const LayoutD: React.FC<{ service: Service }> = ({ service }) => {
  const images = service?.fields?.allImages || [];

  return (
    <>
      <div className="">
        {/* Title */}
        {service?.fields?.title && (
          <h1 className="text-3xl xl:text-4xl font-bold tracking-wider text-center">
            {service.fields.title}
          </h1>
        )}
        {service?.fields?.subtitle && (
          <h3 className="text-xl md:text-3xl tracking-wider text-center mt-2 text-gray-900">
            {service.fields.subtitle}
          </h3>
        )}
        {service?.fields?.introText && (
          <p className=" py-7 leading-relaxed">{service.fields.introText}</p>
        )}

        {/* Section 1 */}
        {(images[5] || images[6]) && (
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center my-8">
            <div className="md:flex gap-4 md:w-2/3 w-full">
              {images[5] && (
                <div className="md:w-1/2 h-[650px] overflow-hidden">
                  <img
                    src={images[5].fields?.file?.url}
                    alt={service.fields.title}
                    className="w-full h-[650px] object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              )}
              {images[4] && (
                <div className="md:w-1/2">
                  <img
                    src={images[4].fields?.file?.url}
                    alt={service.fields.title}
                    className="w-full h-[650px] object-cover"
                  />
                </div>
              )}
            </div>

           <div className="md:w-1/3 w-full mt-4 md:mt-0 self-end">
  {service?.fields?.textFirstImage && (
    <p className="text-sm md:text-base leading-relaxed">
      {service?.fields?.textFirstImage}
    </p>
  )}
</div>

          </div>
        )}

        {/* Section 2 */}
        {(images[2] ||
          service?.fields?.secondText ||
          service?.fields?.titleSecText) && (
          <div className="mb-8">
            {service?.fields?.titleSecText && (
              <h2 className="font-bold">{service.fields.titleSecText}</h2>
            )}
            {service?.fields?.secondText && (
              <p className="py-7 text-md leading-relaxed">
                {service.fields.secondText}
              </p>
            )}
            {images[2] && (
              <img
                src={images[1]?.fields?.file?.url}
                alt={service.fields?.title}
                className="w-full h-auto object-cover mb-4"
              />
            )}
          </div>
        )}

        {/* Section 3 - Text Only */}
        {service?.fields?.thirdText && (
          <div>
            <p className="py-7 text-md leading-relaxed">
              {service.fields.thirdText}
            </p>
          </div>
        )}

        {/* Section 4 - Image + Text */}
        {(images[3] ||
          service?.fields?.titleOurServicesInclude ||
          service?.fields?.textOurServicesInclude) && (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center h-auto ">
            {images[3] && (
              <div className="h-full md:col-span-2 w-full">
                <img
                  src={images[3]?.fields?.file?.url}
                  alt={service.fields.title}
                  className="w-full h-full object-top mb-4"
                />
              </div>
            )}
            <div className="md:col-span-3">
              {service?.fields?.titleOurServicesInclude && (
                <h3 className="font-bold text-2xl mb-4">
                  {service.fields.titleOurServicesInclude}
                </h3>
              )}
              {service.fields.textourServicesInclude &&
                service.fields.textourServicesInclude.map((item, index) => (
                  <div key={index} className="mb-2">
                    <h4 className="font-bold md:text-md xl:text-lg text-sm">
                      {item?.fields?.title}
                    </h4>
                    <p className="mt-1 text-xs xl:text-sm md:text-md leading-relaxed">
                      {item?.fields?.description}
                    </p>
                  </div>
                ))}
              <div className="mt-5">
                <img
                  src={images[2]?.fields?.file?.url}
                  alt={service.fields.title}
                  className="w-full h-full object-cover mb-4"
                />
              </div>
              <div className="mt-5">
                <img
                  src={images[0]?.fields?.file?.url}
                  alt={service.fields.title}
                  className="w-full h-full object-cover mb-4"
                />
              </div>
            </div>
          </div>
        )}
      </div>{' '}
    </>
  );
};

export default LayoutD;
