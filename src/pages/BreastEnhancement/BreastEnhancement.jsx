import React from 'react'
import BreastGallery from './BreastGallery'

const BreastEnhancement = () => {
    return (
        <>
            <style>
                {
                    `
        
                `
                }
            </style>
            <div className="relative w-full h-[70vh] overflow-hidden">
                {/* <img
                    src="/servicee/breast-enhancement.web.webp"
                    alt="about us banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover object-bottom -z-50"
                /> */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-gyellow text-center">
                    <div>
                        <h1 className="lg:text-5xl text-3xl font-bold">
                            Breast Enhancement,
                            <br />
                            Reshaping, Reduction
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex justify-center lg:p-0 p-4 b bg-rblue">
                <div className="container py-10 flex flex-col gap-10">
                    <div>
                        <h2 className="lg:text-4xl text-2xl text-gyellow pb-10">Breast Augmentation/Breast Enhancement </h2>
                        <div className='text-gyellow lg:grid grid-cols-2 flex flex-col justify-center items-center  gap-8'>
                            <div className='pt-5 flex flex-col gap-3'>
                                <li>
                                    Proportionately fuller breasts are essential
                                </li>
                                <li>
                                    Confidence and body image gets a boost with breast enhancement
                                </li>
                                <li>
                                    Safe, scientific approach gives the best outcome
                                </li>
                                <li>
                                    Planned to individual and precisely executed
                                </li>
                                <li>
                                    High quality silicone gel implants are only used
                                </li>
                                <li>
                                    Structural fat grafting combined with advanced tissue engineering solutions offer the new age breast enhancement
                                </li>
                            </div>
                            <div className='text-center shadow-sm h-auto overflow-hidden flex flex-col justify-center shadow-[#F0B609]'>
                                <img src='https://placehold.co/600x400' alt='' />
                                {/* Image place holder */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="lg:text-4xl text-2xl text-gyellow pb-10">Mastopexy / Breast Reshaping</h2>
                        <div className='text-gyellow lg:grid grid-cols-2 flex flex-col justify-center items-center gap-8'>
                            <div className='text-center shadow-sm h-auto overflow-hidden flex flex-col justify-center shadow-[#F0B609]'>
                                <img src='https://placehold.co/600x400' alt='' />
                                {/* Image place holder */}
                            </div>
                            <div className='pt-5 flex flex-col gap-3'>
                                <li>
                                    Proportionately fuller breasts are essential
                                </li>
                                <li>
                                    Confidence and body image gets a boost with breast enhancement
                                </li>
                                <li>
                                    Safe, scientific approach gives the best outcome
                                </li>
                                <li>
                                    Planned to individual and precisely executed
                                </li>
                                <li>
                                    High quality silicone gel implants are only used
                                </li>
                                <li>
                                    Structural fat grafting combined with advanced tissue engineering solutions offer the new age breast enhancement
                                </li>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="lg:text-4xl text-2xl text-gyellow pb-10">Scar less Breast reduction</h2>
                        <div className='text-gyellow lg:grid grid-cols-2 flex flex-col justify-center items-center  gap-8'>
                            <div className='pt-5 flex flex-col gap-3'>
                                <li>Reduction in volume up to 50 % can be achieved</li>
                                <li>Selectively fat component can be aspirated, relatively sparing the gland</li>
                                <li>Done through a 3mm port</li>
                                <li>No change in sensation, No scars</li>
                                <li>Designed for unmarried girls, who want reduction in breast volume</li>
                            </div>
                            <div className='text-center shadow-sm flex h-auto  overflow-hidden flex-col justify-center shadow-[#F0B609]'>
                                <img src='https://placehold.co/600x400' alt='' />
                                {/* Image place holder */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="lg:text-4xl text-2xl text-gyellow pb-10">Breast Reduction / Reduction Mastoplexy</h2>
                        <div className='text-gyellow lg:grid grid-cols-2 flex flex-col justify-center items-center gap-8'>
                            <div className='text-center shadow-sm h-auto  overflow-hidden flex flex-col justify-center shadow-[#F0B609]'>
                                <img src='https://placehold.co/600x400' alt='' />
                                {/* Image place holder */}
                            </div>
                            <div className='pt-5 flex flex-col gap-3'>
                                <li>Disproportionately large breasts can be embarrassing and can cause neck pain</li>
                                <li>Reducing and reshaping of breasts is a mathematical surgery with precise outcome</li>
                                <li>Vertical reduction, medial pedicle – gives natural shape, minimal scar</li>
                                <li>Combined with liposuction of adjacent areas to give a sculpted  upper body</li>
                            </div>
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

export default BreastEnhancement
