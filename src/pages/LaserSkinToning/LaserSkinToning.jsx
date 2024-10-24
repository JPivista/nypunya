import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery';

const LaserSkinToning = () => {
    return (
        <>
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="/about/about-us-banner.jpg"
                    alt="about us banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover -z-50"
                />
                <div className="fixed inset-0 bg-black bg-opacity-70 h-[70vh] -z-50 flex items-center justify-center text-white text-center">
                    <div>
                        <h1 className="lg:text-6xl text-3xl font-bold text-gyellow">
                            Laser Skin Toning
                        </h1>
                    </div>
                </div>
            </div>

            {/* Text Section */}
            <div className="bg-rblue">
                <div className="container mx-auto px-6 lg:px-12 py-12">
                    <div className="bg-[#14202E] p-6 rounded-b-lg w-full shadow-md shadow-[#F0B609]">
                        <h3 className="text-2xl font-bold text-gyellow mb-4">Laser Skin Toning</h3>
                        <p className="text-gyellow mb-4">
                            Laser facials are a highly effective and hugely popular method of facial rejuvenation. This primarily targets pigmentation issues like sun tan, post-inflammatory hyperpigmentation due to pimples or allergies, dry uneven tone, age spots, and sun-damaged skin.
                        </p>
                        <p className="text-gyellow mb-4">
                            At Nypunya, we use the US FDA approved Q-switched Nd YAG laser system (Pastelle, Wontech, South Korea). The 532nm range is used for removing freckles, age spots, lentigines, and birthmarks like café au lait spots.
                        </p>
                        <p className="text-gyellow mb-4">
                            Large birthmarks like Nevus of Ota and Becker’s Nevus can also be significantly lightened. Laser toning in the conventional mode is a highly effective and safe way to address patchy, uneven skin and dull skin.
                        </p>
                        <p className="text-gyellow mb-4">
                            Dual toning with the Genesis mode helps to tighten skin texture and reduce the appearance of open pores. Usually, multiple sessions (6 – 8) at fortnightly intervals are required, depending on laser usage and skin type.
                        </p>
                        <p className="text-gyellow mb-4">
                            Our signature ‘CARBON PEEL’ or Hollywood Peel provides instant glowing skin, applying a layer of carbon as a photo enhancer followed by laser energy, offering an instant glow and skin hydration with no downtime.
                        </p>
                        <p className="text-gyellow mb-4">
                            Laser skin toning is not limited to the face. It can also be used for areas like dark knees, elbows, underarms, intimate areas, and other parts of the body.
                        </p>
                    </div>
                    <div>
                        <BreastGallery />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LaserSkinToning;
