import React, { useEffect, useState } from 'react';
import { getContentByType } from '@/contentful/contentful.ts';
import { Instagram, Linkedin,Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/marsam_44/?utm_source=ig_web_button_share_sheet', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/marsam44', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/marsam44/', label: 'LinkedIn' },
];

interface FooterData {
  title?: string;
  subAddress?: string;
  date?: string | number;
  link1?: string;
  link2?: string;
  link3?: string;
  link4?: string;
}

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContentByType<FooterData>('footer');
        setFooterData(data);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <footer className="bg-gray-50 py-6 border-t border-gray-200 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-col justify-between items-center">
        <div className="text-gray-600 mb-10 md:mb-0 text-center ">
          <p>{footerData?.title}</p>
          <p>{footerData?.subAddress}</p>
          <p>© {new Date().getFullYear()} {footerData?.date}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8">
          <a href="mailto:career@marsam44.com" className="text-gray-600 hover:text-gray-900 hover:underline">
            {footerData?.link1}
          </a>
          <span className="text-gray-400">|</span>
          <a href="mailto:info@marsam44.com" className="text-gray-600 hover:text-gray-900 hover:underline">
            {footerData?.link2}
          </a>
         
         
          <span className="text-gray-400">|</span>
          <a href="/hire-us" className="text-gray-600 hover:text-gray-900 hover:underline">
            {footerData?.link4}
          </a>
        </div>

        <div className="flex space-x-6 mt-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
