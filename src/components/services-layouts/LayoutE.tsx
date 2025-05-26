import { Service } from '@/types.ts';

interface LayoutABProps {
  service: Service;
}
const LayoutE = ({ service }: LayoutABProps) => {
  const images = service?.fields?.allImages || [];

  return (
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
      {(images[0] || images[1]) && (
        <div className="flex flex-col md:flex-row gap-6 my-8 min-h-[500\px] pb-8">
          {images[1] && (
            <div className="md:w-3/4">
              <img
                src={images[1].fields?.file?.url}
                alt={service.fields.title}
                className="w-full h-full object-cover mb-4"
              />
            </div>
          )}

          {images[0] && (
            <div className="md:w-1/2 flex flex-col ">
              <img
                src={images[0].fields?.file?.url}
                alt={service.fields.title}
                className="w-full object-cover mb-4 h-full  "
              />

              <div className="flex-grow" />

              {service?.fields?.secondText && (
                <p className="text-xs md:text-md xl:text-base mt-4 md:hidden lg:block leading-loose">
                  {service.fields.secondText}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Section 2 */}
      {(images[2] ||
        service?.fields?.secondText ||
        service?.fields?.titleSecText) && (
        <div className="my-20 ">
          {/* {service?.fields?.titleSecText && (
            <h2 className="font-bold md:text-md xl:text-lg text-xl">
              {service.fields.titleSecText}
            </h2>
          )} */}
          {/* {service?.fields?.secondText && (
            <p className="py-7 text-md leading-relaxed">
              {service.fields.secondText}
            </p>
          )} */}
          {images[2] && (
            <img
              src={images[2].fields?.file?.url}
              alt={service.fields.title}
              className="w-full h-[700px] object-cover object-bottom "
            />
          )}
        </div>
      )}

      {/* Section 3 - Text Only */}
      {service?.fields?.thirdText && (
        <div>
         
          <p className="py-7 text-md md:leading-relaxed">
            {
              service.fields.thirdText.split(
                'Let’s visualize something bold.'
              )[0]
            }
            <span className="font-bold">Let’s visualize something bold.</span>
            {
              service.fields.thirdText.split(
                'Let’s visualize something bold.'
              )[1]
            }
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
                src={images[3].fields?.file?.url}
                alt={service.fields.title}
                className="w-full h-[500px] object-cover mb-4"
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

      {/* Section 5 - 2 Images */}
      {(images[4] || images[5]) && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-12 w-full ">
          {/* اليسار - المحتوى النصي */}
          <div className=" flex flex-col justify-between">
            {service?.fields?.titlePartnerWithMarsam44 && (
              <h3 className="font-bold text-xl md:text-xl xl:text-2xl mb-4 ">
                {service.fields.titlePartnerWithMarsam44}
              </h3>
            )}

            {service.fields.whyPartnerWithMarsam44 &&
              service.fields.whyPartnerWithMarsam44.map((item, index) => (
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

          {/* اليمين - شبكة الصور */}
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="flex flex-col justify-between space-y-4">
              <img
                src={images[6].fields?.file?.url}
                alt="تصيير 1"
                className="w-full h-full rounded-md object-cover"
              />
              <img
                src={images[4].fields?.file?.url}
                alt="تصيير 2"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div>
              <img
                src={images[5].fields?.file?.url}
                alt="تصيير 3"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LayoutE;
