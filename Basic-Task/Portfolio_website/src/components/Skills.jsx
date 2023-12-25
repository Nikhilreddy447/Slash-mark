import React from 'react'
import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import JavaScript from '../assests/javascript.png';
import ReactImg from '../assests/react.png';
import Node from '../assests/node.png';
//import FireBase from '../assests/firebase.png';
import GitHub from '../assests/github.png';
import Tailwind from '../assests/tailwind.png';
import Mongo from '../assests/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#08192f] text-gray-300'>
      {/*Container*/}
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className=' text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            <p className=' py-4 '> These are the technologies I've worked with.</p>
        </div>

        <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto"src={HTML} alt="Html_icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto"src={CSS} alt="Css_icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto"src={JavaScript} alt="JavaScript_icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto"src={ReactImg} alt="React_icon" />
                <p className='my-4'>REACT JS</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto"src={Node} alt="Node_icon" />
                <p className='my-4'>NODE JS</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto"src={GitHub} alt="Git_icon" />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto"src={Tailwind} alt="Tailwind_icon" />
                <p className='my-4'>TAILWIND CSS</p>
            </div>
            <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className="w-20 mx-auto"src={Mongo} alt="Mongo_icon" />
                <p className='my-4'>MONGO DB</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
