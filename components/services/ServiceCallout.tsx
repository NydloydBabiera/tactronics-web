import React from 'react'

const ServiceCallout = () => {
  return (
    <div className="animate-float-up flex h-full min-h-[320px] items-center justify-center rounded-[2rem] border border-sky-200/80 bg-sky-500/10 p-8 text-center shadow-xl shadow-sky-500/20 backdrop-blur-xl dark:border-sky-400/20 dark:bg-slate-950/70">
      <div className="space-y-6">
        <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-sky-700 dark:text-sky-300 animate-zoom-text">
          Free Consultation
        </p>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Reach out today and get expert product guidance with no upfront cost.
        </p>
      </div>
    </div>
  )
}

export default ServiceCallout
