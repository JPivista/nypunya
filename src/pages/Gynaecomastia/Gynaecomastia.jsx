import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery';

const Gynaecomastia = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                {/* You can replace the image source below */}
                {/* <img
                    src="/servicee/gynaecomastia.jpg"
                    alt="gynaecomastia banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover object-bottom -z-50"
                /> */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-gyellow text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">
                            GYNAECOMASTIA
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className='bg-rblue'>
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="bg-[#14202E] text-[#F0B609] py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">GYNAECOMASTIA (Male Breast / Moobs)</h2>
                            <ul className="list-disc pl-5">
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Sensible solution to a SENSITIVE PROBLEM.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    All of the GLAND and FAT is removed.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Chest contouring and pecs etching also done.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Entire gland is removed through a 3 mm port.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    No need for an around the nipple cut, minimal discomfort.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Most of the excess skin contracts with time.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Pleasing results in 6 to 8 weeks, significant change appreciated immediately.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Start with the customer – find out what they want and give it to them.
                                </li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <img src="https://via.placeholder.com/600x400" alt="Gynaecomastia" className="rounded-lg shadow-lg" />
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

export default Gynaecomastia;
