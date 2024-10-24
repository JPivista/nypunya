import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div>
            {/* Common Banner Image */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="/contact-us-banner.jpg"
                    alt="Contact Us Banner"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-white text-center">
                    <div>
                        <h1 className="lg:text-6xl text-3xl font-bold">Contact Us</h1>
                    </div>
                </div>
            </div>

            {/* Container for Form and Map */}
            <div className="bg-rblue py-12">
                <div className="container mx-auto px-6 lg:px-12">

                    <h2 className="lg:text-4xl text-2xl font-semibold text-center text-gyellow mb-4">Get in touch</h2>
                    <p className="text-lg text-center mb-8 text-gyellow">For better services contact us today</p>
                    {/* Grid Layout for Form and Map */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Contact Form Section */}
                        <div className="p-6 rounded-lg shadow-sm shadow-[#F0B609]">
                            <div className="flex flex-col items-center py-12">
                                <form className="w-full space-y-4">
                                    <div>
                                        {/* <label htmlFor="name" className="block text-lg font-medium text-gray-700">YOUR NAME*</label> */}
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder='YOUR NAME'
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        />
                                    </div>
                                    <div>
                                        {/* <label htmlFor="email" className="block text-lg font-medium text-gray-700">EMAIL ADDRESS*</label> */}
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder='EMAIL ADDRESS'
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        />
                                    </div>
                                    <div>
                                        {/* <label htmlFor="phone" className="block text-lg font-medium text-gray-700">PHONE*</label> */}
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder='PHONE'
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        />
                                    </div>
                                    <div>
                                        {/* <label htmlFor="message" className="block text-lg font-medium text-gray-700">MESSAGE*</label> */}
                                        <textarea
                                            id="message"
                                            rows="4"
                                            placeholder='MESSAGE'
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Google Maps Section */}
                        <div className="">
                            {/* <h2 className="text-3xl font-semibold text-center mb-4">Our Location</h2> */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.738812929176!2d77.58642!3d12.916114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159f89eb734f%3A0xc159ff3d3c8abec4!2sNypunya%20Aesthetic%20Clinic%20%7C%20Best%20Dermatology%20and%20Cosmetic%20Plastic%20Surgeon%20in%20Bengaluru!5e0!3m2!1sen!2sin!4v1729746481172!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-lg"
                            ></iframe>
                        </div>
                        <div className='text-gyellow'>
                            <p className="mt-6 text-lg">
                                We’ll do our best to get back to you as soon as possible.
                            </p>

                            <p className="mt-2 text-lg">
                                For any queries please contact: <Link to="tel:9380902110"><strong>+91-9380902110</strong></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
