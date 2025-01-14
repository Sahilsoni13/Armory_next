'use client'

import React, { useState } from 'react';

const PageShare = () => {
    const [pageUrl, setPageUrl] = useState<string>('https://templatestudio.ai/helo'); // Get current page URL

    // Function to share via the Web Share API
    const handleWebShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Check out this page!',
                    text: `Check out this page: ${pageUrl}`, // Treat the URL as part of the text
                    url: pageUrl, // Pass the URL to share
                });
                console.log('Page shared successfully!');
            } catch (error) {
                console.error('Error sharing page:', error);
            }
        } else {
            alert('Your browser does not support the Web Share API');
        }
    };

    // Generate social media share links
    const generateShareLinks = () => {
        return {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=Check out this page!`,
            linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=Check out this page!`,
        };
    };

    const socialLinks = generateShareLinks();

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold text-center mb-4">Share This Page</h1>

            {/* Web Share API Button */}
            <button
                onClick={handleWebShare}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300"
            >
                Share This Page
            </button>
        </div>
    );
};

export default PageShare;
