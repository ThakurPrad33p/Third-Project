import React from 'react'
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6"; 
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="absolute bottom-8 left-0 right-0">
        <hr className="border-t-2 border-gray-600" />
        <div className='flex flex-col items-center justify-center gap-4' >
            <div>
                <p className='text-gray-400 leading-10 tracking-wider'>Join More Than 1,000+ Companies Trusted By Metafied</p>
            </div>
            <div className='flex gap-24'>
                <FaMeta size={30} />
                <FaGoogle size={30} />
                <FaTwitter size={30} />
                <FaInstagram size={30}/>
                <FaFacebook size={30}/>
                <FaLinkedin size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Footer