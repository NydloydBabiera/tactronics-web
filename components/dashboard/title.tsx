import React from 'react'
import PageTitle from '@/components/ui/PageTitle'
import Subtitle from '@/components/ui/Subtitle'
import DashboardImage from './DashboardImage'

const Title = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 px-4 py-8">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:basis-1/2 max-w-2xl animate-float-up">
        <PageTitle className="mb-6">Tactronics</PageTitle>
        <Subtitle>
          Building emerging technologies<br />
          for a better life and a better future
        </Subtitle>
      </div>

      <div className="w-full lg:basis-1/2 flex items-center justify-center">
        <DashboardImage className="w-full max-w-xl lg:max-w-2xl" />
      </div>
    </div>
  )
}

export default Title
