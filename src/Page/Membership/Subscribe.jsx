import Lottie from "react-lottie";
import subscribe from '../../../src/assets/member.json'
import { loadStripe } from "@stripe/stripe-js";
import StripePayment from "../Payment/StripePayment";
import { Elements } from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Subscribe = () => {
        // import.meta.env.VITE_Payment_Gateway_Pk
        const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: subscribe,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <section className="card lg:card-side p-5  max-w-7xl mx-auto md:my-12">
            <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="hidden md:flex md:py-32">
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={350}
                />
            </div>
            <div className="md:py-32 py-10 font-serif">
                <span className="bg-slate-200 p-2">Limited Time</span>
                <h2 className="card-title md:text-5xl text-3xl font-bold my-3">Summer Sale. <br />
                    Subscribe for Unlimited Article Read Access - </h2>
                <p className="my-3"><del className="text-3xl">$29.99</del><span className="text-3xl"> $10</span><sub className="font-bold">for life time</sub></p> 
                <p className="font-bold text-xl">Your Subscription Includes:</p>
                <ul className="text-xl font-sans">
                    <li><FontAwesomeIcon icon={faCheck}/> Life time access!</li>
                    <li><FontAwesomeIcon icon={faCheck}/> Unlimited access to prowriter.com</li>
                    <li><FontAwesomeIcon icon={faCheck}/> Premium article access anywhere in our website!</li>
                    <li><FontAwesomeIcon icon={faCheck}/> Narrated articles to listen on the go, and more</li>
                </ul>
                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn mt-4 btn-wide btn-error text-white font-sans">Subscribe</button>
            </div>

            <dialog id="my_modal_1" className="modal ">
            <div className="modal-box">
            <div className="flex items-center flex-col">
                    <img className="w-40" src="https://i.ibb.co/Vm1cG6Q/stripe.png" alt="Stripe" />
                </div>
                <div>
                <div className="py-4">
                        <Elements stripe={stripePromise}>
                            <StripePayment></StripePayment>
                        </Elements>

                        {/* <StripePayment></StripePayment> */}
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">X</button>
                        </form>
                    </div>
                </div>
            </div>
            </dialog>
            </div>
        </section> 
    );
};

export default Subscribe;