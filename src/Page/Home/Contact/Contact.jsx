
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();


    //import.meta.env.VITE_SERVICE_ID
    const ServiceId = import.meta.env.VITE_SERVICE_ID
    const TemplateId = import.meta.env.VITE_TEMPLATE_ID
    const PublicKey = import.meta.env.VITE_PUBLIC_KEY
    console.log(PublicKey);

    const sendEmail = (e) => {
        e.preventDefault();

        const currentForm = form.current;
        console.log(currentForm);

        emailjs.sendForm(ServiceId, TemplateId, currentForm, PublicKey)
            .then((result) => {
                console.log('result are:', result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Email Sent Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                currentForm.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='py-20'>
                    <Helmet>
            <title>ProWriter | Contact Us</title>
            </Helmet>
            <div className='px-4 lg:px-0 max-w-7xl mx-auto'>
                {/* gap-5 */}
                <div className='grid grid-cols-1 md:grid-cols-2 item-center '>

                    <div className='mb-10' data-aos="fade-right">
                        <img className='w-[100%] h-auto' src="https://i.ibb.co/8x8DvSD/Email-campaign-amico.png" alt="" data-aos="zoom-in" />
                    </div>
                    {/* form */}
                    <div data-aos="fade-left">
                        <form ref={form} onSubmit={sendEmail} className='mt-10'>
                            <h1 className="text-5xl  text-center font-bold py-10">Contact Us</h1>

                            <div className="mb-6">
                                <label className="block font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="input input-bordered  w-full py-2 px-3"
                                    id="name"
                                    type="text"
                                    name="user_name"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block  font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="input input-bordered   w-full py-2 px-3"
                                    id="email"
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="border rounded w-full py-2 px-3"
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows={6}
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <input type="submit" value="Send"
                                    className="btn btn-error w-full text-white font-semibold mt-4"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;