import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C157F] via-[#090909] to-[#200434] text-white p-6">
        <Header />

        <div className="px-64 py-10">
            <h1 className="text-7xl font-bold mb-8 space-y-4 space-x-4 tracking-wider leading-snug">Streamline Your Project Management Effortlessly</h1>
            <p className="text-2xl mb-8 text-gray-400">
                Manage Tasks, Collaborate With <span className="text-pink-500">Ease</span> , And Boost <span className="text-pink-500">Productivity</span> With Our Intutive Project Management Software.
            </p>
            <div className='flex space-x-12'>
                <button className="bg-[#137c87] hover:bg-[#01606b] px-12 py-2 rounded-full transition-colors duration-200 ">Try it Yourself</button>
                <button className="bg-gray-700 hover:bg-gray-600 px-12 py-2 rounded-full transition-colors duration-200">Watch a demo</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home