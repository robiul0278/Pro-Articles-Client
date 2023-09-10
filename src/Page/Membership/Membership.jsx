import { HiXMark, HiOutlineCheck } from "react-icons/hi2";
import StripePayment from "../Payment/StripePayment";

const Membership = () => {
    return (
        <div className="mb-10">
            <h1 className="text-center text-5xl mt-8 mb-4 font-bold">Plan and Pricing</h1>
            <p className="text-center text-xl">Shopify offers competitive rates and pricing plans to help you find a plan that fits the needs and budget of your business.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-10 md:px-40 lg:px-40">

                <div className="card   bg-base-100 shadow-xl">
                    {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                    <div className="card-body">
                        <h2 className="card-title">Free</h2>
                        <p>A person who don not pay price </p>
                        <div className="mt-4">
                            <p className="text-5xl font-bold">Free </p>
                            <ul className="text-base-content mt-8">
                                <li className=""><HiOutlineCheck className="inline"></HiOutlineCheck> Read Only</li>
                                <li className=""><HiXMark className="inline"></HiXMark> No
                                    ads</li>
                                <li className=""><HiXMark className="inline"></HiXMark> No
                                    Write</li>
                                <li className=""><HiXMark className="inline"></HiXMark> Access Dashboard</li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card   bg-base-100 shadow-xl">
                    {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                    <div className="card-body">
                        <h2 className="card-title">Premium</h2>
                        <p>A person who charges a fee in order</p>
                        <div className="mt-8">
                            <p className="text-5xl font-bold">$100/ <span className="text-xl">Year</span></p>
                            <ul className="text-base-content mt-8">
                                <li className=""><HiOutlineCheck className="inline"></HiOutlineCheck> Read and Write</li>
                                <li className=""><HiOutlineCheck className="inline"></HiOutlineCheck> Allow Dashboard</li>
                                <li className=""><HiOutlineCheck className="inline"></HiOutlineCheck> No ad </li>
                            </ul>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-outline btn-success">Pay</button>
                    </div>
                </div>

            </div>

            {/* modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Payment Here...</h3>
                    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
                    <div className="py-4">

                    <StripePayment></StripePayment>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Membership;