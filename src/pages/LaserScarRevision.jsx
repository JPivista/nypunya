import React from 'react';
import BreastGallery from './BreastEnhancement/BreastGallery';

const LaserScarRevision = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="/about/about-us-banner.jpg"
                    alt="Laser Scar Revision banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover -z-50"
                />
                <div className="fixed inset-0 bg-black bg-opacity-70 h-[70vh] -z-50 flex items-center justify-center text-white text-center">
                    <div>
                        <h1 className="lg:text-6xl text-3xl font-bold text-gyellow">Laser Scar Revision</h1>
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
                                alt="Laser Scar Revision Procedure"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Column: Text Section */}
                        <div className="relative ">
                            <h3 className="text-2xl font-bold mb-4 text-gyellow">Laser Scar Revision</h3>
                            <p className="text-gyellow mb-4">
                                At Nypunya, optimum care is assured through advanced technology. We use a US FDA-approved platform device (FRAXIS DUO),
                                which incorporates both Fractional Ablative CO2 laser and Fractional Microneedle Radiofrequency system.
                            </p>

                            <h4 className="text-xl font-bold mb-4 text-gyellow">Fractional CO2 Laser</h4>
                            <p className="text-gyellow mb-4">
                                The fractional CO2 laser delivers non-contiguous microscopic columns of heat energy into the deeper layers of the skin
                                while preserving the surrounding skin. This helps in the repair process, promoting new collagen formation and collagen remodeling.
                                The ultimate result is an improvement in the appearance of scars.
                            </p>

                            <h4 className="text-xl font-bold mb-4 text-gyellow">Fractional Microneedling Radiofrequency</h4>
                            <p className="text-gyellow mb-4">
                                This combines mechanical and thermally induced tissue changes to stimulate new collagen formation, resulting in scar improvement and tissue tightening.
                            </p>

                            <h4 className="text-xl font-bold mb-4 text-gyellow">Combination of Modalities</h4>
                            <p className="text-gyellow mb-4">
                                When both modalities are combined, excellent results are achieved for various kinds of scars, significantly reducing downtime and minimizing potential side effects.
                            </p>

                            <h4 className="text-xl font-bold mb-4 text-gyellow">Scars Managed by This Laser:</h4>
                            <ul className="list-disc list-inside text-gyellow space-y-2">
                                <li>All kinds of acne scars (atrophic, rolling, boxcar, etc.)</li>
                                <li>Traumatic scars</li>
                                <li>Chickenpox scars</li>
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

export default LaserScarRevision;
