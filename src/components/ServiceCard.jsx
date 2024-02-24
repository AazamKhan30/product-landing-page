import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='shadow-3xl bg-white px-10 py-16 w-full sm:max-w-[350px] sm:min-w-[350px] flex-1 rounded-[20px]'>
        <div className='w-11 h-11 bg-coral-red rounded-full flex justify-center items-center'>
            <img src={imgURL} alt={label} width={24} height={24}/>
        </div>
        <h3 className=' mt-5 font-palanquin font-bold text-2xl leading-normal'>{label}</h3>
        <p className='mt-3 font-montserrat text-lg text-slate-gray break-words leading-normal'>{subtext}</p>
    </div>
  )
}

export default ServiceCard