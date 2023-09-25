import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


const StripePayment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    // const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const price = 10;
    // const { user } = useAuth();
    const {user} = useSelector((state) => state.auth)
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        axios.post('https://premium-articles-platform-sever.vercel.app/create-payment-intent',{
            price:price
        }).then(res=>setClientSecret(res.data.clientSecret))
     }, [price])
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        console.log("card", card);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                name: user?.displayName,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                payment: 'paid',
            }
            console.log(payment);

            fetch('https://premium-articles-platform-sever.vercel.app/payments', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            // axiosSecure.post('/payments', payment)
                // .then(res => {
                //     console.log(res.data);
                //     if (res.data.insertedId) {
                //         Swal.fire({
                //             position: 'top-end',
                //             icon: 'success',
                //             title: 'Payment Successful',
                //             showConfirmButton: false,
                //             timer: 1500
                //           })
                //     }
                // })
                .then(res => res.json())
                        .then(data => {

                            // reset()
                            console.log(data)
                            toast.success("Payment successful!",{
                                position: "top-center",
                                theme: "light",
                                autoClose: 3000,
                              })
                          navigate(from, { replace: true });
                        });
        }
      
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
        <div className="border-dashed border-2 p-3" >
        <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
        </div>
                <div className="text-center">
                    <button className="btn btn-primary w-full  mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500"> Payment Successful!</p>}
        </div>
    );
};

export default StripePayment;