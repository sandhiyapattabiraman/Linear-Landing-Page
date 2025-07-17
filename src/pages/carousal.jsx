import '../App.css'
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react'


function AnimatedLogoSlot({ images, invert = false, interval = 3000, transition = 200 }) {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setIsAnimating(true);
            }, transition);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval, transition]);

    return (
        <div className="relative h-10 w-40 flex justify-center items-center overflow-hidden">
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt=""
                    className={`
                        absolute h-10 w-40 object-contain transition-all duration-500
                        ${invert ? 'invert' : ''}
                        ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                        ${i === index && isAnimating ? "scale-100" : "scale-90"}
                    `}
                />
            ))}
        </div>
    );
}

function carousal() {
    const firstRow = [
        [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ramp_Business_Corporation_Logo.svg/250px-Ramp_Business_Corporation_Logo.svg.png",
            "https://images.indiehackers.com/post-images/UJu7H1MTEfYx0Yy871jV/tSHyRvzNLWPnx4sBYEdtWkmq4u93/cursor%20logo-words.jpg?w=700",
            "https://brandlogo.org/wp-content/uploads/2024/09/Perplexity-AI-Logo-2023-Black.png.webp"
        ],
        [
            "https://www.logo.wine/a/logo/OpenAI/OpenAI-Logo.wine.svg",
            "https://upload.wikimedia.org/wikipedia/commons/4/49/Brex_Inc._Corporate_Logo.png",
            "https://download.logo.wine/logo/Supercell_(video_game_company)/Supercell_(video_game_company)-Logo.wine.png"
        ],
        [
            "https://fs.hubspotusercontent00.net/hubfs/7405301/email%20marketing/New%20Branded%20Logos/RemoteLogo_H_white.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scale_AI.svg/1200px-Scale_AI.svg.png",
            "https://seekvectors.com/storage/images/monzo-bank-logo-02.png"
        ]
    ];

    const secondRow = [
        [
            "https://cdn.prod.website-files.com/60027286c9c6666444da9930/6838cf83bc0e36e3527d61e1_raycast.8d4fa45c.png",
            "https://download.logo.wine/logo/Boom_Technology/Boom_Technology-Logo.wine.png",
            "https://brandlogo.org/wp-content/uploads/2024/09/Perplexity-AI-Logo-2023-Black.png.webp"
        ],
        [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Retool_logo.svg/2560px-Retool_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/1/1a/Runway_Logo.png",
            "https://freelogopng.com/images/all_img/1660060019cash-app-logo-black.png"
        ],
        [
            "https://www.kenility.com/sites/default/files/2024-10/LogosNotas-04.png",
            "https://www.drupal.org/files/styles/grid-4-2x/public/vercel-logotype-dark.png?itok=77xK3WvQ",
            "https://cdn.prod.website-files.com/64c7a317aea92912392c0420/64e7962774748cd500c4d0de_mercury-logo-horizontal__1_.webp"
        ]
    ];

    return (
        <div className='flex flex-col  justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-white text-2xl tracking-tight'>Powering the world's best product teams.</h1>
                <h1 className='text-zinc-400 text-2xl tracking-tight'>From next-gen startups to established enterprises.</h1>
            </div>
            <div className="relative pt-15 mx-[22%] group">
                
                <div className="absolute inset-0 top-20   flex justify-center items-center">
                    <div className=' hidden group-hover:block border-1 border-zinc-600  bg-zinc-800 rounded-full px-4 py-1'>
                    <p className="hidden group-hover:flex text-white text-center text-base  font-semibold z-10">
                        Meet our customers <span className='pt-1 pl-1'><ChevronRight/></span>
                    </p>
                    </div>
                </div>

                <div className="group-hover:blur-sm transition  duration-300">
                    
                    <div className="flex gap-50 justify-center mt-8">
                        {firstRow.map((images, i) => (
                            <AnimatedLogoSlot key={i} images={images} invert={true} />
                        ))}
                    </div>

                    
                    <div className="pt-[15%] flex gap-50 justify-center">
                        {secondRow.map((images, i) => (
                            <AnimatedLogoSlot key={i} images={images} invert={i !== 0} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default carousal;