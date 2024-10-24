import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import { FaFacebook, FaTwitter, FaWhatsapp, FaDownload, FaShareAlt, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import necessary icons

const BreastGallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
    const [activeImageIndex, setActiveImageIndex] = useState(0); // Currently active image index
    const [showShareIcons, setShowShareIcons] = useState(false); // Toggle to show/hide social media icons

    // Array of images
    const images = [
        'https://via.placeholder.com/600x400',
        'https://via.placeholder.com/600x400',
        'https://via.placeholder.com/600x400',
    ];

    // Function to open the modal and set the active image index
    const handleImageClick = (index) => {
        setActiveImageIndex(index);
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Navigate to the previous image
    const handlePrev = () => {
        setActiveImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Navigate to the next image
    const handleNext = () => {
        setActiveImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Share URL and current image
    const shareUrl = window.location.href; // Current page URL to share
    const currentImage = images[activeImageIndex];

    return (
        <>
            <style>
                {`
                    .carousel .thumbs .selected {
                        border: 2px solid yellow;  /* Add a border to highlight the active thumbnail */
                        background-color: yellow;  /* Set yellow background for the active thumbnail */
                    }

                    /* Modal styling */
                    .modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black background */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        z-index: 999;
                    }

                    .modal-content {
                        background-color: white;
                        padding: 20px;
                        border-radius: 8px;
                        text-align: center;
                        max-width: 90%;
                        max-height: 90%;
                        position: relative;
                    }

                    .modal-content img {
                        max-width: 100%;
                        max-height: 80vh; /* Ensure image fits within the viewport */
                    }

                    .close-btn, .nav-btn, .download-btn, .share-btn {
                        background-color: yellow;
                        border: none;
                        padding: 10px;
                        cursor: pointer;
                        font-weight: bold;
                        border-radius: 5px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .close-btn {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        background-color: transparent;
                        color: black;
                        font-size: 24px;
                    }

                    .modal-nav {
                        position: absolute;
                        top: 50%;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        transform: translateY(-50%);
                        color: white;
                    }

                    .nav-btn {
                        background-color: transparent;
                        font-size: 30px;
                        color: yellow;
                    }

                    /* Share Buttons */
                    .share-btns {
                        display: flex;
                        justify-content: space-around;
                        margin-top: 20px;
                    }

                    /* Share Icons appear when hovered */
                    .share-container:hover .social-icons {
                        display: flex;
                    }

                    .social-icons {
                        display: ${showShareIcons ? 'flex' : 'none'};
                        justify-content: space-around;
                        margin-top: 10px;
                    }

                    .social-icons a {
                        margin: 0 10px;
                        color: black;
                        font-size: 24px;
                    }
                `}
            </style>

            <div className='flex flex-col justify-center items-center'>
                <h2 className="lg:text-4xl text-2xl text-gyellow pb-5 mt-10">Gallery</h2>

                <div className='lg:w-[600px] w-full overflow-hidden'>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={true}
                        showStatus={false}
                        onClickItem={handleImageClick} // Pass only index to handle click
                    >
                        {images.map((src, index) => (
                            <div key={index} className='cursor-zoom-in	'>
                                <img src={src} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>

                    {/* Modal */}
                    {isModalOpen && (
                        <div className="modal-overlay" onClick={closeModal}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <img src={currentImage} alt="Active Modal" />

                                {/* Navigation Buttons */}
                                <div className="modal-nav">
                                    <button className="nav-btn" onClick={handlePrev}>
                                        <FaArrowLeft />
                                    </button>
                                    <button className="nav-btn" onClick={handleNext}>
                                        <FaArrowRight />
                                    </button>
                                </div>

                                {/* Download Button */}
                                <button className="download-btn">
                                    <a href={currentImage} download>
                                        <FaDownload /> Download
                                    </a>
                                </button>

                                {/* Share Button */}
                                <div className="share-container">
                                    <button className="share-btn" onClick={() => setShowShareIcons(!showShareIcons)}>
                                        <FaShareAlt /> Share
                                    </button>

                                    {/* Social Icons (appear on hover) */}
                                    <div className="social-icons ">
                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                                            <FaFacebook />
                                        </a>
                                        <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=Check%20out%20this%20image`} target="_blank" rel="noopener noreferrer">
                                            <FaTwitter />
                                        </a>
                                        <a href={`https://api.whatsapp.com/send?text=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                                            <FaWhatsapp />
                                        </a>
                                    </div>
                                </div>

                                {/* Close Button */}
                                <button className="close-btn" onClick={closeModal}>
                                    <FaTimes />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default BreastGallery;
