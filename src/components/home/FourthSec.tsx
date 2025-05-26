import { FourthSecItem } from '@/types.ts';
import React from 'react';

interface FourthSecProps {
  homePageFourthSection: FourthSecItem[];
}

const FourthSec: React.FC<FourthSecProps> = ({ homePageFourthSection }) => {
  return (
    <section className="p-4">
      <div className="bg-gray-200 lg:p-10 p-4">
        {/* Title from first item */}
        <h2 className="mx-auto text-3xl md:text-5xl text-gray-800 font-large pb-20 text-center">
          {homePageFourthSection[0]?.fields.title}
        </h2>

        <div className="border-b-2 border-red-500 mb-8 mx-auto w-full" />

        <div className="flex flex-col gap-8 pt-20">
          {homePageFourthSection.map((item, index) => (
            <div key={index}>
              <p className="text-md">
                {
                  item.fields?.description?.content?.[0]?.content?.[0]?.value
                }
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSec;
