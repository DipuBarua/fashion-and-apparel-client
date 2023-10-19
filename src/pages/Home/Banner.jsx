
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/d6K1K2g/pexels-brett-sayles-5154326-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Fashion and Apparel</h1>
                    <p className="mb-5">Fashion encompasses the ever-evolving trends, styles, and aesthetics that people adopt, while apparel encompasses the actual garments and accessories that individuals wear to express themselves.</p>
                    <button className="btn btn-ghost border border-white">Get Shopping</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;