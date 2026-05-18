
'use client';

import Title from "@/components/dashboard/title";
import ServiceList from "@/components/services/ServiceList";
import ServiceCallout from "@/components/services/ServiceCallout";
import ProjectSection from "@/components/dashboard/ProjectSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="w-full font-sans dark:bg-black scroll-smooth">
  
      <section 
        id="home" 
        className="min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] flex items-center justify-center"
      >
        <Title />
      </section>

      <section 
        id="services" 
        className="min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 py-10 dark:bg-slate-950"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 lg:flex-row lg:items-stretch">
          <div className="lg:basis-1/2">
            <ServiceList />
          </div>
          <div className="lg:basis-1/2">
            <ServiceCallout />
          </div>
        </div>
      </section>

      <section 
        id="projects" 
        className="min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] px-0 py-10 dark:bg-slate-950"
      >
        <ProjectSection />
      </section>
    </div>
  );
}
