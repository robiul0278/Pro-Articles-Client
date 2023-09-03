
const Footer = () => {
    return (
        <footer className="bg-[#1a1c2d]">

            <div className="hidden md:flex">
                <div className="footer p-10 grid grid-cols-4 text-white max-w-7xl mx-auto">
                    <div>
                        <h1 className="text-2xl">আমাদের সম্পর্কে</h1>
                        <h1 className="text-3xl">ProWriter</h1>
                        <img className='rounded-full' style={{ height: '50px' }} src="" alt="" />
                        <p>স্টাডিকরো একটি বাংলা ব্লগিং প্লাটফর্ম। সবার মাঝে শিক্ষার আলো ছড়িয়ে দেওয়াই যার লক্ষ্য।</p>
                    </div>
                    <div></div>
                    <div>
                        <span className="footer-title">জনপ্রিয়</span>
                        <a className="link link-hover">Book</a>
                        <a className="link link-hover">Cricket</a>
                        <a className="link link-hover">Volleyball</a>
                        <a className="link link-hover">Badminton</a>
                    </div>
                    <div>
                        <span className="footer-title">অন্যান্য</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Contacts</span>
                        <a className="link link-hover">Office hours: 1:20am – 5:00pm</a>
                        <a className="link link-hover">Telephone: (123) 556-58-80</a>
                        <a className="link link-hover">Email: rafio@example.com</a>
                    </div>

                </div>
            </div>
            <div className="border-b-[1px]">

            </div>
            <div className="footer footer-center text-white p-4 bg-[#1a1c2d]">
                <div>
                    <p>Copyright © 2023 - All right reserved by summer camp</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;