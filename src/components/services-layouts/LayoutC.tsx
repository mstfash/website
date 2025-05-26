import { Service } from '@/types.ts';
import React from 'react';

interface LayoutCProps {
  service: Service;
}
const LayoutC: React.FC<LayoutCProps> = ({ service }) => {
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
          <p className="text-gray-700 text-center py-7 leading-relaxed">
            {service.fields.introText}
          </p>
        )}

        {/* Section 1 */}
        {(images[0] || images[1]) && (
          <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center items-center mt-8">
            {images[0] && (
              <div
                className={`${
                  service?.fields?.textFirstImage ? 'md:w-1/2' : 'w-full'
                } grid grid-cols-1`}
              >
                <img
                  src={images[0].fields?.file?.url}
                  alt={service.fields.title}
                  className="w-full h-auto object-cover mb-4"
                />
              </div>
            )}
            <div className={`${images[0] ? 'md:w-1/2' : 'w-full'}`}>
              {service?.fields?.textFirstImage && (
                <p className="text-md leading-relaxed">
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
                {
                  service.fields.secondText.split(
                    'We believe AI should amplify your design voice, not overwrite it.'
                  )[0]
                }
                <span className="font-bold">
                  We believe AI should amplify your design voice, not overwrite
                  it.
                </span>
                {
                  service.fields.secondText.split(
                    'We believe AI should amplify your design voice, not overwrite it.'
                  )[1]
                }
              </p>
            )}

            {images[2] && (
              <img
                src={images[2].fields?.file?.url}
                alt={service.fields.title}
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
          service?.fields?.textourServicesInclude) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {images[3] && (
              <div>
                <img
                  src={images[1].fields?.file?.url}
                  alt={service.fields.title}
                  className="w-full md:h-[500px] object-cover mb-4"
                />
              </div>
            )}
            <div className="p-4 ">
              {service?.fields?.titleOurServicesInclude && (
                <h3 className="font-bold text-xl md:text-xl xl:text-2xl mb-4">
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
            </div>
          </div>
        )}

        <div className=" flex-col md:flex-row  my-2 ">
          <div
            className={`${
              images[4] ? 'md:w-full grid grid-cols-1' : 'w-full'
            } grid grid-cols-1`}
          >
            <img
              src={images[4].fields?.file?.url}
              alt={service.fields.title}
              className="w-full h-full object-cover mb-4"
            />
          </div>
        </div>

        {(images[3] ||
          service?.fields?.titleWhyMarsam44 ||
          service?.fields?.textWhyMarsam44) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-center">
            <div className="p-4">
              {service?.fields?.titleWhyMarsam44 && (
                <h3 className="text-2xl font-semibold mb-4">
                  {service.fields.titleWhyMarsam44}
                </h3>
              )}

              {service.fields.whyMarsam44 &&
                service.fields.whyMarsam44.map((item, index) => (
                  <div key={index} className="mb-2">
                    <h4 className="font-bold md:text-md xl:text-lg text-sm">
                      {item?.fields?.title}
                    </h4>
                    <p className="mt-1 text-xs xl:text-sm md:text-md leading-relaxed">
                      {item?.fields?.description}
                    </p>
                  </div>
                ))}
            </div>

            {images[3] && (
              <div>
                <img
                  src={images[3].fields?.file?.url}
                  alt={service.fields.title}
                  className="w-full h-auto object-cover mb-4"
                />
              </div>
            )}
          </div>
        )}
        {/* Section 5 - 2 Images */}
        {(images[4] || images[5]) && (
          <div className="flex flex-col md:flex-row gap-2 mb-10 ">
            {images[5] && (
              <div>
                <img
                  src={images[5].fields?.file?.url}
                  alt={service.fields.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        )}

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default LayoutC;
