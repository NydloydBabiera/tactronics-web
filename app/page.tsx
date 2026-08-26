
import Title from "@/components/dashboard/title";
import ServiceList from "@/components/services/ServiceList";
import ServiceCallout from "@/components/services/ServiceCallout";
import ProjectSection from "@/components/dashboard/ProjectSection";

export default function Home() {
  return (
    <div className="site-shell w-full font-sans scroll-smooth">
  
      <section 
        id="home" 
        className="hero-section min-h-[calc(100vh-4rem)] flex items-center justify-center"
      >
        <Title />
      </section>

      <section 
        id="services" 
        className="content-section min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-20"
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
        className="content-section min-h-[calc(100vh-4rem)] px-0 py-16"
      >
        <ProjectSection />
      </section>
    </div>
  );
}
