import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  // navbar style
  const buttonStyle = {
    transition: 'all 0.3s linear',
    cursor: "pointer"
  }

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>LOGO.</h1>
          <ul className='hidden md:flex'>
          <li><Link to="home" style={buttonStyle}  smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" style={buttonStyle}  smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to="support" style={buttonStyle}  smooth={true} offset={-50} duration={500}>Products</Link></li>
          {/* <li><Link to="platforms" smooth={true} offset={-100} duration={500}></Link></li> */}
          <li><Link to="pricing" style={buttonStyle}  smooth={true} offset={-50} duration={500}>Why us?</Link></li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button style={buttonStyle} to="signup" smooth={true} duration={500} className='border-none bg-transparent text-black mr-4'>
            Sign Up
          </button>
          <button style={buttonStyle} className='px-8 py-3'>Contact Us</button>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li style={buttonStyle}  className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li style={buttonStyle}  className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li style={buttonStyle}  className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Product</Link></li>
          {/* <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li> */}
          <li style={buttonStyle}  className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Why us?</Link></li>

        <div className='flex flex-col my-4'>
            <button style={buttonStyle} to="signup" smooth={true} duration={500} className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign Up</button>
            <button style={buttonStyle} className='px-8 py-3'>Contact Us</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
