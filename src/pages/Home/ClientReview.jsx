
const ClientReview = () => {
    return (
        <div>
            <p className=" text-5xl text-center font-bold bg-gray-300 py-10">What Clients Say About Us</p>

            <div className=" grid md:grid-cols-4 py-24 gap-7 bg-yellow-50">
                <div className="card  bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/HPgzGgk/pexels-daniel-xavier-1239291.jpg" alt="" /></figure>
                    <div className="card-body">
                        <p>Fashion is ever-evolving, with new trends emerging regularly. It reflects the cultural and societal shifts of the time, influencing the way people dress and express themselves.</p>
                        <div className="card-actions justify-end">
                            <p>- Dalia</p>
                        </div>
                    </div>
                </div>

                <div className="card  bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/wWHWxKB/pexels-royal-anwar-450214.jpg" alt="" /></figure>
                    <div className="card-body">
                        <p>Fashion is not just about following trends but also about showcasing one personal style. Your unique clothing choices can be a powerful form of self-expression.</p>
                        <div className="card-actions justify-end">
                            <p>- Janku</p>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/NNgYhtq/pexels-andrea-piacquadio-3771839.jpg" alt="" /></figure>
                    <div className="card-body">
                        <p>There is a growing awareness about the environmental impact of the fashion industry. Sustainable fashion practices, such as recycling and upcycling, are gaining importance to reduce waste and promote eco-friendly choices.</p>
                        <div className="card-actions justify-end">
                            <p>- Mr.Jon</p>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/TLc9FHJ/pexels-andrea-piacquadio-3837259.jpg" alt="" /></figure>
                    <div className="card-body">
                        <p>Fashion is a global industry that transcends borders. Styles and designs often blend and influence each other across cultures, resulting in a rich tapestry of fashion diversity worldwide</p>
                        <div className="card-actions justify-end">
                            <p>- Mathew</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;