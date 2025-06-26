import BackButton from '@/components/BackButton'
import TourForm from '@/components/tours/TourForm'
import React from 'react'

function page() {
  return (
    <div className='container mx-auto '>
      <BackButton className="mt-40"/>
      <TourForm />
    </div>
  )
}

export default page
