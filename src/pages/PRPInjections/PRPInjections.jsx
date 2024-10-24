import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery';

const PRPInjections = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="/about/about-us-banner.jpg"
                    alt="PRP Injections banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover -z-50"
                />
                <div className="fixed inset-0 bg-black bg-opacity-70 h-[70vh] -z-50 flex items-center justify-center text-white text-center">
                    <div>
                        <h1 className="lg:text-6xl text-3xl font-bold text-gyellow">Platelet Rich Plasma (PRP) Injections</h1>
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
                                alt="PRP Injection Procedure"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Column: Text Section */}
                        <div className="relative ">
                            <h3 className="text-2xl font-bold mb-4 text-gyellow">Platelet Rich Plasma Injections</h3>
                            <p className="text-gyellow mb-4">
                                Platelet Rich Plasma (PRP) injections are a convenient office procedure used in the management of:
                            </p>

                            <ul className="list-disc list-inside text-gyellow space-y-2">
                                <li>Hair Loss</li>
                                <li>Skin lightening and texture improvement</li>
                                <li>Acne scars</li>
                            </ul>

                            <p className="text-gyellow mb-4">
                                The process involves drawing a specific quantity of the patient's blood, which is then processed through centrifugation.
                                Only the portion of the blood highly concentrated with platelets is harvested, known as Platelet-Rich Plasma (PRP). PRP in aesthetic
                                treatments typically has 5-6 times the platelets present in normal blood.
                            </p>

                            <p className="text-gyellow mb-4">
                                When injected into the skin (scalp or face), PRP releases various tissue regeneration and growth factors that act on the dominant
                                cells in the area. This results in significant improvements in both hair and skin health.
                            </p>

                            <h4 className="text-xl font-bold mb-4 text-gyellow">PRP for Hair:</h4>
                            <p className="text-gyellow mb-4">
                                When injected into the scalp, PRP increases hair girth, strengthens hair anchorage, and reduces hair fall, ultimately improving hair density.
                            </p>

                            <h4 className="text-xl font-bold mb-4 text-gyellow">PRP for Skin:</h4>
                            <p className="text-gyellow mb-4">
                                When injected into facial skin, PRP acts on collagen fibers, inducing collagen remodeling. This leads to improvements in skin tone and texture.
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

export default PRPInjections;
