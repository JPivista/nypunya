import React from 'react';
import BreastGallery from '../BreastEnhancement/BreastGallery';

const BodyContouringPage = () => {
    return (
        <>

            <div className="relative w-full h-[70vh] overflow-hidden">
                {/* <img
                    src="/servicee/body-contouring-abdomino-plasty.webp"
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
                    <div className="min-h-screen flex flex-col items-center justify-center bg-[#14202E] p-6">
                        {/* <h1 className="text-5xl font-extrabold text-center mb-10 text-[#F0B609]">Body Contouring Procedures</h1> */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section className="bg-[#14202E] rounded-lg shadow-sm hover:shadow-md hover:shadow-[#F0B609] shadow-[#F0B609] transition-shadow duration-300 overflow-hidden">
                                <div className="relative overflow-hidden">

                                    <div className='text-center shadow-sm h-80 overflow-hidden flex flex-col justify-center shadow-[#F0B609] text-[#F0B609] border-b border-[#F0B609]'>
                                        <img src='https://placehold.co/600x400' alt='' />
                                        {/* Image place holder */}
                                        {/* <img
                                src=""
                                alt="Lipo-Suction"
                                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110 flex flex-col items-center text-gyellow"
                            /> */}
                                    </div>

                                    <div className="absolute top-0 left-0 bg-[#F0B609] text-white text-lg font-bold p-2">
                                        01. Lipo-Suction
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="mb-2 text-gyellow">Body contouring is a safe and simple procedure.</p>
                                    <p className="mb-2 text-gyellow">Done by trained plastic surgeons - it is very effective and results are pleasing.</p>
                                    <p className="mb-2 text-gyellow">Usually, it is a daycare or short stay procedure.</p>
                                    <p className="mb-4 text-gyellow">Results take around 6 – 8 weeks to show.</p>
                                    <p className="mb-4 text-gyellow">Side effects are very few and can be efficiently prevented.</p>
                                    <p className="mb-4 text-gyellow">Proportionate physique is a prized possession!</p>
                                </div>
                            </section>

                            <section className="bg-[#14202E] rounded-lg shadow-sm hover:shadow-md hover:shadow-[#F0B609] shadow-[#F0B609] transition-shadow duration-300 overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <div className='text-center shadow-sm h-80 overflow-hidden flex flex-col justify-center shadow-[#F0B609] text-[#F0B609] border-b border-[#F0B609]'>
                                        <img src='https://placehold.co/600x400' alt='' />
                                        {/* Image place holder */}
                                        {/* <img
                                src=""
                                alt="Lipo-Suction"
                                className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110 flex flex-col items-center text-gyellow"
                            /> */}
                                    </div>
                                    <div className="absolute top-0 left-0 bg-[#F0B609] text-white text-lg font-bold p-2">
                                        02. Massive Weight Loss
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="mb-2 text-gyellow">What is the use of losing weight and still unable to get the body you like?</p>
                                    <p className="mb-2 text-gyellow">Belt lipectomy, arm, and thigh plasty gets your confidence back.</p>
                                    <p className="mb-2 text-gyellow">Done regularly as staged procedures.</p>
                                    <p className="mb-4 text-gyellow">Circumferential body contouring gives a meaningful end to your weight loss story.</p>
                                </div>
                            </section>
                        </div>

                        <div>
                            <BreastGallery />
                        </div>

                        {/* Additional styles for responsiveness and overall aesthetics */}
                        <style jsx>{`
                section:hover img {
                    filter: brightness(0.9);
                }
            `}</style>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BodyContouringPage;
