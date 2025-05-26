import { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Menu } from './components/layout/Menu';
import { Modal } from './components/layout/Modal';
import { FeaturedImages } from './components/home/FeaturedImages';
import { FeaturedTitles } from './components/home/FeaturedTitles';
import { ProjectGrid } from './components/projects/ProjectGrid';
import { ProjectDetail } from './components/projects/ProjectDetail';
import ServiceGrid from './components/services/ServiceGrid';
import { Philosophy } from './components/pages/Philosophy';
import { People, PersonDetail } from './components/pages/People';
import { Contact } from './components/pages/Contact';
import { Project, Person, ServicePage } from './types';
import ReactLoading from 'react-loading';
import { getContentByType } from './contentful/contentful.ts';
interface ServiceContent {
  serviceBlock: ServicePage[];
}

interface PeopleContent {
  peoplePagePerson: Person[];
}

interface ProjectContent {
  projecsBlock: Project[];
}
interface MenuItem {
  fields: {
    title: string;
    slug: string;
  };
}

interface MenuEntries {
  menuSectionMain?: MenuItem[];
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [servicesPages, setServicesPages] = useState<ServicePage[]>([]);
  const [peoplePages, setPeoplePages] = useState<Person[]>([]);
  const [projectPages, setProjectPages] = useState<Project[]>([]);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const fetchData = async () => {
      const content = (await getContentByType(
        'servicesPage'
      )) as ServiceContent | null;
      const peopleContent = (await getContentByType(
        'peoplePage'
      )) as PeopleContent | null;
      const projectContent = (await getContentByType(
        'projectsPage'
      )) as ProjectContent | null;

      setServicesPages(content?.serviceBlock ?? []);

      if (
        peopleContent?.peoplePagePerson &&
        peopleContent.peoplePagePerson.length > 0
      ) {
        setPeoplePages(peopleContent.peoplePagePerson);

        // من هنا: ما تعيّنش selectedPerson تلقائيًا على الموبايل
        if (!selectedPerson && !isMobile) {
          setSelectedPerson(peopleContent.peoplePagePerson[0]);
        }
      }

      if (projectContent?.projecsBlock) {
        setProjectPages(projectContent.projecsBlock);
      }
    };

    fetchData();
  }, [selectedPerson, isMobile]);

  useEffect(() => {
    setIsPageLoading(true);
    setIsLoaded(false);
    setIsTransitioning(true);

    const timeout = setTimeout(() => {
      setIsLoaded(true);
      setIsTransitioning(false);
      setIsPageLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('closeMenu', () => setIsMenuOpen(false));
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('closeMenu', () => setIsMenuOpen(false));
    };
  }, [selectedPerson, peoplePages]);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleProjectClick = (project: Project) => {
    navigate(`/projects/${project.sys?.id}`);
    if (isMobile) setIsMenuOpen(false);
  };

  const handleBackToProjects = () => navigate('/projects');

  const handleCategoryClick = (route: string) => {
    setIsPageLoading(true);
    setIsMenuOpen(false);
    setTimeout(() => {
      navigate(route);
      setIsPageLoading(false);
    }, 500);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleCloseModal = () => {
    setSelectedPerson(null);
    document.body.style.overflow = 'auto';
  };

  const selectedProject = useMemo<Project | null>(() => {
    const path = location.pathname.split('/');
    const projectId = path[2];
    if (!projectPages || !Array.isArray(projectPages)) return null;
    return projectPages.find((p) => p.sys?.id === projectId) || null;
  }, [location.pathname, projectPages]);

  useEffect(() => {
    const fetchMenu = async () => {
      const menuEntriesRaw = await getContentByType('menuSectionMain');
      const menuEntries = (menuEntriesRaw ?? {
        menuSectionMain: [],
      }) as MenuEntries;

      return menuEntries;
    };

    fetchMenu();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        isMobile={isMobile}
        isMenuOpen={isMenuOpen}
        handleMenuToggle={handleMenuToggle}
        handleLogoClick={handleLogoClick}
        currentImageIndex={currentImageIndex}
        isTransitioning={isTransitioning}
      />

      {isPageLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
          <ReactLoading type="spin" color="#333" height={50} width={50} />
        </div>
      )}

      <div className="flex min-h-screen">
        <div
          className={`w-full md:w-3/4 md:ml-auto ${
            isHomePage ? 'md:w-3/4 md:ml-auto' : ''
          } 
            ${isLoaded ? 'translate-y-0' : 'translate-y-96'}
            transition-all duration-700 ease-in-out 
            ${isMobile && isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
        >
          {isLoaded && (
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeaturedImages isMobile={isMobile} />
                    <FeaturedTitles
                      currentIndex={currentImageIndex}
                      isTransitioning={isTransitioning}
                      isMobile={isMobile}
                      isLoaded={isLoaded}
                    />
                  </>
                }
              />
              <Route
                path="/services/:id"
                element={<ServiceGrid services={servicesPages} />}
              />
              <Route
                path="/projects"
                element={
                  <ProjectGrid
                    projects={projectPages || []}
                    onProjectClick={handleProjectClick}
                  />
                }
              />
              <Route
                path="/projects/:projectId"
                element={
                  selectedProject ? (
                    <ProjectDetail
                      project={selectedProject}
                      currentImageIndex={currentImageIndex}
                      onPrevImage={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0
                            ? selectedProject.images.length - 1
                            : prev - 1
                        )
                      }
                      onNextImage={() =>
                        setCurrentImageIndex((prev) =>
                          prev === selectedProject.images.length - 1
                            ? 0
                            : prev + 1
                        )
                      }
                      onBackClick={handleBackToProjects}
                    />
                  ) : (
                    ''
                  )
                }
              />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route
                path="/people"
                element={
                  <People
                    onPersonSelect={setSelectedPerson}
                    selectedPerson={selectedPerson}
                    isMobile={isMobile}
                    peoplePages={
                      peoplePages as unknown as {
                        sys: { id: string };
                        fields: Person;
                      }[]
                    }
                  />
                }
              />
              <Route path="/hire-us" element={<Contact />} />
            </Routes>
          )}
        </div>
        <Menu
          isMenuOpen={isMenuOpen}
          handleCategoryClick={handleCategoryClick}
          servicesPages={servicesPages}
        />
      </div>

      {isMobile && (
        <Modal
          isOpen={!!selectedPerson}
          onClose={handleCloseModal}
          title={selectedPerson?.name || ''}
        >
          {selectedPerson && <PersonDetail person={selectedPerson} />}
        </Modal>
      )}
    </div>
  );
}

export default App;
