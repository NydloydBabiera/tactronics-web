import React from 'react'

interface PageTitleProps {
  children: string
  className?: string
}

const PageTitle: React.FC<PageTitleProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`hero-title text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-[-0.065em] ${className}`}>
      {children}
    </h1>
  )
}

export default PageTitle
