import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const services = [
    { name: 'Breast Enhancement', route: '/plastic-surgery/breast-enhancement', image: '/servicee/breast-enhancement.web.webp' },
    { name: 'Body Contouring & Abdomino Plasty', route: '/plastic-surgery/body-contouring', image: '/servicee/body-contouring-abdomino-plasty.webp' },
    { name: 'Liposuction & Mega Liposuction', route: '/plastic-surgery/liposuction-and-mega-liposuction', image: '/servicee/body-contouring-abdomino-plasty.webp' },
    { name: 'Hair Transplant', route: '/plastic-surgery/hair-transplant', image: '/servicee/hair-transplant.jpg' },
    { name: 'Rhinoplasty', route: '/plastic-surgery/rhinoplasty', image: '/servicee/rhinoplasty.jpg' },
    { name: 'Anti-Ageing', route: '/plastic-surgery/anti-ageing', image: '/servicee/anti-ageing.jpg' },
];


const PlasticSurgery = () => {

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
                            Plastic Surgery <br />
                            Services
                        </h1>
                    </div>
                </div>
            </div>



            <div className="flex justify-center lg:p-0 p-4 b bg-rblue">
                <div className="container py-10">
                    {/* Tab with pages */}
                    <div className="flex justify-center  mb-16">
                        <div className='w-auto  border-gray-200 bg-white py-2'>
                            <NavLink
                                to="/plastic-surgery"
                                className={({ isActive }) =>
                                    `group px-4 py-2 text-lg font-semibold ${isActive ? 'border-1 border-l-2 bg-[#14202E] text-gyellow' : 'text-rblue'
                                    }`
                                }
                                data-aos="fade-right"
                            >
                                Plastic Surgery
                            </NavLink>
                            <NavLink
                                to="/dermatology"
                                className={({ isActive }) =>
                                    `px-4 py-2 text-lg font-semibold ${isActive ? 'bg-[#14202E] text-gyellow' : 'text-rblue'
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
                            <div key={index} className="group">
                                <div className=' w-full rounded-lg shadow-sm shadow-[#F0B609] group-hover:bg-[#F0B609]'>
                                    <Link href={service.route} >
                                        <img className="rounded-t-lg w-full h-64 object-cover shadow-sm" src={service.image} alt={service.name} />
                                    </Link>
                                    <div className="p-5  min-h-52 max-h-64 flex flex-col justify-between">
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <Link href={service.route}>
                                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#F0B609] group-hover:text-[#14202E]">
                                                        {service.name}
                                                    </h5>
                                                </Link>
                                            </div>
                                            <div>
                                                <p className="mb-3 mt-4 font-normal text-[14px] text-[#F0B609] group-hover:text-[#14202E]">
                                                    Discover more about our {service.name} treatment.
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <Link href={service.route} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Learn More
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </Link>
                                        </div>
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

export default PlasticSurgery
