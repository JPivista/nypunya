import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
    const { id } = useParams(); // Get the post ID from the URL
    console.log("Post ID:", id); // Log the ID
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://nypunyaaesthetics.com/wp-json/wp/v2/posts/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                const data = await response.json();
                console.log("Fetched Post Data:", data); // Log the fetched post data
                setPost(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPost();
        } else {
            setLoading(false); // Set loading to false if id is undefined
        }
    }, [id]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">Error: {error}</div>;
    if (!post) return <div className="text-center">No post found.</div>;

    return (
        <>
            <style>
                {`
                    p {
                        margin-bottom: 10px;
                    }
                `}
            </style>

            <div className="bg-rblue py-12">
                <div className="container mx-auto px-6 lg:px-12">
                    <h1 className="text-3xl font-bold mt-10 text-gyellow">{post.title.rendered}</h1>
                    <div
                        className="text-gyellow mb-4"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                    <p className="text-gray-500">Published on: {new Date(post.date).toLocaleDateString()}</p>
                </div>
            </div>
        </>
    );
};

export default SinglePost;
