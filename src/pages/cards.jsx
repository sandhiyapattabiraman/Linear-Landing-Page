import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react'
import '../App.css'


function Cards() {

    const [expandedCard, setExpandedCard] = useState(null);

    const cards = [
        {
            title: 'Purpose-built for\nproduct development',
            img: 'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/93514696-592a-4764-aa98-b6101349a100/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
        },
        {
            title: 'Designed to move fast',
            img: 'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/5a4ff140-41a2-42dd-0723-e14cccc3e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
        },
        {
            title: 'Crafted to perfection',
            img: 'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0068f657-fe3f-47e9-6819-0ba9e6533900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
        },
    ];

    return (
        <>
            <div className="  flex flex-row items-end mb-15">
                <h1 className="text-white  text-[3.375rem] w-[90%]   font-semibold tracking-tight leading-[1.1] ">
                    Made for modern <br /> product teams
                </h1>
                <p className="text-zinc-400 text-sm w-[60%] mr-25 mt-2">
                    Linear is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.
                    <span className="font-semibold text-white cursor-pointer inline-flex items-center ml-2 group">
                        Make the switch
                        <ChevronRight
                            size={20}
                            className="ml-1 pt-1 transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </span>
                </p>
            </div>

            <div className="flex flex-row gap-2 justify-center  w-full ">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="group bg-[#18181A] rounded-[2.5rem] group-hover:bg-zinc-800 hover:bg-zinc-800 flex flex-col justify-between items-start p-6 w-[460px] h-[350px] relative shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] cursor-pointer transition-all"
                        onClick={e => {
                            setExpandedCard(idx);
                        }}
                    >
                        <img
                            src={card.img}
                            alt=""
                            className=" h-80 object-contain self-center"
                        />
                        <div className="w-[200px]">
                            <h2 className="text-white text-xl font-semibold ">
                                {card.title.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>{line}<br /></React.Fragment>
                                ))}
                            </h2>
                        </div>
                        
                        <button
                            className="absolute bottom-5 cursor-pointer right-8 h-10 w-10 flex items-center pb-1 justify-center rounded-full border border-zinc-700 bg-[#18181A] transition
                                group-hover:bg-zinc-700 group-hover:border-zinc-500"
                            onClick={e => { e.stopPropagation(); setExpandedCard(idx); }}
                        >
                            <span className="text-2xl text-zinc-400 group-hover:text-white">+</span>
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal Overlay */}
            {expandedCard !== null && (
                <div className="fixed inset-0  z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={() => setExpandedCard(null)}>
                    <div
                        className="relative bg-[#18181A] rounded-t-[2.5rem] rounded-b-none inset-shadow-gray-900 flex flex-col items-center mt-20 p-8 max-w-4xl w-[80vw] px-40 h-screen overflow-y-auto dark-scrollbar "
                        onClick={e => e.stopPropagation()}
                    >
                        <button className="sticky top-0 h-10 w-10 self-end mt-[-1rem] mr-[-7rem] z-10 text-zinc-400 hover:text-white text-3xl rounded-full border border-zinc-700 bg-[#18181A] flex items-center justify-center transition" onClick={() => setExpandedCard(null)}>&times;</button>
                        {expandedCard === 0 && (
                            <>
                                {/* Card Image */}
                                <img src={cards[expandedCard].img} alt="" className="object-contain max-w-full h-auto  rounded-2xl" />
                                {/* Title */}
                                <h2 className="text-white text-4xl font-bold text-center mb-10">
                                    {cards[expandedCard].title.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>{line}<br /></React.Fragment>
                                    ))}
                                </h2>
                                {/* Description */}
                                <div className="text-zinc-300 text-lg max-w-2xl mx-auto mb-12 text-start">
                                    <p className="mb-4">Linear was developed with a specific purpose: to empower product teams to do their best work. Every aspect is intentionally designed to help teams focus on what they do best: Planning, building, and shipping great products.</p>
                                    <p className="mb-4">Because of its fit-to-purpose design, Linear is incredibly easy to use, but grows more powerful as you scale. It's principled where it needs to be, but provides enough flexibility to adapt to your team's unique way of working.</p>
                                    <p className="mb-8">We believe that this approach creates a better way to build products. And more than 10,000 product teams around the globe – from early-stage startups to public companies – agree.</p>
                                </div>
                                {/* Testimonial/Stats Block */}
                                <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
                                    <hr className="border-zinc-800 w-full mb-10" />
                                    <div className="text-center mb-8">
                                        <p className="text-zinc-200 text-xl md:text-lg font-medium mb-6">“We'd tried many tools before Linear but none of them felt like they were made for the way we work. Linear was a breath of fresh air - speedy, snappy, and a pleasure to use."</p>
                                        <div className="flex justify-center items-center gap-2">
                                            <img src="https://1000logos.net/wp-content/uploads/2024/08/Vercel-Logo.png" className='h-20 invert ' alt="" />
                                        </div>
                                    </div>
                                    <hr className="border-zinc-800 w-full mb-10" />
                                    <div className="grid grid-cols-2 gap-y-10 pb-20 gap-x-12 w-full text-center">
                                        <div>
                                            <div className="text-white text-7xl font-semibold mb-2">10k+</div>
                                            <div className="text-zinc-400 text-base">Paying customers</div>
                                        </div>
                                        <div>
                                            <div className="text-white text-7xl font-semibold mb-2">500k+</div>
                                            <div className="text-zinc-400 text-base">Active users</div>
                                        </div>
                                        <div>
                                            <div className="text-white text-7xl font-semibold mb-2">45%</div>
                                            <div className="text-zinc-400 text-base">of YC companies build with Linear</div>
                                        </div>
                                        <div>
                                            <div className="text-white text-7xl font-semibold mb-2">66%</div>
                                            <div className="text-zinc-400 text-base">of the top AI startups use Linear</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {expandedCard === 1 && (
                            <>
                                {/* Card Image */}
                                <img src={cards[expandedCard].img} alt="" className="object-contain max-h-[400px] w-full mb-8" />
                                {/* Title */}
                                <h2 className="text-white text-4xl font-bold text-center mb-4">Designed to move fast</h2>
                                {/* Description */}
                                <div className="text-zinc-300 text-lg max-w-2xl mx-auto mb-12 text-start ">
                                    <p className="mb-4">Linear is built in pursuit of high-performance. With its keyboard-first design, realtime sync, and zero-friction workflows, it delivers a focused experience ideal for fast-paced development environments.</p>
                                    <p className="mb-4">Linear's obsessive focus on speed not only results in improved developer productivity, but also enables teams to move faster.</p>
                                    <p className="mb-4">Companies that switch to Linear report a significant uplift in newly filed tickets, vastly reduced issue closing times, and products that ship faster.</p>
                                    <p className="mb-8">For us, speed is not just an afterthought. It's our most important feature.</p>
                                </div>
                                {/* Testimonial/Stats Block */}
                                <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
                                    <hr className="border-zinc-800 w-full mb-10" />
                                    <div className="text-center mb-8">
                                        <p className="text-white text-2xl md:text-2xl font-medium mb-12">
                                            "Even as we continue to grow, we're moving faster because Linear keeps our workflows simple."
                                        </p>
                                        <div className="flex justify-center items-center gap-2">
                                        <img src="https://cdn.prod.website-files.com/66223ff378053361d64df325/66793d946c05826d2402db6b_remote-logo.png" className='h-10 invert ' alt="" />
                                        </div>
                                    </div>
                                    <hr className="border-zinc-800 w-full mb-10" />
                                    <div className="grid grid-cols-2 gap-y-10 pb-20 gap-x-12 w-full text-center">
                                        <div>
                                            <div className="text-white text-7xl font-bold mb-2">2x</div>
                                            <div className="text-zinc-400 text-base">Increase in filed issues</div>
                                        </div>
                                        <div>
                                            <div className="text-white text-7xl font-bold mb-2">1.6x</div>
                                            <div className="text-zinc-400 text-base">Faster issue resolution</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {expandedCard === 2 && (
                            <>
                                {/* Card Image */}
                                <img src={cards[expandedCard].img} alt="" className="object-contain max-h-[400px] w-full mb-8" />
                                {/* Title */}
                                <h2 className="text-white text-4xl font-bold text-center mb-4">Crafted to perfection</h2>
                                {/* Description */}
                                <div className="text-zinc-300 text-lg max-w-2xl mx-auto mb-12 text-start">
                                    <p className="mb-4">We believe that there is a lost art of building software. A craftsmanship that yields products of an exceptional, almost magical, quality.</p>
                                    <p className="mb-4">It's difficult to describe this quality with words and impossible to measure it in numbers, but you can feel it when it's there. You know it when you experience it.</p>
                                    <p className="mb-4">Achieving this product quality is a function of both the talent of its creators and the tools at their disposal. Linear was built in pursuit of giving the best product teams a tool that matches their skill and ambition.</p>
                                    <p className="mb-4">A tool with unparalleled speed, precision-engineered robustness, and pixel-perfect UI. A tool that abstracts away any impurity that stands in the way between the creator and their craft. A tool that finally lets product teams focus on what matters most:</p>
                                    <p className="mb-8">Bringing back product experiences of the highest level of quality.</p>
                                </div>
                                {/* Testimonial/Stats Block */}
                                <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
                                    <hr className="border-zinc-800 w-full mb-10" />
                                    <div className="text-center mb-8">
                                        <p className="text-white text-2xl md:text-2xl font-medium mb-6">
                                            "In a world of clunky, slow, and bloated tools, Linear reverses the script on all three and adds an unrivaled level of delight and polish."
                                        </p>
                                        <div className="flex justify-center items-center gap-2">
                                        <img src="https://zubr.co/wp-content/uploads/2024/11/Watershed-logo-grey.png" className='h-10 invert ' alt="" />
                                        </div>
                                    </div>

                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Cards;