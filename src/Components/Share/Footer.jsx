import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="bg-[#1a1c2d] text-white p-5">
            <div>
                <footer className="footer py-5 max-w-7xl mx-auto flex flex-col lg:flex-row md:flex-row">
                    <aside className="basis-2/5">
                        <h1 className="text-3xl font-semibold">About Us</h1>

                        <Link to="/" className="w-52 text-error my-2 font-bold text-3xl"><img src="https://i.ibb.co/cD4K19h/FLogo.png" alt="" /></Link>
                        <p>ProWriter is a article writing platform. <br /> Its aim is to spread the light of the knowledge among all.</p>
                    </aside>
                    {/* <nav className="hidden lg:flex"></nav> */}
                    <nav className="basis-1/5">
                        <header className="footer-title">Popular</header>
                        <a className="link link-hover">Technology</a>
                        <a className="link link-hover">Social Media</a>
                        <a className="link link-hover">Travel</a>
                        <a className="link link-hover">Writing</a>
                    </nav>
                    <nav className="basis-1/5">
                        <header className="footer-title">Other</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Write</a>
                        <a className="link link-hover">Membership</a>
                    </nav>
                    <nav className="basis-1/5">
                        <form>
                            <header className="footer-title">subscribe</header>
                            <a className="link link-hover">Subscribe to get new posts and important  updates from ProWriter in your email.</a>
                            <fieldset className="form-control w-80">
                                <label className="label">
                                    <span className="label-text text-white">Enter your email address</span>
                                </label>
                                <div className="relative">
                                    <input  type="text" placeholder="username@site.com" className="input input-bordered text-black w-full pr-16" />
                                    <button className="btn text-white btn-error absolute top-0 right-0 rounded-l-none">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </nav>
                </footer>
            </div>
            <hr />
            <section className="footer pt-3 max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row justify-between">
                <div className="flex space-x-1">
                    <img className="w-5" src="https://i.ibb.co/4gz4FK0/facebook-733547.png" alt="facebook" />
                    <img className="w-5" src="https://i.ibb.co/PFXXH0W/twitter-3256013.png" alt="twitter" />
                    <img className="w-5" src="https://i.ibb.co/gDbPffB/pinterest-3536558.png" alt="" />
                    <img className="w-5" src="https://i.ibb.co/mvY6sRb/youtube-3838026.png" alt="youtube" />
                    <img className="w-5" src="https://i.ibb.co/17BrLWg/link.png" alt="link" />
                </div>
                <div className="flex md:space-x-14">
                    <h1>Terms of use</h1>
                    <h1>Privacy policy</h1>
                    <h1>Cookie policy</h1>
                </div>
                <div>
                <h1 className="text-center">Copyright © 2023 - All right reserved by ProWriter</h1>
                </div>
            </section>
        </section>
    );
};

export default Footer;