

const Membership = () => {
    return (
        <div className="mx-auto max-w-screen-xl">
            <h1 className="text-center text-5xl mt-8 mb-4 font-bold">Plan and Pricing</h1>
            <p className="text-center text-xl">Shopify offers competitive rates and pricing plans to help you find a plan that fits the needs and budget of your business.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 my-20">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Basic</h2>
                        <p>A person who charges a fee in order</p>
                        <div className="mt-8">
                            <p className="text-5xl font-bold">$120/ <span className="text-xl">Year</span></p>
                            <ul className="text-base-content mt-8">
                                <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">24 project</span></li>
                                <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">Realtime resporting</span></li>
                                <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">Chat Support</span></li>
                                <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">Read and write</span></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Premium</h2>
                        <p>A person who charges a fee in order</p>
                        <div className="card-actions ">
                            <div className="mt-8">
                                <p className="text-5xl font-bold">$430/ <span className="text-xl">Year</span></p>
                                <ul className="text-base-content mt-8">
                                    <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">24 project</span></li>
                                    <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">Realtime resporting</span></li>
                                    <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">Chat Support</span></li>
                                    <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">Read and write</span></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Enterprise</h2>
                        <p>A person who charges a fee in order</p>
                        <div className="card-actions ">
                            <div className="mt-8">
                                <p className="text-5xl font-bold">$350/ <span className="text-xl">Year</span></p>
                                <ul className="text-base-content mt-8">
                                    <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">24 project</span></li>
                                    <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">Realtime resporting</span></li>
                                    <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">Chat Support</span></li>
                                    <li className=""> <input type="checkbox" className="checkbox checkbox-primary" /><span className=" ml-5">Read and write</span></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Membership;