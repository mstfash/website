import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion.tsx';

interface FaqField {
  question?: string;
  answer?: {
    content?: { content?: { value?: string }[] }[];
  };
}

interface FaqSlide {
  fields?: FaqField;
}

interface FaqSecProps {
  faqSlides: FaqSlide[];
}

export const FaqSec: React.FC<FaqSecProps> = ({ faqSlides }) => {
  return (
    <section className="px-6 py-12  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-700 dark:text-gray-400 mb-10 drop-shadow-md">
        {/* Frequently Asked Questions */}
      </h2>
      <Accordion
        type="single"
        collapsible
        className=" md:w-[90%] mx-auto rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg"
      >
        {faqSlides.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <AccordionTrigger
              className="
             flex justify-between items-center w-full px-6 py-4 text-left md:text-lg text-md font-semibold text-gray-900 dark:text-gray-300
             hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors rounded-t-lg cursor-pointer select-none
            focus:outline-none focus:ring-2 focus:ring-gray-500
             hover:border-none hover:text-gray-900 dark:hover:text-gray-300
              "
              style={{ borderBottom: 'none' }}
            >
              {faq.fields?.question}
            
            </AccordionTrigger>
            <AccordionContent
              className="
                text-base px-6 py-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 rounded-b-lg
                prose prose-indigo dark:prose-invert max-w-none
              "
            >
              {faq.fields?.answer?.content?.[0]?.content?.[0]?.value}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
