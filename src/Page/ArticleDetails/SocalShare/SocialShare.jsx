import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';


const SocialShare = () => {

    const handleFacebookShare = () => {

        const facebookShareURL = `https://www.facebook.com/sharer.php/u=Github%3A%3A%20http%3A%2F%2Fgithub.com`;
        // https://www.facebook.com/sharer.php?u=[post-url]
        window.open(facebookShareURL, "popup", "width=500, height=500, left=500 top=300")

    }
    const handleLinkedinShare = () => {
        const linkedinShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2Fgithub.com`;
        // https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
        window.open(linkedinShareURL, "popup", "width=500, height=500, left=500 top=300")

    }
    const handleTwitterShare = () => {
        const twitterShareURL = `https://twitter.com/share?url=https://github.com/gias-uddin-swe`;
        // https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]


        window.open(twitterShareURL, "popup", "width=500, height=500, left=500 top=300")
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