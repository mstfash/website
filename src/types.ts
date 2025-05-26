export interface File {
  url: string;
}

export interface ImageFields {
  title?: string;
  file: {
    url: string;
    details?: {
      size?: number;
      image?: {
        width: number;
        height: number;
      };
    };
    fileName?: string;
    contentType?: string;
    title?: string;
  };
}

export interface Image {
  fields: ImageFields;
}

export interface RichTextContent {
  content: {
    content: {
      value: string;
    }[];
  }[];
}

// 🧱 Hero Slide

export interface HeroSlide {
  fields: {
    title: string;
    subtitle?: string;
    image: Image;
  };
}

// 🧱 First Slide Item

export interface FirstSlideItem {
  fields: {
    image: Image;
    title1: string;
    title2: string;
    title3: string;
    highlightKeywords?: string;
  };
}

// 🧱 Gallery

export interface GalleryImage {
  fields: ImageFields;
}

export interface GallerySlidesFields {
  galleryImages: GalleryImage[];
}

export interface GallerySlides {
  fields: GallerySlidesFields;
}

// 🧱 Fourth Section Item

export interface FourthSecItem {
  fields: {
    title: string;
    description: RichTextContent;
  };
}

// 🧱 Youtube Section

export interface YoutubeSectionItem {
  fields: {
    title?: string;
    description?: RichTextContent;
    mainTitle?: string;
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    images?: Image[];
    highlightKeywords?: string;
  };
}

// 🧱 Person (People Page)

export interface Person {
  name: string;
  title: string;
  maintitle?: string;
  subMainTitlePeoplePage?: string;
  image?: Image;
  format1?: string;
  format2?: string;
  format3?: string;
  format4?: string;
  format5?: string;
  format6?: string;
  sys: {
    id: string;
  };
}
export interface PeoplePage {
  title: string;
  description?: string;
  people: Person[];
}
export interface PeoplePageContentful {
  fields: {
    title: string;
    description?: string;
    peoplePagePerson: Person[];
  };
  sys: {
    id: string;
  };
}

export interface PersonEntry {
  sys: {
    id: string;
  };
  fields: Person;
}

// 🧱 News Post

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
  images: string[];
}

// 🧱 Featured Image

export interface FeaturedImage {
  url: string;
  alt: string;
  title: string;
  subtitle: string;
}

// 🧱 Menu

export interface MenuItem {
  label: string;
  route: string;
}

export interface MenuSection {
  title: string;
  route?: string;
  items: MenuItem[];
}

export interface MenuProps {
  isMenuOpen: boolean;
  handleCategoryClick: (route: string) => void;
  servicesPages: ServicePage[];
}

// 🧱 Project (Static)

export interface ProjectFields {
  title: string;
  subTitle?: string;
  description?: string;
  heroImage?: Image;
  projectImages?: Image[];
  image: Image[];
  order?: number;
  pageName?: string;
  layoutStyle:
    | 'layoutA'
    | 'layoutB'
    | 'layoutC'
    | 'layoutD'
    | 'layoutE'
    | 'layoutF'
    | 'layoutG'
    | 'layoutH'
    | 'layoutI'
    | 'layoutJ';
}

export interface Image {
  url: string;
  title?: string;
}
export interface Project {
  sys: {
    id: string;
  };
  id?: string;
  fields: ProjectFields;
  title?: string;
  images: Image[];
}

export interface LayoutAProps {
  project: Project;
  onBackClick: () => void;
}

// 🧱 Service (من Contentful)

export interface WhyMarsam44Item {
  fields: {
    title: string;
    description: string;
  };
}

export interface TextourServicesIncludeItem {
  fields: {
    title: string;
    description: string;
  };
}

export interface ServiceFields {
  slug?: string;
  title: string;
  subtitle?: string;
  introText?: string;
  secondText?: string;
  titleSecText?: string;
  thirdText?: string;
  textourServicesInclude?: TextourServicesIncludeItem[];
  titleOurServicesInclude?: string;
  allImages?: Image[];
  layoutStyle?: string;
  duration?: string;
  pricing?: string;
  textFirstImage?: string;
  whyMarsam44?: WhyMarsam44Item[];
  titleWhyMarsam44?: string;
  textWhyMarsam44?: string;
  textOurServicesInclude?: string;
  titlePartnerWithMarsam44?: string;
  textPartnerWithMarsam44?: string;
  whyPartnerWithMarsam44?: WhyMarsam44Item[];
}

export interface Service {
  sys?: {
    id?: string;
  };
  fields: ServiceFields;
}

// 🧱 FAQ Slide

export interface FaqSlide {
  fields: {
    question: string;
    answer?: RichTextContent;
  };
}

// 🧱 Fifth Slide

export interface FifthSlideFields {
  image: Image;
  titleDiscription1?: string;
  description1: RichTextContent;
  titleDescription2?: string;
  description2: RichTextContent;
  titleDescription3?: string;
  description3: RichTextContent;
  titleDescription4?: string;
  description4: RichTextContent;
  titleDescription5?: string;
  description5: RichTextContent;
}

export interface FifthSlide {
  fields: FifthSlideFields;
}

// 🧱 Hire Us Page

export interface HireUsPage {
  title?: string;
  heroImage?: Image;
  introText?: string;
  subText?: string;
  forInquiries?: string;
  eMailInquiries?: string;
  ourOffices?: string;

  doverOffice?: string;
  addressDoverOffice?: string;
  eMailDoverOffice?: string;

  cairoOffice?: string;
  addressCairoOffice?: string;
  eMailCairoOffice?: string;
}

// 🧱 Philosophy Page

export interface PhilosophyPage {
  title?: string;
  heroImage?: Image;
  introText?: string;
  subtitle?: string;
  secondText?: string;
  titleThirdText?: string;
  thirdText?: string;
  titleFourthText?: string;
  fourthText?: string;
  fifthText?: string;
}

// 🧱 Service Page (for menu navigation)

export interface ServicePage {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    order: number;
  };
}
