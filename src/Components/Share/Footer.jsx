import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1a1c2d] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <Link to="/" className="inline-block w-52 mb-4">
            <img src="https://i.ibb.co/cD4K19h/FLogo.png" alt="ProWriter Logo" />
          </Link>
          <p className="text-sm text-gray-400">
            ProWriter is a platform for article writing. Our aim is to spread knowledge
            and empower readers with meaningful content.
          </p>
        </div>

        {/* Popular Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Popular</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:underline">Technology</Link></li>
            <li><Link to="#" className="hover:underline">Social Media</Link></li>
            <li><Link to="#" className="hover:underline">Travel</Link></li>
            <li><Link to="#" className="hover:underline">Writing</Link></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Other</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="#" className="hover:underline">About Us</Link></li>
            <li><Link to="#" className="hover:underline">Contact</Link></li>
            <li><Link to="#" className="hover:underline">Write</Link></li>
            <li><Link to="#" className="hover:underline">Membership</Link></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Subscribe</h2>
          <p className="text-sm text-gray-400 mb-4">
            Get the latest posts and updates from ProWriter delivered to your inbox.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-white text-black"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          <div className="flex space-x-4">
            <img className="w-5" src="https://i.ibb.co/4gz4FK0/facebook-733547.png" alt="Facebook" />
            <img className="w-5" src="https://i.ibb.co/PFXXH0W/twitter-3256013.png" alt="Twitter" />
            <img className="w-5" src="https://i.ibb.co/gDbPffB/pinterest-3536558.png" alt="Pinterest" />
            <img className="w-5" src="https://i.ibb.co/mvY6sRb/youtube-3838026.png" alt="YouTube" />
            <img className="w-5" src="https://i.ibb.co/17BrLWg/link.png" alt="LinkedIn" />
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <Link to="#" className="hover:underline">Terms of Use</Link>
            <Link to="#" className="hover:underline">Privacy Policy</Link>
            <Link to="#" className="hover:underline">Cookie Policy</Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} ProWriter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
