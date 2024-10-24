import React from 'react'
import BreastGallery from '../BreastEnhancement/BreastGallery'

const LaserTattooRemoval = () => {
    return (
        <>
            {/* Banner Section */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                {/* <img
                    src="/about/about-us-banner.jpg"
                    alt="about us banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover -z-50"
                /> */}
                <div className="fixed inset-0 bg-black bg-opacity-70 h-[70vh] -z-50 flex items-center justify-center text-gyellow text-center">
                    <div>
                        <h1 className="lg:text-6xl text-3xl font-bold">Laser Tattoo Removal                        </h1>
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
                                alt="Fillers and Botox Procedure"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Column: Text Section */}
                        <div className="relative ">
                            <h3 className="text-2xl text-gyellow font-bold mb-4">Laser Tattoo Removal</h3>
                            <p className="text-gyellow mb-4">
                                There are always instances when a tattoo is regretted and one wants to get rid of it .Laser tattoo removal is a safe and effective way of achieving it.
                            </p>

                            <p className="mb-4 text-gyellow">
                                At <b>Nypunya</b> our gold standard <b>US FDA</b> approved <b>Q Switched Nd YAG laser system (Pastelle ,Wontech,South Korea)</b> effectively reduces off all types of tattoos, amateur, professional and cosmetic.
                            </p>
                            <div className='flex flex-col gap-2'>
                                <p className="text-gyellow">→ The tattoo pigment selectively absorbs the laser energy, breaking down into much smaller particles which get flushed out by our body’s lymphatic system.</p>
                                <p className="text-gyellow">→ Sessions are comfortable as skin is numbed by prior application of topical anaesthetic.</p>
                                <p className="text-gyellow">→ Very little downtime, superior results with minimal scarring.</p>
                                <p className="text-gyellow">→ Satisfactory results after 5 – 10 sessions depending on depth of tattoo, body part etc.</p>
                            </div>

                            <p className="my-4 text-gyellow">
                                The Nypunya advantage is that for larger tattoos and colored tattoos that are difficult to get rid of by laser, a one time or serial plastic surgical excision can be done. One need never get stuck with a tattoo they regret. There is always a way out.
                            </p>
                        </div>
                    </div>
                    <div>
                        <BreastGallery />
                    </div>
                </div>
            </div>
        </>

    )
}

export default LaserTattooRemoval
