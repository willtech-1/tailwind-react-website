import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  const buttonStyle = {
    transition: 'all 0.3s linear',
    cursor: "pointer"
  }
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Why Us?</h2>
          <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
          <p className='text-3xl'>
           Providing value to our clients through ongoing product innovation.
          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Fencing</span>
            {/* <div>
              <p className='text-6xl font-bold py-4 flex'>R49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div> */}
            <p className='text-2xl py-8 text-slate-500'>Let's do it</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Easy Installation</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Razor wire & Spikes</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Wire mesh fencing</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Cost Effective</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Low Maintanace</p>
                <button style={buttonStyle}  className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            {/* <div>
              <p className='text-6xl font-bold py-4 flex'>R99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div> */}
            <p className='text-2xl py-8 text-slate-500'>Safety First</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Gates & Automation</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />General steel</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Steel fencing</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Precast concrete fencing.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />General steel fabrication</p>
                <button style={buttonStyle} className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
