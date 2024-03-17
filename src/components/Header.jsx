import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="hero">
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">Immerse yourself in a world of flavors as you discover new ingredients, techniques, and cuisines from around the globe. From traditional French cuisine to exotic Asian dishes, our diverse range of classes ensures there's something for everyone.</p>
                        <div>
                            <button class="btn text-[#FFF] btn-error">Explore Now</button>
                            <button class="btn text-[#FFF] btn-outline btn-error">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;