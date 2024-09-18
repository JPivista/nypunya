import CountUp from 'react-countup';
import { Link, NavLink } from 'react-router-dom';

import Slider from 'react-slick';


const services = [
    {
        category: 'Plastic Surgery',
        links: [
            { name: 'Breast Enhancement', route: '/services/plastic-surgery/breast-enhancement' },
            { name: 'Body Contouring & Abdomino Plasty', route: '/services/plastic-surgery/body-contouring' },
            { name: 'Hair Transplant', route: '/services/plastic-surgery/hair-transplant' },
            { name: 'Rhinoplasty', route: '/services/plastic-surgery/rhinoplasty' },
            { name: 'Anti-Ageing', route: '/services/plastic-surgery/anti-ageing' }
        ]
    },
    {
        category: 'Dermatology',
        links: [
            { name: 'Acne and Acne Scars', route: '/services/dermatology/acne-and-scars' },
            { name: 'Laser Hair Removal', route: '/services/dermatology/laser-hair-removal' },
            { name: 'Fillers and Botox', route: '/services/dermatology/fillers-and-botox' },
            { name: 'Pigmentation Dark Circle', route: '/services/dermatology/pigmentation-dark-circle' }
        ]
    }
];

const AboutMedical = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 9900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        variableWidth: true,
    };


    return (
        <>
            <style>
                {
                    `
              .carousel-container {
                    width: 100%;
                    overflow: hidden;
                    background-color: #f1f1f1; /* Background color */
                }

                .slick-slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .grid-item {
                    display: grid;
                    grid-template-columns: auto 1fr; /* Image first, then text */
                    align-items: center;
                    gap: 2rem; /* Space between image and text */
                    padding: 1rem; /* Padding around each item */
                }

                .scroll-text {
                    display: inline-block;
                    // font-size: 1.5rem;
                    // color: #333;
                    text-decoration: none; /* Remove underline from NavLink */
                }

                .star-img {
                    width: 50px; /* Adjust size as needed */
                    height: 50px;
                    animation: rotate 10s linear infinite; /* Rotate image continuously */
                }

                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(-360deg);
                    }
                }
                    @media(max-width:1279px) {
                    .slick-slider {
                        height: 85px;
                    }
                }
            `
                }
            </style>

            <div className="flex justify-center lg:p-0 p-4  bg-[#14202E]">
                <div className="container-xl lg:py-20 py-10 flex flex-col gap-4">
                    <div className="lg:grid lg:grid-cols-2 flex flex-col gap-5">
                        <div>
                            <p className="lg:text-6xl font-bold text-3xl text-[#C1910F]" data-aos="fade-right">
                                About Nypunya
                            </p>
                        </div>
                        <div className="flex flex-row lg:justify-end items-center" data-aos="fade-left">
                            <CountUp
                                start={0}
                                end={10}
                                duration={2.75}
                                suffix="+"
                                className='lg:text-6xl text-4xl text-bold text-[#C1910F]'
                            />
                            <p className='text-[#C1910F] text-lg font-semibold pl-5' data-aos="fade-left">
                                YEARS OF <br /> EXPERIENCE
                            </p>
                        </div>
                    </div>
                    <hr className='w-full border-1 border-gray-300 ' />
                    <div className="lg:grid lg:grid-cols-12 flex flex-col gap-5 mt-6">
                        <div className='col-span-7'>
                            <img src='/about/about-img.jpg' alt='' data-aos="flip-right" className='h-full object-cover' />
                        </div>
                        <div className='flex flex-col gap-4 col-span-5' data-aos="fade-left">
                            <p className="lg:text-2xl font-semibold text-rblue">
                            </p>
                            <p className="lg:text-xl font-semibold text-[#C1910F]">
                                What it takes to offer YOU the best Dermatology and Plastic Surgery Services?
                            </p>

                            <p className='text-[#C1910F]'>
                                Nypunya means ‘Expertise’ in Sanskrit. Our Doctors are Experts in the true sense. After training in the most prestigious medical institutes , gaining an immense wealth of clinical experience and earning many academic laurels. Our doctors have more than a decade of experience in clinical practice. Experience matters! They have performed a wide variety of aesthetic surgical and nonsurgical procedures and NYPUNYA boasts of thousands of happy and satisfied patients. They believe in constantly updating themselves with the latest techniques and cutting edge technologies and refining their skills.
                            </p>
                            <p className='text-[#C1910F]'>
                                Services and facilities at NYPUNYA are world class and comprehensive. The unique feature is the entire spectrum of Dermatology and plastic surgery services are provided under one roof. This makes NYPUNYA a one stop solution to fulfill all your aesthetic goals.
                                The best of Aesthetics, Dermatology and plastic surgery services to enhance the sense of well being and be the Best version of yourself!
                            </p>
                            <div className=" cursor-scale small">
                                <Link to="/about-us" data-aos="fade-right"
                                    class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#C1910F] rounded-3xl hover:bg-white group hover:shadow-md hover:shadow-[#C1910F] shadow-sm shadow-black "
                                >
                                    <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#14202E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-[#C1910F] font-bold">
                                        More About
                                    </span>
                                </Link>
                                {/* <Link to="/about-us">
                                    <p className="font-semibold">
                                        More About
                                    </p>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" justify-center flex bg-[#14202E] shadow-xl">
                <div className="container-xl lg:py-20 py-10">
                    <div className="">
                        <Slider {...settings}>
                            {services.flatMap(service =>
                                service.links.map(link => (
                                    <div key={link.route} className="slick-slide" >
                                        <div className="grid-item">
                                            <img src="/about/star.png" className="star-img" alt="Star" />
                                            <NavLink to={link.route} className="scroll-text lg:text-6xl text-3xl font-bold text-[#C1910F]">
                                                {link.name}
                                            </NavLink>
                                        </div>
                                    </div>
                                ))
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMedical
