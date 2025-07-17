import '../App.css'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

function home(){
    return(
        <>
            <div className='pl-[18%]  pr-[25%] pt-[9%] h-screen'>
            <motion.h1
            initial = {{opacity: 0 , y:60 , filter: "blur(12px)"}}
            animate = {{opacity: 1, y:0, filter: "blur(0)"}}
            transition={{duration: 1, ease:[0.5, 0, 0.3 , 1], delay: 0.1}}
            className='text-white text-[3.375rem] tracking-tight leading-16 font-semibold '            
            > 
            Linear is a purpose-built tool for planning and building products
            </motion.h1>
            <motion.p 
            initial = {{opacity: 0 , y:60 , filter: "blur(12px)"}}
            animate = {{opacity: 1, y:0, filter: "blur(0)"}}
            transition={{duration: 1, ease:[0.5, 0, 0.3 , 1], delay: 0.3}}
            className='text-zinc-400 pt-6 text-2xl tracking-tighter  font-semibold '
            >
              Meet the system for modern software development.
            </motion.p>
            <motion.p
            initial = {{opacity: 0 , y:60 , filter: "blur(12px)"}}
            animate = {{opacity: 1, y:0, filter: "blur(0)"}}
            transition={{duration: 1, ease:[0.5, 0, 0.3 , 1], delay: 0.3}}
            className='text-zinc-400  text-2xl/6 tracking-tighter font-semibold '
            >
            Streamline issues, projects, and product roadmaps.
            </motion.p>

            <motion.div 
            initial = {{opacity: 0 , y:60 , filter: "blur(12px)"}}
            animate = {{opacity: 1, y:0, filter: "blur(0)"}}
            transition={{duration: 1, ease:[0.5, 0, 0.3 , 1], delay: 0.5}}
            className='flex flex-row gap-6 pt-9'
            >
              <button className='bg-gray-200 hover:bg-white py-2 text-sm font-semibold px-4 rounded-lg cursor-pointer '>Start building</button>

              <div className='hover:bg-zinc-900 rounded-lg flex justify-center px-4 items-center'>

                <button className=' py-2 flex  bg-clip-text text-transparent font-semibold text-base bg-gradient-to-r from-white to-gray-600 cursor-pointer '> 
                    <span>Introduce Linear for Agents</span> 
                    <ChevronRight className='text-zinc-500 h-6 w-6 pl-1 pt-1'/>
                </button>
              </div>
            </motion.div>
          </div>
        </>
    )
}

export default home;