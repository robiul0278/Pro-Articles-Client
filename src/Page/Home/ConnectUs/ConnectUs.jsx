import { useContext } from "react";
import { ThemContext } from "../../../Routes/ThemProvider";

const ConnectUs = () => {
    const [{ theme }] = useContext(ThemContext)
    return (
        <section className="bg-white p-5" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className="flex justify-center items-center p-5 bg-opacity-20 rounded-md bg-[#f77272]">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">Connect with us virtually</h1>
                    <p className="text-xl my-2">Stay connected with ProWriter from anywhere in the world</p>
                    <div className="flex justify-center items-center space-x-4">
                        <img className="w-8" src="https://i.ibb.co/4gz4FK0/facebook-733547.png" alt="facebook" />
                        <img className="w-8" src="https://i.ibb.co/PFXXH0W/twitter-3256013.png" alt="twitter" />
                        <img className="w-8" src="https://i.ibb.co/gDbPffB/pinterest-3536558.png" alt="" />
                        <img className="w-8" src="https://i.ibb.co/mvY6sRb/youtube-3838026.png" alt="youtube" />
                        <img className="w-8" src="https://i.ibb.co/17BrLWg/link.png" alt="link" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ConnectUs;