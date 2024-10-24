import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery';

const Rhinoplasty = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                {/* You can replace the image source below */}
                {/* <img
                    src="/servicee/rhinoplasty.jpg"
                    alt="rhinoplasty banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover object-bottom -z-50"
                /> */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-gyellow text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">
                            RHINOPLASTY
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className='bg-rblue'>
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="bg-[#14202E] text-[#F0B609] py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">RHINOPLASTY PROCEDURES</h2>
                            <h3 className="text-xl font-semibold mb-2">(Nose Job)</h3>
                            <ul className="list-disc pl-5">
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Nose is the center of face and contributes significantly to the appearance
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Nose should be proportionate, pleasant, and problem-free
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Shape of the nose is very individual and rhinoplasty should preserve the natural look
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Rhinoplasty (commonly referred to as a “nose job”) involves reshaping the nose.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Can be cosmetic or medically necessary to improve nasal breathing.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Healing after rhinoplasty is slow and gradual with subtle swelling.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Return to work in one to two weeks, and resume strenuous activity in two to three weeks.
                                </li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <img src="https://via.placeholder.com/600x400" alt="Rhinoplasty Procedures" className="rounded-lg shadow-lg" />
                        </div>
                    </div>

                    {/* Gallery */}
                    <div>
                        <BreastGallery />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rhinoplasty;
