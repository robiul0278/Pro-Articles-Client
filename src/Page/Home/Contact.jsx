import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const ServiceId = import.meta.env.VITE_SERVICE_ID;
  const TemplateId = import.meta.env.VITE_TEMPLATE_ID;
  const PublicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    const currentForm = form.current;

    emailjs.sendForm(ServiceId, TemplateId, currentForm, PublicKey)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Email Sent Successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        currentForm.reset();
      }, (error) => {
        console.error(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Try again later!'
        });
      });
  };

  return (
    <div className="py-20 bg-gradient-to-br from-white via-indigo-50 to-white">
      <Helmet>
        <title>ProWriter | Contact Us</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div data-aos="fade-right">
            <img
              src="https://i.ibb.co/8x8DvSD/Email-campaign-amico.png"
              alt="Contact Illustration"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-aos="zoom-in"
            />
          </div>

          {/* Form */}
          <div data-aos="fade-left">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
                Get in Touch
              </h2>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
