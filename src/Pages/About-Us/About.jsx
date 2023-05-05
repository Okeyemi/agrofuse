import React from 'react'
import aboutus from '../../assets/aboutus.png'

const About = () => {
  return (
    <div>
      <div className='grid md:grid-cols-3 mx-12 '>
      <div className=' mt-3 '>
      <h2 className='md:text-4xl py-4 ml-20 font-bold'>About US </h2>
        <p className='text-[#293B14]  md:text-4xl font-semibold'> Sustainability in <br/>Agriculture: Our <br/> Approach to <br/>Responsible Farming</p>
        <p className='md:text-xl my-4 '>We empower farmers by providing them with <br/> a platform to connect them directly with <br/>buyers, aiming to create a more efficient,<br/> improve food security and sustainable <br/> agricultural supply chain that benefits<br/> farmers, buyers, and the wider community in <br/>Nigeria by providing High quality farming <br/>solutions, technical assistance and access to<br/> affordable credit and veterinary services.</p>
        <button className='button-style   ml-12 md:ml-0  md:my-15 mt-2'>Read more</button>
      </div>
      <div className='py-5 h-[500px] w-[440px]'>
        <img src={aboutus} alt="" />
      </div>
      <div className='mt-3 ml-7'>
      <p className='text-[#293B14]  md:text-4xl font-bold pt-4'> Our Product</p>
        <p className='md:text-xl mt-3'>Our platform connects farmers with buyers and investors who are our customer. Farmers can easily sell their products online, while buyers can<br/> purchase fresh and high-quality products directly from the farmers. Investors can also participate in supporting local farms by investing in them through our platform. </p>
      <p className='text-[#293B14]  md:text-4xl font-bold pt-4'> Our Customer</p>
        <p className='md:text-xl mt-3'>A secure and user-friendly platform for empowering farmers to sell their products directly to buyers; Allowing buyers to purchase high-quality farm-fresh produce and giving unique opportunity for investors to invest in sustainable agriculture. </p>
      </div>
      </div>
    </div>
  )
}

export default About