import FacilitiesCarousel from "../../utils/FacilitiesCarousel";

const AboutUs = () => {
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
                        <h1 className="lg:text-6xl text-3xl font-bold">
                            About Us
                        </h1>
                    </div>
                </div>
            </div>

            <div className="bg-rblue">
                {/* Section 1 */}
                <div className="container mx-auto px-6 lg:px-12 py-12">
                    <div className="md:grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-[#F0B609]">ONLY THE BEST FOR YOU</h2>
                            <p className=" mb-3 text-gyellow">
                                What it takes to offer YOU the best Dermatology and Plastic Surgery Services?
                                Nypunya means ‘Expertise’ in Sanskrit. Our Doctors are Experts in the true sense...
                            </p>

                            <p className=" mb-3 text-gyellow">
                                Nypunya means ‘Expertise’ in Sanskrit. Our Doctors are Experts in the true sense. After training in the most prestigious medical institutes , gaining an immense wealth of clinical experience and earning many academic laurels. Our doctors have more than a decade of experience in clinical practice. Experience matters! They have performed a wide variety of aesthetic surgical and nonsurgical procedures and NYPUNYA boasts of thousands of happy and satisfied patients. They believe in constantly updating themselves with the latest techniques and cutting edge technologies and refining their skills.
                            </p>
                            <p className=" mb-3 text-gyellow">
                                Services and facilities at NYPUNYA are world class and comprehensive. The unique feature is the entire spectrum of Dermatology and plastic surgery services are provided under one roof. This makes NYPUNYA a one stop solution to fulfill all your aesthetic goals.
                                The best of Aesthetics, Dermatology and plastic surgery services to enhance the sense of well being and be the Best version of yourself!
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center">
                            <div className="bg-[#14202E] text-[#F0B609] p-6 rounded-lg shadow-sm shadow-[#F0B609] flex items-center justify-center h-auto">
                                <h3 className="text-2xl font-bold">Plastic Surgery Services</h3>
                            </div>
                            <div className="bg-[#14202E] text-[#F0B609] p-6 rounded-lg shadow-sm shadow-[#F0B609] flex items-center justify-center h-auto">
                                <h3 className="text-2xl font-bold">Dermatology Services</h3>
                            </div>
                            <div className="bg-[#14202E] text-[#F0B609] p-6 rounded-lg shadow-sm shadow-[#F0B609] flex items-center justify-center h-auto">
                                <h3 className="text-2xl font-bold">Qualified Doctors</h3>
                            </div>
                            <div className="bg-[#14202E] text-[#F0B609] p-6 rounded-lg shadow-sm shadow-[#F0B609] flex items-center justify-center h-auto">
                                <h3 className="text-2xl font-bold">100% Happy Patients</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="container mx-auto px-6 lg:px-12 py-12">
                    <h2 className="text-4xl font-bold text-center mb-6 text-gyellow">Our Vision & Mission</h2>
                    <div className="text-lg mb-6 text-gyellow">
                        <h3 className="font-bold text-xl underline underline-offset-8">Our Vision</h3>
                        <p className="mt-2">
                            To provide Dermatology and plastic surgery services to you, which is world class, custom made, value added, and ethical...
                        </p>
                        <h3 className="font-bold text-xl mt-4 underline underline-offset-8">Our Mission</h3>
                        <p className="mt-3">
                            You are the center of all our efforts here, We put all our expertise and experience to make your aesthetic dreams into reality...
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="container mx-auto px-6 lg:px-12 py-12">
                    <h2 className="text-4xl font-bold text-center mb-6 text-gyellow">Facilities at NYPUNYA</h2>
                    <FacilitiesCarousel />
                </div>

                {/* Section 4 */}
                <div className="container mx-auto px-6 lg:px-12 py-12">
                    <h2 className="text-4xl font-bold text-center mb-12
                     text-gyellow">Our Medical Specialists</h2>
                    <div className="flex flex-col md:flex-row justify-around items-center ">
                        <div className="relative w-full md:w-1/2 mx-6 flex flex-col justify-center items-center shadow-sm rounded-lg shadow-[#F0B609] group p-4">
                            <img src="/our-doctors/prashantha-kesari.jpg"
                                alt="Dr. Prashantha Kesari"
                                className="rounded-full h-80 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className=" inset-0 flex items-center justify-center text-center group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-[#14202E] bg-opacity-70 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-gyellow">Prashantha Kesari - Best Plastic Surgeon</h3>
                                    <p className="text-gyellow mt-2">Senior Consultant Cosmetic Plastic Surgeon | M.B.B.S, M.S, D.N.B, M.R.C.S, D.M.L.E, M.Ch (Plastic Surgery)</p>
                                    <p className="text-gyellow mt-2">PATIENT is the centre of Dr.Kesari’s clinical practice and he designs the treatment for individual needs and expectations.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full md:w-1/2 mx-4 flex flex-col justify-center items-center shadow-sm rounded-lg shadow-[#F0B609] group p-4">
                            <img src="/our-doctors/shubha.jpg"
                                alt="Dr. Shubha Kesari"
                                className="rounded-full h-80 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className=" inset-0 flex items-center justify-center text-center group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-[#14202E] bg-opacity-70 p-4 rounded-lg">
                                    <h3 className="text-xl font-bold text-gyellow">Shubha Kesari - Best Dermatologist</h3>
                                    <p className="text-gyellow mt-2 ">Senior Consultant - Dermatologist and Cosmetic Dermatologist | M.B.B.S, M.D(Mumbai) D.M.L.E, D.N.B.</p>
                                    <p className="text-gyellow mt-2">Senior Consultant - Dermatologist and Cosmetic Dermatologist | M.B.B.S, M.D(Mumbai) D.M.L.E, D.N.B.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
