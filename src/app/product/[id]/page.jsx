"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductDetails = () => {
    const { id } = useParams(); // Extract product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error('Failed to fetch product details:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchProductDetails();
    }, [id]);

    if (loading) return <p>Loading...</p>;

    if (!product) return <p>Product not found</p>;

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="flex font-sans">
                <div className="flex-none w-48 relative">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-contain"
                        loading="lazy"
                    />
                </div>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-xl font-semibold text-gray-900">
                            {product.title}
                        </h1>
                        <div className="text-lg font-semibold text-gray-900">
                            ${product.price.toFixed(2)}
                        </div>
                        <div className="w-full flex-none text-sm font-medium text-gray-700 mt-2">
                            {product.category?.name || 'Category Unavailable'}
                        </div>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                        <div className="space-x-2 flex text-sm">
                            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <label key={size}>
                                    <input className="sr-only peer" name="size" type="radio" value={size} />
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                        {size}
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm font-medium">
                        <button className="h-10 px-6 font-semibold rounded-md border border-gray-800 text-gray-900" type="button">
                            Add to cart
                        </button>
                        <button
                            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
                            type="button"
                            aria-label="Favorites"
                        >
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                />
                            </svg>
                        </button>
                    </div>
                    <p className="text-sm text-gray-700">Free shipping</p>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;
