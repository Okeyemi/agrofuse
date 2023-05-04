import React from 'react'
import Header from '../../Component/Header/Index'
import Imagedepictingservice1 from '../../assets/Imagedepictingservice1.png'
import Imagedepictingservice2 from '../../assets/Imagedepictingservice2.png'
import Imagedepictingservice3 from '../../assets/Imagedepictingservice3.png'

const Home = () => {
  return (
    <div  >
      <>
        <Header />
      </>

      {/* Our Serevice */}
    <div id='shop'>
      <div>
        <h3 className='text-center my-10 font-bold md:text-3xl  text-[#008000]'> Our Service </h3>
      </div>
      <div className="grid md:grid-cols-3 ">
      <div className="md:ml-20 ml-10">
        <h2 className='text-2xl py-4 md:text-left font-semibold'>Shop</h2>
        <p className='text-[#293B14]  md:text-4xl font-bold'> Fresh Products From   <br/> Farms </p>
        <p className='md:text-xl my-4 '>"Fresh products from farms offer a healthier <br/> and more flavorful option compared to their <br/> processed counterparts. By choosing farm- <br/>fresh produce, you are not only supporting <br/>local farmers but also promoting sustainable <br/> agriculture practices. Experience the <br/>difference in taste and nutrition with fresh <br/> products from farms today."</p>
        <button className='button-style  ml-12 md:ml-0  md:mt-15 mt-2'>Shop</button>
      </div>

      <div className='md:h-[642.82px] md:w-[900.22px] md:ml-20 mx-10 pt-20 md:pt-0 '>
        <img className=''  src={Imagedepictingservice1} alt="Our service" />
      </div>
      </div>

      <div className="grid md:grid-cols-2 mx-10  ">
      <div className='md:h-[642.82px] md:w-[860.22px] pt-20 md:pt-0 '>
        <img className=''  src={Imagedepictingservice2} alt="Our service" />
      </div>
      <div id='invest' className="text-right ">
        <h2 className='text-2xl py-4  font-semibold'>Investment</h2>
        <p className='text-[#293B14]  md:text-4xl font-bold'>Join Our Journey to <br/> Modernize Farming <br/> and Secure Your Financial Future </p>
        <p className='md:text-xl my-4 '>With the increasing demand for sustainable  <br/> agriculture, our journey towards modernizing <br/> farming can be your path to financial success.</p>
        <div className='mx-10 pr-32'>
        <button className='button-style  md:mt-15 mt-2'>Invest</button>
        </div>
      </div>
      </div>

      <div id='List' className="grid md:grid-cols-3 ">
      <div className="md:ml-20 ml-10">
        <h2 className='text-2xl py-4 md:text-left font-semibold'>Listing</h2>
        <p className='text-[#293B14]  md:text-4xl font-bold'> Get More Customers, Boost Your Income and Expand your Thriving Farm Today!</p>
        <p className='md:text-xl my-4 '>Implement proven marketing strategies and leverage innovative technologies to attract more customers, increase revenue streams, and take your farm to new heights of  <br/> success. </p>
        <button className='button-style  ml-12 md:ml-0  md:mt-15 mt-2'>List</button>
      </div>

      <div className='md:h-[642.82px] md:w-[900.22px] md:ml-20 mx-10 pt-20 md:pt-0 '>
        <img className=''  src={Imagedepictingservice3} alt="Our service" />
      </div>
      </div>
    </div>

      <div className="md:mt-32 ">
        <img src={Imagedepictingservice2} alt="Our service" />
      </div>
      <div className="bg-green-500 h-24"></div>
      <div className="bg-purple-500 h-24"></div>
      <div className=" my-6 h-24">
        
      </div>
    </div>
    
  )
}

export default Home