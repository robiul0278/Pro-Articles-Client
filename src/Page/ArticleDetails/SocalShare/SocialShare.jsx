import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialShare = () => {
    const handleFacebookShare = () => {
        const facebookShareURL = `https://developers.facebook.com/docs/plugins/`;

        window.open(facebookShareURL, "popup")

    }
    const handleLinkedinShare = () => {
        const linkedinShareURL = `https://example.com/page-to-share`;

        window.open(linkedinShareURL, "popup")

    }
    const handleTwitterShare = () => {
        const twitterShareURL = `https://example.com/page-to-share`;

        window.open(twitterShareURL, "popup")

    }
    return (
        <div>
            <button onClick={() => handleTwitterShare()} className="share-button text-2xl mr-6"><FaTwitter></FaTwitter></button>
            <button onClick={() => handleFacebookShare()} className="share-button text-2xl mr-6"><FaFacebook></FaFacebook></button>
            <button onClick={() => handleLinkedinShare()} className="share-button text-2xl mr-6"><FaLinkedin></FaLinkedin></button>
        </div>
    );
};

export default SocialShare;