import React from 'react'
import { NavLink } from 'react-router-dom';

const services = [
    { name: 'Acne and Acne Scars', route: '/dermatology/acne-and-scars', image: '/servicee/acne-and-acne-scars.jpg' },
    { name: 'Laser Hair Removal', route: '/dermatology/laser-hair-removal', image: '/servicee/laser-hair-removal.jpg' },
    { name: 'Fillers and Botox', route: '/dermatology/fillers-and-botox', image: '/servicee/fillers-and-botox.webp' },
    { name: 'Pigmentation Dark Circle', route: '/dermatology/pigmentation-dark-circle', image: '/servicee/pigmentation-dark-circle.webp' },
    { name: 'Laser Tattoo Removal', route: '/dermatology/laser-tattoo-removal', image: '/servicee/pigmentation-dark-circle.webp' },
    { name: 'PRP', route: '/prp', image: '/servicee/pigmentation-dark-circle.webp' },
];

const Dermetology = () => {

    return (
        <>
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="/services.webp"
                    alt="about us banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover -z-50"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-white text-center">
                    <div>
                        <h1 className="lg:text-6xl text-3xl font-bold">
                            Dermatology <br />
                            Services
                        </h1>
                    </div>
                </div>
            </div>



            <div className="flex justify-center lg:p-0 p-4 b bg-[#DFEDFF]">
                <div className="container py-10">
                    {/* Tab with pages */}
                    <div className="flex justify-center  mb-16">
                        <div className='w-auto border-b border-gray-200 bg-white py-2'>
                            <NavLink
                                to="/plastic-surgery"
                                className={({ isActive }) =>
                                    `group px-4 py-2 text-lg font-semibold ${isActive ? 'border-b-2 bg-[#14202E] text-white' : 'text-gray-600'
                                    }`
                                }
                                data-aos="fade-right"
                            >
                                Plastic Surgery
                            </NavLink>
                            <NavLink
                                to="/dermatology"
                                className={({ isActive }) =>
                                    `px-4 py-2 text-lg font-semibold ${isActive ? 'border-b-2 bg-[#14202E] text-white' : 'text-gray-600'
                                    }`
                                }
                                data-aos="fade-left"
                            >
                                Dermatology
                            </NavLink>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                        {services.map((service, index) => (
                            <div key={index} className="w-fll bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href={service.route} >
                                    <img className="rounded-t-lg w-full h-64 object-cover shadow-sm" src={service.image} alt={service.name} />
                                </a>
                                <div className="p-5  min-h-52 max-h-64 flex flex-col justify-between">
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <a href={service.route}>
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                    {service.name}
                                                </h5>
                                            </a>
                                        </div>
                                        <div>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                Discover more about our {service.name} treatment.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <a href={service.route} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Learn More
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Dermetology
