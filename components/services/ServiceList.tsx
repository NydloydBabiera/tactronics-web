import React from 'react'

const services = [
  'Website and application development',
  'Embedded systems engineering',
  'IoT and connectivity solutions',
  'AI and automation development',
  'Technical consulting and strategy',
]

const ServiceList = () => {
  return (
    <div className="animate-float-up w-full rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl shadow-slate-200/30 backdrop-blur-lg dark:border-slate-700/60 dark:bg-slate-900/80 dark:shadow-slate-950/40">
      <h2 className="text-3xl sm:text-4xl font-semibold text-sky-700 mb-6">Services Offered</h2>
      <ul className="space-y-4 text-left text-base sm:text-lg text-slate-700 dark:text-slate-200">
        {services.map((service) => (
          <li key={service} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/80">
            {service}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceList
