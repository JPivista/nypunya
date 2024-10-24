import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery'

const LaserHairRemoval = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="/about/about-us-banner.jpg"
                    alt="about us banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover -z-50"
                />
                <div className="fixed inset-0 bg-black bg-opacity-70 h-[70vh] -z-50 flex items-center justify-center text-white text-center">
                    <div>
                        <h1 className="lg:text-6xl text-3xl font-bold">Fillers and Botox</h1>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className="bg-rblue">
                <div className="container mx-auto px-6 lg:px-12 py-12">
                    <div className="grid lg:grid-cols-2 gap-6 items-center">
                        {/* Left Column: Image */}
                        <div className="w-full">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Laser Hair Removal Procedure"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Column: Text Section */}
                        <div className="bg-[#14202E] ">
                            <h3 className="text-2xl font-bold text-[#F0B609] mb-4">Laser Hair Removal</h3>
                            <p className="text-gyellow text-lg mb-4">
                                Thick dense hair in unwanted areas is often bothersome and a lot of time, effort and money
                                is spent in regularly keeping it in check. Laser Hair reduction offers an effective way of
                                permanent and persistent hair reduction and gives freedom from cumbersome epilatory procedures
                                like waxing etc. The laser energy targets the entire hair follicle, the bulb, and the stem cells
                                in the bulge area.
                            </p>

                            <h4 className="text-xl font-bold text-[#F0B609] mb-4">The Advantage of Laser Hair Reduction at NYPUNYA:</h4>
                            <ul className="list-disc pl-5 text-[#F0B609]">
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Latest and most advanced technology for permanent hair reduction.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Triple wavelength laser (755nm, 810nm, 1064nm) suitable for all skin types and thick & thin hair.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    CE certified German laser machine, CYMEDICS Platinum Plus for superior results and uncompromising patient safety.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    In-motion technology with a cooled sapphire tip applicator making the treatment very comfortable and virtually painless.
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Suitable for all body areas, large areas like face, neck, bikini, and underarms.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <BreastGallery />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LaserHairRemoval;
