import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAdmin from '../../Hooks/useAdmin';
import keyboard from '../../assets/keyboard2.json';
import AnimationPlayer from '../../Components/Share/AnimationPlayer';

const WriteRole = () => {
    const [isAdmin] = useAdmin();
    const { user } = useSelector((state) => state.auth);

    const isAuthorized = isAdmin?.role && user === "admin";

    return (
        <section className="grid grid-cols-1 md:grid-cols-2  p-8 md:p-16">
            <div className="flex flex-col justify-center md:pr-10 space-y-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                        ✍️ Start Writing with <span className="text-rose-600">ProWriter</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Share your thoughts, write valuable content, and earn!
                    </p>
                </div>

                <div className="flex flex-col gap-4 text-sm text-gray-700">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <p className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
                            Compatible content
                        </p>
                        <p className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
                            1200+ words
                        </p>
                        <p className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCircleXmark} className="text-red-500" />
                            No copy-paste
                        </p>
                        <p className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCircleXmark} className="text-red-500" />
                            No spelling mistakes
                        </p>
                    </div>
                </div>

                {isAuthorized ? (
                    <Link
                        to="/dashboard/write"
                        className="inline-block w-max bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 text-sm font-semibold rounded-xl shadow-md hover:opacity-90 transition"
                        data-testid="write-article-button"
                    >
                        🚀 Write Article
                    </Link>
                ) : (
                    <button
                        disabled
                        title="Login required to write articles"
                        className="inline-block w-max bg-blue-400 text-white px-6 py-3 text-sm font-semibold rounded-xl opacity-60 cursor-not-allowed"
                        data-testid="write-article-button-disabled"
                    >
                        🔒 Write Article
                    </button>
                )}
            </div>

            <div className="mt-10 md:mt-0 flex justify-center items-center">
                <AnimationPlayer animationData={keyboard} />
            </div>
        </section>
    );
};

export default WriteRole;
