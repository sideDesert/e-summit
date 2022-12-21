import React from 'react'
import Gallery from './Gallery'

function Events() {
  return (
    <section>
        <div>
            <h2 className="text-center font-medium text-5xl text-blue">
                EVENTS
            </h2>
        </div>
        <div className='py-[3rem] lg:pt-0 lg:pb-[4rem]'>
            <Gallery></Gallery>
        </div>
    </section>
  )
}

export default Events