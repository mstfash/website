import React from 'react';
import { Service } from '../../types';
import { useParams } from 'react-router-dom';
import LayoutAB from '../services-layouts/LayoutAB';
import Footer from '../layout/Footer';
import LayoutC from '../services-layouts/LayoutC';
import LayoutD from '../services-layouts/LayoutD';
import LayoutE from '../services-layouts/LayoutE';

interface ServiceGridProps {
  services: Service[];
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services }) => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  const service = services.find(service => service?.sys?.id === id);

  if (!service) {
    return null;
  }

  const layout = service?.fields?.layoutStyle || 'layoutA';

  return (
    <div className="bg-white shadow-[-8px_0_6px_0_rgba(0,0,0,0.3)]">
      <div className="w-full overflow-hidden mx-auto px-4 pt-16 gap-6">
        {(layout === 'layoutA' || layout === 'layoutB') && <LayoutAB service={service} />}
        {layout === 'layoutC' && <LayoutC service={service} />}
        {layout === 'layoutD' && <LayoutD service={service} />}
        {layout === 'layoutE' && <LayoutE service={service} />}
      </div>
      <Footer />
    </div>
  );
};

export default ServiceGrid;
