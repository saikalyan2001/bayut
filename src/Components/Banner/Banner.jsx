import React from 'react'
import Tabs from './Tabs'

const Banner = () => {
  return (
    <div className='bg-[url("/banner.png")] min-h-[600px] bg-cover bg-center mx-4 rounded-xl flex flex-col items-center'>
        <div className='pt-16 text-white flex flex-col justify-center'>
        <h1 className='text-4xl font-semibold'>Real homes live here</h1>
        <h2 className='text-xl font-semibold'>   Real Prices. Real Photos. Real Properties.</h2>
        </div>
        <div className='mt-10'>
            <Tabs />
        </div>
    </div>
  )
}

export default Banner
