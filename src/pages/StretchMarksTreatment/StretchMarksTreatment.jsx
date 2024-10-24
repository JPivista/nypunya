import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery';

const StretchMarksTreatment = () => {
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
                        <h1 className="lg:text-6xl text-3xl font-bold text-gyellow">Stretch Marks Treatment</h1>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className="bg-rblue py-12">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-6 items-center">
                        {/* Left Column: Image */}
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <img
                                src="https://via.placeholder.com/600x400"
                                alt="Stretch Marks Treatment Procedure"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Column: Text Section */}
                        <div className="relative ">
                            <h3 className="text-2xl font-bold mb-4 text-gyellow">Stretch Marks Treatment</h3>
                            <p className="text-gyellow mb-4 ">
                                Stretch Marks are caused due to the disruption of collagen and elastic fibres as the skin stretches.
                                This is a very stubborn condition to treat and often requires combination of multiple modalities.
                            </p>

                            <p className="text-gyellow mb-4 ">
                                At Nypunya, microneedling Radio Frequency and Fractional CO2 Laser resurfacing, alone or in combination, are
                                often used and give good results, especially in pubertal stretch marks on the arms, legs, and around knees.
                            </p>

                            <h4 className="text-xl font-bold mb-4 text-gyellow">Combination Treatments at Nypunya:</h4>
                            <ul className="list-disc list-inside text-gyellow space-y-2">
                                <li className="">Microneedling and Platelet-rich plasma infusion for tissue modulation.</li>
                                <li className="">TCA peels to lighten hyperpigmented stretch marks.</li>
                                <li className="">Q-switched Nd:YAG laser, particularly effective for red erythematous stretch marks.</li>
                            </ul>

                            <h4 className="text-xl font-bold mb-4 mt-6 text-gyellow">For Post-Pregnancy Stretch Marks:</h4>
                            <p className="text-gyellow mb-4 ">
                                For extensive post-pregnancy stretch marks, our plastic surgeon performs a tummy tuck surgery. This not only gives
                                a flat, ironed-out abdomen but also completely removes the stretch marks in the lower abdomen.
                            </p>
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

export default StretchMarksTreatment;
