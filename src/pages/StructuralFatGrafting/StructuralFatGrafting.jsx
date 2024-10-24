import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery';

const StructuralFatGrafting = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                {/* You can replace the image source below */}
                {/* <img
                    src="/servicee/structural-fat-grafting.jpg"
                    alt="structural fat grafting banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover object-bottom -z-50"
                /> */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-gyellow text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">
                            STRUCTURAL FAT GRAFTING
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className='bg-rblue'>
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="bg-[#14202E] text-[#F0B609] py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">STRUCTURAL FAT GRAFTING</h2>
                            <ul className="list-disc pl-5">
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Thinning of the face is a revealing sign of aging.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    The loss of subcutaneous fat has significant effects on your appearance.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Eyes look sunken, cheeks appear hollow, wrinkles form, and skin droops.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Replenishing facial volume restores a youthful, vibrant appearance.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    In structural fat grafting, your own fat is used to fill in facial hollows.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    It lifts cheeks, softens wrinkles, and smooths out facial folds.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Structural fat grafting is natural, permanent, and free from allergic reactions.
                                </li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <img src="https://via.placeholder.com/600x400" alt="Structural Fat Grafting" className="rounded-lg shadow-lg" />
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

export default StructuralFatGrafting;
