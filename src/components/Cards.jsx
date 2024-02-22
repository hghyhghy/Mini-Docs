  
  
  
  import React, { useState } from 'react'
  import { FaRegFileAlt } from "react-icons/fa";
  import { FiDownload } from "react-icons/fi";
  import { IoClose } from "react-icons/io5";
  import {motion} from "framer-motion"
  import Progress from './Progress';
  import { useSpring } from "framer-motion"



  
  const Cards = ({data,referrence}) => {

  const x = useSpring(0)


    return (
        <motion.div 
        animate={{
          scale: [1, 1, 1, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        
        style={{x}}
        drag dragConstraints={referrence} dragElastic={0.2}  whileDrag={{scale:1.2}}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        
        className=" relative flex-shrink-0 w-60 h-72 bg-sky-200 rounded-[45px] bg-zinc-900/90 
        py-10 px-8 text-white font-semibold overflow-hidden">
        <FaRegFileAlt/>
        <p className="mt-5 text-sm font-semibold leading-tight">
        {
        data.desc
        }</p>
        <div className="absolute bottom-0 left-0 w-full footer">
            <div className="flex items-center justify-between px-8 py-3 mb-3">

            <h5>
            {
            data.filesize
            }</h5>
            <span className="flex items-center justify-center w-8 h-8 mb-3 rounded-full bg-zinc-600">
            {
            data.close ? <IoClose/>:<FiDownload size="0.7em" color="#fff" className="cursor-pointer "/>
            }
            </span>
            </div>

             
            {

              data.tag.isOpen && 
              ( <div className={`flex items-center justify-center w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} tag`}> 
                          
                  <h3 className="text-sm font-semibold">{data.tag.tagtitle} </h3>
              </div>  )
              
            }
        </div>

        {

          data.tag.isProgress ?


          <div className="absolute mt-[18.5%] rounded-lg">
          <Progress/>
  
          </div> : null
          

        }
                
        </motion.div>

        
    )
  }
  
  export default Cards
  