import { useState } from 'react'
import {AiFillAndroid} from "react-icons/ai"
import {MdOutlineWeb} from "react-icons/md"
import Bgimg from "../Assets/1st.png"
import Sidebg from "../Assets/sidebg.png"
import {FiFigma} from "react-icons/fi"
import Image from "next/image"
import Slider from 'react-slick';
import ProfileCard from './components/ProfileCard';
import Navbar from './components/Navbar'



export default function Main() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const profiles = [
    {
      name: 'Vairamuthu M',
      email: 'mvairamuthu2003@gmail.com',
      image: 'https://avatars.githubusercontent.com/u/88650559?v=4',
      Position: 'Co-Founder',
      Profession: 'Web3-Developer',
      Contributor:'Open Source Contributor',
    },
    {
        name: 'Nagi Pragalathan',
        email: 'nagipragalathan@gmail.com',
        image: 'https://media.licdn.com/dms/image/D5603AQFHd3kG-7zwxw/profile-displayphoto-shrink_400_400/0/1672584349709?e=1687392000&v=beta&t=bm3h8sVtdgoOx5SR8UcZ0vR-T9lZkvSwdCT_3Nw_xDE',
        Position: 'Co-Founder',
        Profession: 'Web3-Developer',
        Contributor:'Open Source Contributor',
      },
      {
        name: 'Thiru Murugan',
        email: 'thirumurugan82003@gmail.com',
        image: 'https://pbs.twimg.com/profile_images/1601831104033755139/AUNQ0wR7_400x400.jpg',
        Position: 'Co-Founder',
        Profession: 'Web3-Developer',
        Contributor:'Open Source Contributor',
      },
      {
        name: 'Prashant',
        email: 'prashantd048@gmail.com',
        image: 'https://media.licdn.com/dms/image/D5603AQGDBL7lhmCs6w/profile-displayphoto-shrink_800_800/0/1672680301344?e=1687392000&v=beta&t=93sTRun_BMpArlhKGGPJIik3FEeJl3decLXlvjt347A',
        Position: 'Co-Founder',
        Profession: 'Web3-Developer',
        Contributor:'Open Source Contributor',
      },
   
    
    
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
     <Navbar />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1255/428] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#001DFF] to-[#001DFF] opacity-80 sm:left-[calc(70%-20rem)] sm:w-[62.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl pt-32 sm:pt-48 pb-20 lg:pt-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight headtag sm:text-6xl">
              We Code We Deliver
            </h1>
            <p className='text-2xl mt-2'>Building Tomorrows Technology Today</p>
            <p className="mt-6 text-lg leading-8 ">
              Gryffindor is a tech startup that specializes in developing innovate <br/> solutions to help business succeed in the digital age. Our team of <br/> expert developers and designers work together!!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-2xl border-2 border-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className='flex'>
        <div
  className="absolute  transform-gpu overflow-hidden blur-3xl "
          aria-hidden="true"
>
<div
  className= "  aspect-[1255/628] w-[36.125rem]  rotate-[30deg] bg-gradient-to-r from-[#001DFF] to-[#001DFF] opacity-80 sm:left-[calc(100%-60rem)] sm:w-[62.1875rem]"
  style={{
    clipPath:
      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  }}
/>
</div>
<div
  className="absolute pl-80 transform-gpu overflow-hidden blur-3xl "
          aria-hidden="true"
>
<div
  className="relative aspect-[1005/928] w-[36.125rem]   bg-gradient-to-r from-[#FF00FF] to-[#FF00FF] opacity-80 sm:left-[calc(20%-80rem)] sm:w-[62.1875rem]"
  style={{
    clipPath:
      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  }}
/>
</div>
<Image src={Bgimg} alt='' />
<div
  className="absolute pr-80 transform-gpu overflow-hidden blur-3xl "
          aria-hidden="true"
>
<div
  className="relative  aspect-[100/100] w-[36.125rem]  rotate-[290deg] bg-gradient-to-r from-[#001DFF] to-[#001DFF] opacity-80 sm:right-[calc(20%-60rem)] sm:w-[62.1875rem]"
  style={{
    clipPath:
      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
  }}
/>
</div>
</div>
<div className="flex gap-44 ">
<div>
<p className="text-6xl font-bold mt-20">What we Do?</p>
<div className='flex gap-20 mt-20 '><p className='text-6xl'><AiFillAndroid /></p><p className='text-xl'>Building mobile applications is never easy.<br/> P2P lending app ? Logistic App ? E-Commerce App ? <br/>We have done them all. Done them all well.<br/> Done them all fast.
</p></div>
<div className='flex gap-20 mt-5'><p className='text-6xl'> <MdOutlineWeb /> </p><p className='text-xl'>We can build any web applications you need. 
<br/>A personal blog ? Company Profile ? E-commerce ? 
<br/>or any specific functionalities ? We got you covered! 
<br/>We have a strong team of web developers that can 
<br/>follow your stack and needs.</p></div>
<div className='flex gap-20 mt-5'><p className='text-6xl'><FiFigma /></p><p className='text-xl'>All things are designed. A few things are designed well. 
<br/>We try to elevate your ideas with great UI/UX design, 
<br/>suited to your taste, addressing the right pain points.</p></div>
</div>
<div>

    <Image className=" max-w-fit mt-32 h-[450px]" src={Sidebg} alt="" />
</div>

</div>
<div>
    <p className="text-6xl text-center mt-32 font-bold ">Teams</p>
<div className="flex gap-5">
{/* <Slider {...settings}> */}
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    {/* </Slider> */}
    </div>
</div>
<div >
      <div >
        <div className="relative isolate overflow-hidden bg-gradient-to-br from- bg-[#FF00FF] bg-opacity-50 via-white to-rgba(255, 0, 255, 0.2)  shadow-white px-6 pt-16 mt-40 shadow-lg sm:rounded-3xl ">
            <p className="text-4xl font-bold  text-center">Discuss A Project</p>
            <p className="text-lg font-bold mt-2 text-center">The information we will send and respond to you</p>
            <div className="sm:px-16 flex md:pt-24 py-32 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
              <div className="bg-[#000000] flex flex-col gap-4 mt-10  bg-opacity-40 py-10 rounded-xl">
              <label className='text-xl pl-10 opacity-60'>Name</label>
              <input className='bg-[#000000] w-96  opacity-60 outline-none  mx-10 bg-opacity-0 border-b-2 border-white' type="text" /> 
              <label className='text-xl pl-10 opacity-60'>Email Id</label>
              <input className='bg-[#000000] outline-none opacity-60  mx-10 bg-opacity-0 border-b-2 border-white'  type="email" />
              <label className='text-xl pl-10 opacity-60'>Phone No.</label>
              <input className='bg-[#000000] outline-none  opacity-60 mx-10 bg-opacity-0 border-b-2 border-white' type="text" />
              </div>
              <div className="bg-[#000000] flex flex-col gap-4 mt-10  bg-opacity-40 py-32 rounded-xl">
              <label className='text-xl pl-10 opacity-60'>Tell us About your Idea</label>
              <input className='bg-[#000000] w-96 outline-none opacity-60 mx-10 bg-opacity-0 border-b-2 border-white' type="text" /> 
              </div>
            </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}