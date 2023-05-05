import React from 'react'
import bestseller1 from '../../assets/bestseller1.png' 
import bestseller2 from '../../assets/bestseller2.png' 

const Shop = () => {
  return (
    <div  > 
      <div className='bg-[#F5F5F5] pb-10'>
        <h3 className='text-[#008000] text-center font-bold md:text-3xl pt-16' >
        Best Selling Products
        </h3>
        <div className='mt-14 mx-12'>
        <img src={bestseller1} alt="bestseller" />
        <img className='mt-9' src={bestseller2} alt="" />
        </div>
        <div className='flex justify-center mb-4 mt-5'>
      <button className='button-style   '>shop</button>
        </div>
      </div>
      
    </div>
  )
}

export default Shop