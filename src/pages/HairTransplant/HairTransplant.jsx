import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery';

const HairTransplant = () => {
    return (

        <>
            <div className="relative w-full h-[70vh] overflow-hidden">
                {/* <img
                    src="https://placehold.co/400"
                    alt="about us banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover object-bottom -z-50"
                /> */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-gyellow text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">
                            HAIR TRANSPLANT

                        </h1>
                    </div>
                </div>
            </div>
            <div className='bg-rblue'>
                <div className="container mx-auto px-6 lg:px-12">
                    <section className="pt-12">
                        <div className="flex flex-col lg:flex-row items-center">
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                                <div className='text-center shadow-sm h-80 flex flex-col justify-center shadow-[#F0B609] text-[#F0B609] border-b border-[#F0B609]'>
                                    <img src='https://placehold.co/400' alt='' />
                                    {/* Image place holder */}
                                    {/* <img
                                src=""
                                alt="Lipo-Suction"
                                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110 flex flex-col items-center text-gyellow"
                            /> */}
                                </div>
                            </div>
                            {/* Text Section */}
                            <div className="w-full lg:w-1/2 lg:pl-12">
                                <h2 className="text-3xl font-bold text-gyellow underline-offset-8 underline decoration-2 decoration-[#F0B609] mb-4">Hair Transplant</h2>
                                <p className=" text-gyellow mb-6">
                                    Hair Transplant is the process where existing hair is transplanted
                                    from a donor site to a recipient site (the bald area).
                                </p>
                                <h3 className="text-2xl font-semibold text-gyellow mb-4 text-gyellow underline-offset-8 underline decoration-2 decoration-[#F0B609]">FUE (Follicular Unit Extraction)</h3>
                                <p className=" text-gyellow mb-6">
                                    FUE is the most advanced technology in hair transplant and restoration.
                                </p>
                                <ul className="list-none space-y-0  text-gyellow mb-6">
                                    <li className="group cursor-pointer hover:bg-[#F0B609] p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#14202E]">
                                        • The recovery is almost overnight.
                                    </li>
                                    <li className="group cursor-pointer hover:bg-[#F0B609] p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#14202E]">
                                        • No Scalpels, No Staples, No Sutures.
                                    </li>
                                    <li className="group cursor-pointer hover:bg-[#F0B609] p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#14202E]">
                                        • No Linear Scars in the back or temples.
                                    </li>
                                    <li className="group cursor-pointer hover:bg-[#F0B609] p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#14202E]">
                                        • Minimally invasive.
                                    </li>
                                    <li className="group cursor-pointer hover:bg-[#F0B609] p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#14202E]">
                                        • Natural-looking hairlines.
                                    </li>
                                    <li className="group cursor-pointer hover:bg-[#F0B609] p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#14202E]">
                                        • Dense packing and flexibility in hairstyles.
                                    </li>
                                    <li className="group cursor-pointer hover:bg-[#F0B609] p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#14202E]">
                                        • More grafts in a single session.
                                    </li>
                                    <li className="group cursor-pointer hover:bg-[#F0B609] p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:text-[#14202E]">
                                        • Faster recovery period.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div>
                        <BreastGallery />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HairTransplant;
