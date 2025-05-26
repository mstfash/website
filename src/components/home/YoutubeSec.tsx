import { YoutubeSectionItem } from '../../types.ts';
import { highlightKeywords } from '../../utils/highlightKeyword.tsx';

const YoutubeSec = ({
  homePageYoutubeSection,
}: {
  homePageYoutubeSection: YoutubeSectionItem[];
}) => {
  const keywords = (homePageYoutubeSection[4]?.fields?.highlightKeywords ?? '')
    .split(',')
    .map((kw) => kw.trim());

  return (
    <section className="px-4 bg-white">
      {/* Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-stretch text-gray-700 opacity-80 mb-12">
        {homePageYoutubeSection.slice(0, 4).map((obj, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center min-h[300px] items-center h-full text-gray-600 text-center bg-gray-200 p-4 space-y-2"
          >
            <h2 className="text-l xl:text-2xl font-bold">{obj.fields.title}</h2>
            <p className="text-xs w-fit">
              {obj.fields.description?.content[0].content[0].value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:text-left items-center justify-center p-4 lg:p-10">
        {/* Text Content - appears last on mobile, first on desktop */}
        <div className="space-y-4 w-full order-2 xl:order-1">
          <h2 className="text-l xl:text-2xl font-bold">
            {homePageYoutubeSection[4].fields.mainTitle}
          </h2>

          <div>
            <p className="text-md w-fit mx-auto lg:mx-0">
              {highlightKeywords(
                homePageYoutubeSection[4]?.fields?.text1 ?? '',
                keywords
              )}
            </p>
            <p className="text-md w-fit mx-auto lg:mx-0">
              {highlightKeywords(
                homePageYoutubeSection[4].fields.text2 ?? '',
                keywords
              )}
            </p>
          </div>

          <div>
            <p className="text-md w-fit mx-auto lg:mx-0">
              {highlightKeywords(
                homePageYoutubeSection[4]?.fields?.text3 ?? '',
                keywords
              )}
            </p>
            <p className="text-md w-fit mx-auto lg:mx-0">
              {highlightKeywords(
                homePageYoutubeSection[4]?.fields?.text4 ?? '',
                keywords
              )}
            </p>
          </div>
        </div>

        {/* Right Color Image - first on mobile, last on desktop */}
        <div className=" w-full order-1 xl:order-2">
          {homePageYoutubeSection[4]?.fields?.images?.[0]?.fields?.file
            ?.url && (
            <img
              src={homePageYoutubeSection[4].fields.images[0].fields.file.url}
              alt="Right Image"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default YoutubeSec;
