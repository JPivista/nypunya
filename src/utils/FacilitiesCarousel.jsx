// FacilitiesCarousel.js
import React from 'react';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FacilitiesCarousel = () => {
    // Array of image data
    const images = [
        { src: "/facilities-nypunya/facilities-1.jpg", alt: "Facility 1" },
        { src: "/facilities-nypunya/facilities-2.jpg", alt: "Facility 2" },
        { src: "/facilities-nypunya/facilities-3.jpg", alt: "Facility 3" },
        // Add more images as needed
    ];

    return (
        <div className="container mx-auto py-2">
            <MultiCarousel
                responsive={{
                    superLarge: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
                    desktop: { breakpoint: { max: 1024, min: 464 }, items: 1 },
                    tablet: { breakpoint: { max: 464, min: 0 }, items: 1 },
                }}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                transitionDuration={500}
                showDots={true}
                dotListClass="custom-dot-list"
                className=""
            >
                {/* Map through images array to dynamically render carousel items */}
                {images.map((image, index) => (
                    <div key={index} className="p-4">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[70vh] object-cover"
                        />
                    </div>
                ))}
            </MultiCarousel>
        </div>
    );
};

export default FacilitiesCarousel;
