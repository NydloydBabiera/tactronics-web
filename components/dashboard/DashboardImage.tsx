import React from 'react'
import Image from 'next/image'

interface DashboardImageProps {
  className?: string
}

const DashboardImage: React.FC<DashboardImageProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center animate-float-up w-full h-full ${className}`}>
      <Image
        src="/dashboard-pic.svg"
        alt="Dashboard"
        width={1080}
        height={1080}
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="w-full h-auto max-h-[55vh] sm:max-h-[60vh] lg:max-h-[70vh]"
      />
    </div>
  )
}

export default DashboardImage
