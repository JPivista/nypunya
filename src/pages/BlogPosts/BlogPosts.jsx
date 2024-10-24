import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visiblePosts, setVisiblePosts] = useState(5); // Initially show 5 posts on mobile
    const [images, setImages] = useState({}); // Store featured images
    const dummyImage = 'https://via.placeholder.com/300'; // Replace with your dummy image URL

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://nypunyaaesthetics.com/wp-json/wp/v2/posts');

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();
                setPosts(data);
                fetchFeaturedImages(data); // Fetch featured images after fetching posts
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Function to fetch featured images
    const fetchFeaturedImages = async (posts) => {
        const imagePromises = posts.map(async (post) => {
            if (post.featured_media) {
                const imageResponse = await fetch(`https://nypunyaaesthetics.com/wp-json/wp/v2/media/${post.featured_media}`);
                if (imageResponse.ok) {
                    const imageData = await imageResponse.json();
                    return { id: post.id, url: imageData.source_url };
                }
            }
            return { id: post.id, url: null }; // No featured image
        });

        const imagesData = await Promise.all(imagePromises);
        const imagesMap = {};
        imagesData.forEach(({ id, url }) => {
            imagesMap[id] = url;
        });
        setImages(imagesMap);
    };

    const handleLoadMore = () => {
        setVisiblePosts((prevVisible) => prevVisible + 3); // Load 3 more posts
    };

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    return (
        <div className="bg-rblue py-12">
            <div className="container mx-auto px-6 lg:px-12">
                <h1 className="lg:text-5xl text-2xl font-semibold mb-4 mt-14 text-gyellow text-center">Blog Posts</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {posts.slice(0, visiblePosts).map((post) => (
                        <div
                            key={post.id}
                            className="pb-4 p-4 rounded transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-700"
                        >
                            {/* Image section */}
                            <div className="h-56 overflow-hidden">
                                {images[post.id] && images[post.id] !== null ? (
                                    <img
                                        src={images[post.id]}
                                        alt={post.title.rendered}
                                        className="w-full h-full object-cover" // Use object-cover for consistent sizing
                                    />
                                ) : (
                                    <img
                                        src={dummyImage}
                                        alt="Dummy"
                                        className="w-full h-full object-cover" // Use object-cover for consistent sizing
                                    />
                                )}
                            </div>
                            {/* Title section */}
                            <Link
                                to={`/blog/${post.id}`}
                                className="text-gyellow hover:text-white transition-colors duration-200"
                            >
                                <h3 className="text-xl font-bold line-clamp-2 mt-2 h-16 overflow-hidden" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            </Link>
                            {/* Excerpt section */}
                            <div className="text-gyellow h-36 overflow-hidden" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                            {/* Read More button */}
                            <div className='mt-4'>
                                <Link
                                    to={`/blog/${post.id}`}
                                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200 hover:bg-white hover:text-blue-600 hover:shadow-md hover:shadow-blue-600"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Load More Button */}
                {visiblePosts < posts.length && (
                    <div className="text-center mt-6">
                        <button
                            onClick={handleLoadMore}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition-colors duration-200"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPosts;
