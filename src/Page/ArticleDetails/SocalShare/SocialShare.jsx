import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialShare = () => {
    const handleFacebookShare = () => {
        const facebookShareURL = `https://www.facebook.com/sharer.php/u=Github%3A%3A%20http%3A%2F%2Fgithub.com`;

        window.open(facebookShareURL, "popup")

    }
    const handleLinkedinShare = () => {
        const linkedinShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2Fgithub.com`;

        window.open(linkedinShareURL, "popup")

    }
    const handleTwitterShare = () => {
        const twitterShareURL = `https://twitter.com/share?url=https://github.com/gias-uddin-swe`;

        window.open(twitterShareURL, "popup")
    }
    return (
        <div className=''>
            <button onClick={() => handleTwitterShare()} className="share-button text-2xl mr-6"><FaTwitter></FaTwitter></button>
            <button onClick={() => handleFacebookShare()} className="share-button text-2xl mr-6"><FaFacebook></FaFacebook></button>
            <button onClick={() => handleLinkedinShare()} className="share-button text-2xl mr-6"><FaLinkedin></FaLinkedin></button>
        </div>
    );
};

export default SocialShare;