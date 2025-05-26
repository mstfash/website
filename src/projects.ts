import { Project } from './types';

export const projects: Project[] = [
  // Selected Projects (one from each category)
  {
    id: "desert-resort",
    title: "DESERT RESORT & SPA",
    location: "Dubai, UAE",
    size: "250,000 SF",
    year: "2021",
    status: "Complete",
    scope: "Architecture & Interior Design",
    categories: ["selected", "hospitality"],
    description: `This luxury desert resort creates an immersive experience that celebrates the dramatic beauty of the Arabian desert. The design draws inspiration from traditional desert architecture while incorporating contemporary sustainable technologies.

    The resort comprises 60 individual villa suites, a main lodge with dining and spa facilities, and various outdoor experiences including desert pools and meditation spaces. Each villa is carefully positioned to maximize privacy and views while minimizing environmental impact.

    The architecture employs deep overhangs, thermal mass, and natural ventilation to create comfortable spaces in the extreme desert climate. The material palette includes local stone, rammed earth, and weathered metals that echo the colors and textures of the surrounding landscape.

    Sustainability is at the core of the design, with features including:
    • Solar panels integrated into the roof design
    • Greywater recycling systems for landscape irrigation
    • Natural ventilation strategies that reduce energy consumption
    • Local materials that minimize transportation impact
    • Native desert landscaping that requires minimal water

    The interior design continues the dialogue with the desert landscape through a carefully curated palette of natural materials and textures. Each space is designed to frame specific views of the surrounding landscape, creating a constant connection to the natural environment.

    The spa facilities include:
    • Eight treatment rooms with private outdoor areas
    • A meditation garden with water features
    • A yoga pavilion overlooking the desert
    • Indoor and outdoor relaxation areas
    • A traditional hammam with contemporary amenities

    The resort's restaurants showcase local and international cuisine, with spaces that transition seamlessly from indoor to outdoor dining. The main restaurant features a demonstration kitchen and chef's table, while the rooftop lounge offers panoramic views of the desert landscape.

    The project has received multiple awards for its innovative approach to desert architecture and its commitment to sustainability. It serves as a model for future developments in sensitive desert environments, demonstrating how luxury hospitality can coexist with environmental responsibility.`,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "tech-campus",
    title: "INNOVATION TECH CAMPUS",
    location: "San Francisco, USA",
    size: "500,000 SF",
    year: "2023",
    status: "Complete",
    scope: "Architecture & Landscape",
    categories: ["selected", "commercial"],
    description: `This state-of-the-art tech campus creates a dynamic workplace environment that fosters innovation and collaboration. The project includes office spaces, research facilities, and extensive amenity spaces.

    The design emphasizes flexibility and sustainability, with spaces that can adapt to changing work patterns and technologies. The campus is organized around a series of connected outdoor spaces that provide opportunities for both work and relaxation.`,
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "bal-harbour-house",
    title: "BAL HARBOUR HOUSE",
    location: "Bal Harbour, Florida, USA",
    size: "12,300 SF",
    year: "2015",
    status: "Complete",
    scope: "Architecture",
    categories: ["selected", "private-homes"],
    description: `Despite its size, this Miami home feels intimate and layered, providing a wide range of spaces that integrate and overlap with the landscape. The project brief called for a six-bedroom family home with generous spaces for hosting and entertaining within the tropical Miami climate.

    The ground floor operates as one large, interconnected space with multiple lounge and dining settings. Glass doors slide into pockets to provide uninhibited movement between indoors and out, and bring in the constant presence of the sea.`,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "urban-apartments",
    title: "URBAN LIVING APARTMENTS",
    location: "Melbourne, Australia",
    size: "350,000 SF",
    year: "2022",
    status: "Complete",
    scope: "Architecture",
    categories: ["selected", "multi-residential"],
    description: `This mixed-use development creates a new model for urban living, combining residential units with retail and community spaces. The project includes 200 apartments, ground-floor retail, and extensive communal facilities.`,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&q=80"
    ]
  },

  // Hospitality Projects
  {
    id: "desert-resort",
    title: "DESERT RESORT & SPA",
    location: "Dubai, UAE",
    size: "250,000 SF",
    year: "2021",
    status: "Complete",
    scope: "Architecture & Interior Design",
    categories: ["hospitality"],
    description: `This luxury desert resort creates an immersive experience that celebrates the dramatic beauty of the Arabian desert...`,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "alpine-hotel",
    title: "ALPINE BOUTIQUE HOTEL",
    location: "Zermatt, Switzerland",
    size: "180,000 SF",
    year: "2020",
    status: "Complete",
    scope: "Architecture",
    categories: ["hospitality"],
    description: `This boutique hotel redefines luxury alpine hospitality through a thoughtful blend of traditional Swiss architecture and contemporary design...`,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551016548-4c03e99f14e7?auto=format&fit=crop&q=80"
    ]
  },

  // Commercial Projects
  {
    id: "tech-campus",
    title: "INNOVATION TECH CAMPUS",
    location: "San Francisco, USA",
    size: "500,000 SF",
    year: "2023",
    status: "Complete",
    scope: "Architecture & Landscape",
    categories: ["commercial"],
    description: `This state-of-the-art tech campus creates a dynamic workplace environment that fosters innovation and collaboration...`,
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "eco-office",
    title: "ECO OFFICE TOWER",
    location: "Singapore",
    size: "420,000 SF",
    year: "2022",
    status: "Complete",
    scope: "Architecture",
    categories: ["commercial"],
    description: `A pioneering sustainable office development that sets new standards for workplace design in tropical climates...`,
    images: [
      "https://images.unsplash.com/photo-1577760258779-e787a1733016?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80"
    ]
  },

  // Private Homes
  {
    id: "bal-harbour-house",
    title: "BAL HARBOUR HOUSE",
    location: "Bal Harbour, Florida, USA",
    size: "12,300 SF",
    year: "2015",
    status: "Complete",
    scope: "Architecture",
    categories: ["private-homes"],
    description: `Despite its size, this Miami home feels intimate and layered...`,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "mountain-retreat",
    title: "MOUNTAIN RETREAT",
    location: "Aspen, Colorado, USA",
    size: "9,200 SF",
    year: "2019",
    status: "Complete",
    scope: "Architecture & Interior Design",
    categories: ["private-homes"],
    description: `This mountain retreat represents a contemporary interpretation of traditional alpine architecture...`,
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80"
    ]
  },

  // Multi-residential Projects
  {
    id: "urban-apartments",
    title: "URBAN LIVING APARTMENTS",
    location: "Melbourne, Australia",
    size: "350,000 SF",
    year: "2022",
    status: "Complete",
    scope: "Architecture",
    categories: ["multi-residential"],
    description: `This mixed-use development creates a new model for urban living...`,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "riverside-residences",
    title: "RIVERSIDE RESIDENCES",
    location: "London, UK",
    size: "280,000 SF",
    year: "2023",
    status: "Complete",
    scope: "Architecture & Landscape",
    categories: ["multi-residential"],
    description: `A collection of luxury apartments that redefine riverside living in London...`,
    images: [
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&q=80"
    ]
  }
];