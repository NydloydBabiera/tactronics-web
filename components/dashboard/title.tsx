import React from 'react'
import PageTitle from '@/components/ui/PageTitle'
import Subtitle from '@/components/ui/Subtitle'

const Title = () => {
  return (
    <div className="relative mx-auto min-h-[calc(100vh-4rem)] max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-6 py-16">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-1/2 max-w-2xl animate-float-up">
        <div className="eyebrow mb-5"><span /> ENGINEERING THE NEXT SIGNAL</div>
        <PageTitle className="mb-6">Tactronics</PageTitle>
        <Subtitle>
          Building emerging technologies<br />
          for a better life and a better future
        </Subtitle>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <a href="#projects" className="primary-cta">Explore projects <span aria-hidden="true">↗</span></a>
          <a href="#services" className="secondary-cta">View capabilities</a>
        </div>
        <div className="tech-readout mt-10" aria-label="Core disciplines">
          <span>01 / SOFTWARE</span><span>02 / EMBEDDED</span><span>03 / INTELLIGENCE</span>
        </div>
      </div>
    </div>
  )
}

export default Title
