

 import React, { useRef } from 'react'
  import Cards from './Cards'

 
 const Foreground = () => {
  const ref = useRef(null)
  const data = [
    {desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In non consequuntur blanditiis delectus quod! Sed!", filesize:"2.9Gb", close:true,
    tag:{isOpen:true, tagtitle:"Download Now",tagColor:"green",isProgress:false}
  }
   ,

  {desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In non consequuntur blanditiis delectus quod! Sed!", filesize:"2.9Gb", close:false,
  tag:{isOpen:true, tagtitle:"Upload Now",tagColor:"blue",isProgress:true}
  }
   ,
   

  {desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. In non consequuntur blanditiis delectus quod! Sed!", filesize:"2.9Gb", close:true,
  tag:{isOpen:true, tagtitle:"Download Now",tagColor:"green", isProgress:false}
}
  
  ]
   return (
    <div ref={ref}   className="w-full h-full top-0 left-0 z-[3] fixed flex gap-[10%] flex-wrap p-5 ">
  
    {data.map((items,index) => (
      <Cards data={items} referrence={ref}  />
    ))}
    </div>

   )
 }
 
 export default Foreground
 
