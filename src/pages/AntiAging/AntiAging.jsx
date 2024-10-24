import React from 'react'
import BreastGallery from '../BreastEnhancement/BreastGallery'

const AntiAging = () => {
    return (
        <>

            <div className="relative w-full h-[70vh] overflow-hidden">
                {/* <img
                    src="/servicee/hair-transplant.jpg"
                    alt="about us banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover object-bottom -z-50"
                /> */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-gyellow text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">
                            ANTI-AGEING
                        </h1>
                    </div>
                </div>
            </div>
            <div className='bg-rblue'>
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="bg-[#14202E] text-[#F0B609] py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">ANTI-AGEING PROCEDURES</h2>
                            <h3 className="text-xl font-semibold mb-2">(Face Lift MACS / Thread Lift)</h3>
                            <ul className="list-disc pl-5">
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Age shows on the face first and is obvious
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Look younger by a decade by choosing the right anti-ageing procedure for you
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Best to customize the procedures than to opt for fixed format
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Combination of non-invasive and minimally invasive procedures to get the best outcome
                                </li>
                                <li className="group cursor-pointer p-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#F0B609] hover:text-[#14202E]">
                                    Rewind the clock of ageing safely
                                </li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <img src="https://via.placeholder.com/600x400" alt="Anti-Ageing Procedures" className="rounded-lg shadow-lg" />
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

export default AntiAging
