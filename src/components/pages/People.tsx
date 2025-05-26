import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { Person } from '../../types';

interface PeopleProps {
  peoplePages: { sys: { id: string }; fields: Person }[];
  selectedPerson: Person | null;
  onPersonSelect: (person: Person) => void;
  isMobile: boolean;
}

export const People: React.FC<PeopleProps> = ({
  onPersonSelect,
  selectedPerson,
  isMobile,
  peoplePages,
}) => {
  const location = useLocation();

useEffect(() => {
  if (
    (!selectedPerson ||
      !peoplePages.some((p) => p.fields.name === selectedPerson.name)) &&
    peoplePages.length > 0 &&
    !isMobile  
  ) {
    onPersonSelect(peoplePages[0].fields);
  }
}, [peoplePages, selectedPerson, onPersonSelect, isMobile]);


  useEffect(() => {
    const event = new CustomEvent('closeMenu');
    window.dispatchEvent(event);

    if (isMobile && selectedPerson) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [location, selectedPerson, isMobile]);

  const handlePersonClick = (person: Person) => {
    onPersonSelect(person);
  };

  return (
    <div className="h-screen pt-16 md:pt-0 md:shadow-[-8px_0_15px_-3px_rgba(0,0,0,0.3)]">
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="p-8">
          <h1 className="text-4xl font-light mb-2">
            {peoplePages[0]?.fields?.maintitle}
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            {peoplePages[0]?.fields?.subMainTitlePeoplePage}
          </p>

          <div className="space-y-8">
            {peoplePages.map((person) => (
              <div
                key={person.sys.id}
                className="cursor-pointer"
                onClick={() => handlePersonClick(person?.fields)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={person?.fields?.image?.fields?.file?.url}
                    alt={person?.fields?.name}
                    className={`w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 ${
                      person?.fields?.name !== '' ? 'object-top' : ''
                    }`}
                  />
                </div>
                <h2 className="text-xl font-medium mt-4">{person.fields.name}</h2>
                <p className="text-gray-600 font-light">{person.fields.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="md:flex hidden" style={{ height: 'calc(100vh - 4rem)' }}>
        <div className="w-[27%] sticky top-0 right-0 bg-white border-l overflow-hidden">
          {/* Navbar Header */}
          <div className="p-5 pb-2 md:pt-16">
            <h1 className="text-4xl font-light mb-2">
              {peoplePages[0]?.fields?.maintitle}
            </h1>
            <p className="text-gray-600 text-sm mb-4">
              {peoplePages[0]?.fields?.subMainTitlePeoplePage}
            </p>
          </div>

          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto pl-3">
            <div className="space-y-1 px-2">
              {peoplePages.map((person) => (
                <div
                  key={person.sys.id}
                  className={`cursor-pointer p-2 rounded transition-colors ${
                    selectedPerson?.name === person.fields.name
                      ? 'bg-gray-100'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handlePersonClick(person?.fields)}
                >
                  <h2 className="text-base md:text-md lg:text-lg font-medium">
                    {person?.fields?.name}
                  </h2>
                  <p className="text-xs md:text-xs lg:text-xs text-gray-600 font-light ">
                    {person?.fields?.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 h-full overflow-y-auto">
          {selectedPerson ? (
            <div className="space-y-8">
              <PersonDetail person={selectedPerson} />
            </div>
          ) : (
            <div className="h-full lg:flex items-center justify-center text-gray-500">
              Select a person to view their details
            </div>
          )}
        </div>

        {/* Right Column: Fixed Navbar (Sticky) */}
        <div className="w-[40%] sticky top-0 left-0 bottom-0 overflow-hidden h-screen p-2">
          <div className="h-full">
            {selectedPerson && selectedPerson.image ? (
              <img
                src={selectedPerson.image?.fields?.file?.url}
                alt={selectedPerson.name}
                loading="lazy"
                className="object-cover w-full h-full"
              />
            ) : (
              <div className="h-full lg:flex items-center justify-center text-gray-500">
                No image available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface PersonDetailProps {
  person: Person;
}

export const PersonDetail: React.FC<PersonDetailProps> = ({ person }) => {
  if (!person) return null;

  return (
    <div className="p-8 md:pt-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="xl:text-2xl text-2xl font-medium mb-2">{person.name}</h2>
        <p className="xl:text-xl text-md text-gray-600 font-light mb-8">
          {person.title}
        </p>

        <div className="space-y-8 text-xl md:text-sm lg:text-base">
          <div>
            {[
              person.format1,
              person.format2,
              person.format3,
              person.format4,
              person.format5,
              person.format6,
            ]
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}

            {![
              person.format1,
              person.format2,
              person.format3,
              person.format4,
              person.format5,
              person.format6,
            ].some(Boolean) && (
              <p className="text-gray-600">No bio available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
