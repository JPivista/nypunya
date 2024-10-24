import React from 'react';

const OurTeam = () => {
    return (
        <>
            <div>
                <div className="relative w-full h-[70vh] overflow-hidden">
                    {/* <img
                        src="/our-team.webp"
                        alt="about us banner"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    /> */}
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-gyellow text-center">
                        <div>
                            <h1 className="lg:text-5xl text-3xl font-bold p-4">
                                SPECIALISTS AT NYPUNYA
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specialists Section */}
            <div className='bg-rblue'>
                <div className="container mx-auto px-6 lg:px-12 py-12 flex flex-col gap-8">
                    {/* Dr. Prashantha Kesari */}
                    <div className="bg-[#14202E] text-[#F0B609] lg:p-10 p-5 rounded-lg shadow-sm shadow-[#F0B609] transition duration-300 ease-in-out hover:bg-[#F0B609] hover:text-[#14202E] hover:shadow-[#14202E] lg:flex  lg:flex-row flex-col ">
                        <div className="lg:w-1/3 mr-4 flex flex-col items-center justify-center">
                            <img
                                src="/our-doctors/prashantha-kesari.jpg" // replace with the actual image path
                                alt="Dr. Prashantha Kesari"
                                className="lg:rounded-full w-full h-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="lg:text-4xl text-2xl font-bold mb-6 lg:mt-0 mt-4">Prashantha Kesari - Best Plastic Surgeon</h2>
                            <h3 className="text-xl font-semibold mb-2">Dr. Prashantha Kesari N K</h3>
                            <p className="mb-4">Senior Consultant Cosmetic Plastic Surgeon | M.B.B.S, M.S, D.N.B, M.R.C.S, D.M.L.E, M.Ch (Plastic Surgery)</p>
                            <p className="mb-4">
                                Plastic Surgery is a work of art and the surgeon, an artist. Unlike other surgical specialties, plastic surgery requires a great deal of imagination, skill, and systematic analysis. Dr. Prashantha Kesari is blessed with these qualities and has received extensive training in Plastic Surgery, gaining a wealth of experience in the best and busiest hospitals in the country.
                            </p>
                            <p className="mb-4">
                                He obtained an ‘Advanced fellowship in Cosmetic and Laser surgery’ after training extensively in one of the best cosmetic surgery centres. Dr. Kesari has quality surgical experience by working with the best-known surgeons for over nine years and has won gold medals and a number of awards throughout his career.
                            </p>
                            <p className="mb-4">
                                His expertise involves Cosmetic Surgery, especially liposuction, mega liposuction, body contouring procedures, breast surgeries, and facial plastic surgery. Dr. Kesari is formally trained in hair transplantation and laser surgeries, with a strong foundation in general surgery and plastic reconstructive and microvascular surgery practice.
                            </p>
                            <p className="mb-4">
                                He has innovated numerous surgical instruments and published many scientific papers. Dr. Kesari believes that the patient is the center of clinical practice, designing treatments for individual needs and expectations.
                            </p>
                        </div>
                    </div>

                    {/* Dr. Shubha Kesari */}
                    <div className="bg-[#14202E] text-[#F0B609] lg:p-10 p-5 rounded-lg shadow-sm shadow-[#F0B609] transition duration-300 ease-in-out hover:bg-[#F0B609] hover:text-[#14202E] hover:shadow-[#14202E] lg:flex  lg:flex-row flex-col ">
                        <div className="lg:w-1/3 mr-4 flex flex-col items-center justify-center">
                            <img
                                src="/our-doctors/shubha.jpg" // replace with the actual image path
                                alt="Dr. Shubha Kesari"
                                className="lg:rounded-full w-full h-auto"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="lg:text-4xl text-2xl font-bold mb-6 lg:mt-0 mt-4">Shubha Kesari - Best Dermatologist</h2>
                            <h3 className="text-xl font-semibold mb-2">Dr. Shubha M Kesari</h3>
                            <p className="mb-4">Senior Consultant - Dermatologist and Cosmetic Dermatologist | M.B.B.S, M.D(Mumbai) D.M.L.E, D.N.B.</p>
                            <p className="mb-4">
                                Dr. Shubha M Kesari is a well-qualified and experienced Dermatologist with a special interest in Cosmetic Dermatology. She completed her M.D. Dermatology from LTM Medical College, securing the Gold Medal for Maharashtra University of Health Sciences.
                            </p>
                            <p className="mb-4">
                                Dr. Kesari has extensively trained in cosmetic dermatology procedures like lasers, Botox, fillers, and peels under renowned plastic surgeons and cosmetic dermatologists. Her academic career is meritorious, winning awards at state and national conferences.
                            </p>
                            <p className="mb-4">
                                She believes in keeping abreast of the latest advances in her field and has participated as a skincare expert in various television programs and as a faculty in dermatology conferences. Her patient-centric approach ensures that patient care is of paramount importance.
                            </p>
                            <p className="mb-4">
                                By combining the needs and wishes of her patients with her expertise, Dr. Kesari tailors effective treatment regimens that have garnered appreciation from thousands of her patients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurTeam;
