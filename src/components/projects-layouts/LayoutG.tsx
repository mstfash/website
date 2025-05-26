import { ArrowLeft } from 'lucide-react';
import Footer from '../layout/Footer.tsx';
import { LayoutAProps } from '@/types.ts';

function LayoutG({ project, onBackClick }: LayoutAProps) {
  return (
    <div className="relative min-h-screen shadow-[-8px_0_6px_0_rgba(0,0,0,0.3)] ">
      {/* Back Button Header */}
      <div className="fixed top-0 left-0 w-full z-20 shadow-sm bg-white  ">
        <div className="w-full px-4  md:w-[45%] md:px-8 hidden">
          <button
            onClick={onBackClick}
            className="flex items-center text-gray-600"
          >
            <ArrowLeft className="mr-2" />
            Back
          </button>
        </div>
      </div>

      {/* Project Content */}
      <div className="w-full ">
        {/* Fullscreen First Image */}
        <section className="relative w-full md:h-screen h-auto bg-white p-4 pt-20 md:pt-4">
          {project.fields?.heroImage?.fields?.file?.url && (
            <>
              <img
                src={project.fields.heroImage.fields.file.url}
                alt={`${project.title} - Hero`}
                className="w-full md:h-full md:object-cover object-scale-down h-auto"
              />
              {/* Text Overlay */}
              <div className="relative md:absolute bottom-0 left-0 sm:right-0 md:bottom-20 md:left-20 flex flex-col gap-4 md:w-[40%] bg-white bg-opacity-80 p-4 md:p-6 ">
                <div>
                   <div className="leading-none">
                    <h3 className="text-lg font-semibold m-0 p-0 leading-none">
                      {project.fields.title}
                    </h3>
                    <p className="text-sm   pb-1 m-0 p-0 pt-1 leading-none">
                      {project.fields.subTitle}
                    </p>
                  </div>

                  <p className="mt-2 text-sm text-gray-700">
                    {project.fields.description}
                  </p>
                </div>
              </div>
            </>
          )}
        </section>

        <div className=" md:p-8">
          {[0, 1, 2, 3, 4].map((index) =>
            project.fields?.projectImages?.[index]?.fields?.file?.url ? (
              <div
                key={index}
                className="w-full h-auto p-10 pb-6"
              >
                <img
                  src={project.fields.projectImages[index].fields.file.url}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null
          )}

          {/* Two-column layout */}
          {(project.fields?.projectImages?.[6]?.fields?.file?.url ||
            project.fields?.projectImages?.[5]?.fields?.file?.url) && (
            <section className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 h-auto ">
              {project.fields.projectImages[6]?.fields?.file?.url && (
                <div className="w-full ">
                  <img
                    src={project.fields.projectImages[6].fields.file.url}
                    alt="Image 1"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              {project.fields.projectImages[5]?.fields?.file?.url && (
                <div className="w-full h-fll p-6 pt-10">
                  <img
                    src={project.fields.projectImages[5].fields.file.url}
                    alt="Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </section>
          )}
          {project.fields?.projectImages?.[7]?.fields?.file?.url && (
            <div className="h-full w-full p-8 ">
              <img
                src={project.fields.projectImages[7].fields.file.url}
                alt={`${project.title} - Image 8`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LayoutG;
