import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery';

const AcneAndScars = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                {/* Replace the image source below */}
                {/* <img
                    src="/servicee/acne-scar-treatment.jpg"
                    alt="Acne and Scars"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover object-bottom -z-50"
                /> */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-gyellow text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">
                            ACNE AND ACNE SCARS
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className='bg-rblue'>
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="bg-[#14202E] text-[#F0B609] py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Acne and Acne Scars</h2>
                            <ul className="list-disc pl-5">
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Acne scars can be psychologically disturbing and everyone who has them wishes to get rid of these craters and pits on their faces.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Acne is a chronic, inflammatory skin disease that results in whiteheads, blackheads, pimples, cysts, and nodules.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    It is not dangerous, but it can leave skin acne scars.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Acne scars are usually the result of inflamed blemishes caused by skin pores engorged with excess oil, dead skin cells, and bacteria.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    We use clinically proven medication including Laser treatment which provides you the fastest & most effective treatment to remove Acne, Scars, Pimple marks, etc., and gives you smoother, clearer, scar-free skin.
                                </li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <img src="https://via.placeholder.com/600x400" alt="Acne and Acne Scars" className="rounded-lg shadow-lg" />
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

export default AcneAndScars;
