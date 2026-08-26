import React from 'react'

interface SubtitleProps {
  children: React.ReactNode
  className?: string
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className = '' }) => {
  return (
    <p className={`subtitle text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed ${className}`}>
      {children}
    </p>
  )
}

export default Subtitle
