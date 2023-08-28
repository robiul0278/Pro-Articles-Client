
const Footer = () => {
    return (
        <footer className="bg-white">

            <div className="hidden md:flex">
                <div className="footer p-10     text-base-content max-w-7xl mx-auto">
                    <div>
                        {/* <img className='rounded-full' style={{ height: '50px' }} src={footerLogo} alt="" /> */}
                        <p>Address: 123, Hello Summer Way,
                            <br />
                            Palmyra, VA 22233
                            <br />
                            Postal mail: P.O.Box 123, Palmyra, VA 22333</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Book</a>
                        <a className="link link-hover">Cricket</a>
                        <a className="link link-hover">Volleyball</a>
                        <a className="link link-hover">Badminton</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
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
            <div className="border-b-[3px]">

            </div>
            <div className="footer footer-center p-4 bg-[#EFF6FF]  text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by summer camp</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;