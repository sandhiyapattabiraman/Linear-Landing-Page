import '../App.css'

function NavBar(classname=""){
    return(
        <>
                <nav >
                    <div className={` fixed px-2 py-4 pl-68 z-10 bg-black pr-70 border-b-1 border-gray-900  w-full ${classname}`}>
                        <ul className='flex flex-row text-gray-400/80 text-sm gap-8 items-center justify-between font-medium '>

                        <div className=' text-xl flex flex-row items-center gap-2 cursor-pointer mr-25'>
                        
                            <img src="https://asset.brandfetch.io/iduDa181eM/iduUajoOBW.png" alt="linear logo" className='h-5 w-5'/>
                            <span className='text-white'>Linear</span>
                        </div>

                        <div className='flex flex-row items-center gap-5'>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg cursor-pointer'>Product</li>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg cursor-pointer'>Resources</li>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg cursor-pointer'>Pricing</li>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg cursor-pointer'>Customers</li>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg cursor-pointer'>Blog</li>
                            <li className='hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg cursor-pointer'>Contact</li>
                        </div>

                        <div className='flex flex-row gap-4  items-center ml-10 pr-0'>
                            <p className='text-gray-400/80 font-medium hover:text-white hover:bg-gray-800 p-2 hover:rounded-lg cursor-pointer'>Docs</p>
                            <button className='bg-gray-200 text-black font-medium rounded-lg py-2 px-3 text-center hover:bg-white cursor-pointer'>Open app</button>
                        </div>
                        </ul>
                    </div>
                </nav>

        </>
    )
}

export default NavBar;