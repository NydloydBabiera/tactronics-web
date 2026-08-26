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
    <div className="tech-panel animate-float-up w-full rounded-3xl p-7 sm:p-9">
      <p className="section-kicker mb-4">{"// CAPABILITIES"}</p>
      <h2 className="section-heading text-3xl sm:text-4xl font-semibold mb-7">Built from signal to screen.</h2>
      <ul className="space-y-3 text-left text-base sm:text-lg">
        {services.map((service, index) => (
          <li key={service} className="service-item flex items-center gap-4 rounded-xl px-4 py-4">
            <span className="service-index">0{index + 1}</span><span>{service}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceList
