import React from 'react'

interface PageTitleProps {
  children: string
  className?: string
}

const PageTitle: React.FC<PageTitleProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight ${className}`}>
      {children}
    </h1>
  )
}

export default PageTitle
