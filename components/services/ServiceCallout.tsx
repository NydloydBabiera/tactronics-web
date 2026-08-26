import React from 'react'

const ServiceCallout = () => {
  return (
    <div className="tech-panel animate-float-up flex h-full min-h-[320px] items-center justify-center rounded-[2rem] p-8 text-center">
      <div className="space-y-6">
        <p className="section-kicker">{"// START A CONVERSATION"}</p>
        <p className="section-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.055em]">
          Free Consultation
        </p>
        <p className="muted-copy text-base sm:text-lg">
          Reach out today and get expert product guidance with no upfront cost.
        </p>
      </div>
    </div>
  )
}

export default ServiceCallout
