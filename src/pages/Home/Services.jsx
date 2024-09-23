import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'; // Import the CSS for the carousel
import { ArrowUpRightCircleFill } from "react-bootstrap-icons";

const services = [
    { name: 'Breast Enhancement', route: '/services/plastic-surgery/breast-enhancement', image: '/servicee/srvce.png' },
    { name: 'Body Contouring & Abdomino Plasty', route: '/services/plastic-surgery/body-contouring', image: '/servicee/srvce2.png' },
    { name: 'Hair Transplant', route: '/services/plastic-surgery/hair-transplant', image: '/servicee/srvce3.png' },
    { name: 'Rhinoplasty', route: '/services/plastic-surgery/rhinoplasty', image: '/servicee/srvce4.png' },
    { name: 'Anti-Ageing', route: '/services/plastic-surgery/anti-ageing', image: '/servicee/srvce.png' },
    { name: 'Acne and Acne Scars', route: '/services/dermatology/acne-and-scars', image: '/servicee/srvce2.png' },
    { name: 'Laser Hair Removal', route: '/services/dermatology/laser-hair-removal', image: '/servicee/srvce3.png' },
    { name: 'Fillers and Botox', route: '/services/dermatology/fillers-and-botox', image: '/servicee/srvce4.png' },
    { name: 'Pigmentation Dark Circle', route: '/services/dermatology/pigmentation-dark-circle', image: '/servicee/srvce.png' }
];

const Services = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <style>
                {`
               .custom-gradient {
                    background-image: linear-gradient(0deg, rgba(0, 37, 111, 1) 0%, rgba(0, 37, 111, 0.8) 20%, rgba(0, 37, 111, 0) 50%, rgba(0, 37, 111, 0) 100%);
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    z-index: 10;
                    transition: opacity 0.3s ease;
                    opacity: 0.7;
                }

                .hover-gradient {
                    background-image: linear-gradient(0deg, rgba(20, 32, 46, 1) 0%, rgba(20, 32, 46, 1) 20%, rgba(20, 32, 46, 0) 50%, rgba(20, 32, 46, 0) 100%);
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    z-index: 20;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .item-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 16px;
                    text-align: center;
                    color: white;
                    z-index: 30;
                }

                /* Continuous glass reflection effect, hidden by default */
                .glass-reflection {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 150%;
                    height: 150%;
                    background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2));
                    transform: translate(-100%, -100%) rotate(45deg);
                    opacity: 0;
                    pointer-events: none;
                    z-index: 25;
                    transition: opacity 0.3s ease;
                    animation: glass-slide 3s infinite linear; /* Ensure the animation runs continuously */
                }

                /* Glass slide animation continuously moving from top-left to bottom-right */
                @keyframes glass-slide {
                    0% {
                        transform: translate(-100%, -100%) rotate(45deg);
                    }

                    40% {
                        transform: translate(40%, 40%) rotate(45deg);
                    }


                    80% {
                        transform: translate(80%, 80%) rotate(45deg);
                    }

                    100% {
                        transform: translate(100%, 100%) rotate(45deg);
                    }
                }

                /* Hover effects */
                .carousel-item:hover .custom-gradient {
                    opacity: 0.3;
                }
 
                .carousel-item:hover .hover-gradient {
                    opacity: 1;
                    background-color: rgba(0, 0, 0, 0.3); /* Black background with reduced opacity */
                    color:#F0B609;
                }

                .carousel-item:hover .glass-reflection {
                    opacity: 1; /* Show the glass effect on hover */
                }

                `}
            </style>
            <div className="flex justify-center lg:p-0 p-4 bg-rblue">
                <div className="container-xl lg:py-20 flex flex-col gap-8">
                    <div className="lg:grid lg:grid-cols-3 gap-8 items-center flex flex-col">
                        <p className='lg:text-6xl text-4xl text-bold text-[#F0B609]' data-aos="flip-right">
                            PROVIDES
                            BEST SERVICE
                        </p>

                        <p className="text-[#F0B609] text-[18px]" data-aos="fade-up">
                            Enthusiastically orchestrate competitive e-services whereas superior Conveniently disintermediate innovative solutions through impactfuls tailers without seamless markets network.
                        </p>

                        <div className="  flex flex-col lg:items-center lg:justify-center">
                            <Link to="/services" data-aos="fade-right"
                                class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#F0B609] rounded-3xl hover:bg-white group hover:shadow-md hover:shadow-[#F0B609] shadow-sm shadow-white "
                            >
                                {/* <p className="font-semibold text-F0B609 bg-[#F0B609]">
                                    View All Services
                                </p> */}
                                <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#14202E] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-[#F0B609] font-bold">
                                    View All Services
                                </span>
                            </Link>
                        </div>
                    </div>
                    <hr className="w-full" />

                    <Carousel responsive={responsive} className="relative">
                        {services.map(link => (
                            <Link to={link.route}>
                                <div
                                    key={link.route}
                                    className="relative overflow-hidden rounded-lg mx-4 my-4 shadow-sm shadow-[#F0B609] carousel-item"
                                    style={{
                                        backgroundImage: `url(${link.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '350px',
                                    }}
                                    data-aos="flip-left"
                                >
                                    <div className="custom-gradient"></div>
                                    <div className="glass-reflection"></div>
                                    <Link to={link.route}>
                                        <div className="item-content">
                                            <p className="text-lg font-semibold text-[#F0B609] group-hover:text-[#F0B609]" data-aos="fade-up">{link.name}</p>
                                        </div>
                                    </Link>
                                    <div className="absolute top-0 right-0 items-center p-4 justify-center group-hover:flex hidden">
                                        <ArrowUpRightCircleFill className="text-goldenyellow text-3xl" /> {/* Arrow icon */}
                                    </div>
                                    <div className="hover-gradient"></div>
                                </div>
                            </Link>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default Services;
