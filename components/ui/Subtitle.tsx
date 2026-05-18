import React from 'react'

interface SubtitleProps {
  children: React.ReactNode
  className?: string
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className = '' }) => {
  return (
    <p className={`text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-600 max-w-2xl leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

export default Subtitle
