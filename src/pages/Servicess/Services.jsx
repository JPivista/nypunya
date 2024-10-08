

const services = [
    { name: 'Breast Enhancement', route: '/plastic-surgery/breast-enhancement', image: '/servicee/breast-enhancement.web.webp' },
    { name: 'Body Contouring & Abdomino Plasty', route: '/plastic-surgery/body-contouring', image: '/servicee/body-contouring-abdomino-plasty.webp' },
    { name: 'Hair Transplant', route: '/plastic-surgery/hair-transplant', image: '/servicee/hair-transplant.jpg' },
    { name: 'Rhinoplasty', route: '/plastic-surgery/rhinoplasty', image: '/servicee/rhinoplasty.jpg' },
    { name: 'Anti-Ageing', route: '/plastic-surgery/anti-ageing', image: '/servicee/anti-ageing.jpg' },
    { name: 'Acne and Acne Scars', route: '/dermatology/acne-and-scars', image: '/servicee/acne-and-acne-scars.jpg' },
    { name: 'Laser Hair Removal', route: '/dermatology/laser-hair-removal', image: '/servicee/laser-hair-removal.jpg' },
    { name: 'Fillers and Botox', route: '/dermatology/fillers-and-botox', image: '/servicee/fillers-and-botox.webp' },
    { name: 'Pigmentation Dark Circle', route: '/dermatology/pigmentation-dark-circle', image: '/servicee/pigmentation-dark-circle.webp' }
];


const Services = () => {
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
                            Services
                        </h1>
                    </div>
                </div>
            </div>

            <div className="flex justify-center lg:p-0 p-4 b bg-[#DFEDFF]">
                <div className="container lg:py-28">
                    <div class="sm:hidden">
                        <label for="tabs" class="sr-only">Select your country</label>
                        <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Profile</option>
                            <option>Dashboard</option>
                            <option>setting</option>
                            <option>Invoioce</option>
                        </select>
                    </div>
                    <ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                        <li class="w-full focus-within:z-10">
                            <a href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Profile</a>
                        </li>
                        <li class="w-full focus-within:z-10">
                            <a href="#" class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Dashboard</a>
                        </li>
                        <li class="w-full focus-within:z-10">
                            <a href="#" class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Settings</a>
                        </li>
                        <li class="w-full focus-within:z-10">
                            <a href="#" class="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Invoice</a>
                        </li>
                    </ul>


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

export default Services
