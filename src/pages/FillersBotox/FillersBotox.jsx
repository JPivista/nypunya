import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery';

const FillersBotox = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="/about/about-us-banner.jpg"
                    alt="about us banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover -z-50"
                />
                <div className="fixed inset-0 bg-black bg-opacity-70 h-[70vh] -z-50 flex items-center justify-center text-gyellow text-center">
                    <div>
                        <h1 className="lg:text-6xl text-3xl font-bold">Fillers and Botox</h1>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className="bg-rblue py-12">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-6 items-center">
                        {/* Left Column: Image */}
                        <div className="w-full h-full">
                            <img
                                src="/services-nypunya/fillers-botox-left.jpg"
                                alt="Fillers and Botox Procedure"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Column: Text Section */}
                        <div className="relative ">
                            <h3 className="text-2xl text-gyellow font-bold mb-4">Fillers and Botox</h3>
                            <p className="text-gyellow mb-4">
                                Botulinum Toxin injections are the most popular non-surgical cosmetic procedure performed world over.
                                The toxin inhibits the release of neurotransmitters at nerve-muscle junction causing the muscles to relax.
                            </p>

                            <p className="text-gray-300 mb-4 text-gyellow">
                                This helps to soften and erase the dynamic wrinkles and smoothen static wrinkles on the face. Equipped
                                with a thorough knowledge of the anatomy of facial muscles, our experienced injectors achieve good cosmetic
                                results and avoid side effects.
                            </p>

                            <h4 className="text-xl font-bold mb-4 text-gyellow">Botulinum Toxin injections are used to smoothen:</h4>
                            <ol className="list-disc list-inside text-gray-300 space-y-2">
                                <li className="text-gyellow">Forehead lines.</li>
                                <li className="text-gyellow">Crow's feet.</li>
                                <li className="text-gyellow">Frown lines.</li>
                                <li className="text-gyellow">Bunny lines.</li>
                                <li className="text-gyellow">Smokers' lines around the mouth.</li>
                                <li className="text-gyellow">Dimpled chin.</li>
                            </ol>

                            <h4 className="text-xl font-bold mb-4 mt-6 text-gyellow">
                                It is also an extremely useful tool to modulate facial features to achieve a more pleasant countenance:
                            </h4>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li className="text-gyellow">Shaping of eyebrows.</li>
                                <li className="text-gyellow">Reducing nasal flare.</li>
                                <li className="text-gyellow">Reducing gummy smile.</li>
                                <li className="text-gyellow">Elevating tip of the nose.</li>
                                <li className="text-gyellow">Elevating angle of the mouth (sad look to happy look).</li>
                                <li className="text-gyellow">Rounding off a squarish face by injecting masseters.</li>
                                <li className="text-gyellow">Smoothening necklines and neckbands for neck rejuvenation.</li>
                                <li className="text-gyellow">Sharp jawline by doing the Nefertiti lift.</li>
                            </ul>

                            {/* <h4 className="text-xl font-bold mb-4 mt-6 text-gyellow">Additional Uses:</h4> */}
                            <p className="text-gray-300 my-4 text-gyellow">
                                Excessively sweaty palms and underarms can also be treated with BOTOX injection. Results show up in a week's time,
                                start wearing off after 4 months, and the treatment needs to be repeated after 6 months.
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

export default FillersBotox;
