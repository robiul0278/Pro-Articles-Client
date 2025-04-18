import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAdmin from '../../../Hooks/useAdmin';
import keyboard from '../../../assets/keyboard2.json';
import AnimationPlayer from '../../../Components/Share/AnimationPlayer';

const WriteRole = () => {
    const [isAdmin] = useAdmin();
    const { user } = useSelector((state) => state.auth);

    const isAuthorized = isAdmin?.role && user === "admin";

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 bg-white p-5 items-center">
            <div className="md:pl-16">
                <h1 className="text-3xl font-semibold">You can also write in ProWriter</h1>
                <h4 className="text-xl my-4">Write quality content and earn from ProWriter!</h4>

                <div className="flex flex-wrap gap-4 text-sm">
                    <p>
                        <FontAwesomeIcon icon={faCircleCheck} className="mr-1 text-blue-600" />
                        Compatible content
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCircleCheck} className="mr-1 text-blue-600" />
                        1200+ words
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-3 text-sm">
                    <p>
                        <FontAwesomeIcon icon={faCircleXmark} className="mr-1 text-red-500" />
                        No copy-paste posts
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faCircleXmark} className="mr-1 text-red-500" />
                        No spelling mistakes
                    </p>
                </div>

                {isAuthorized ? (
                    <Link
                        to="/dashboard/write"
                        data-testid="write-article-button"
                        className="btn btn-error btn-sm mt-5 text-white font-semibold rounded transition duration-200 hover:opacity-90"
                    >
                        Write Article
                    </Link>
                ) : (
                    <button
                        disabled
                        title="Login required to write articles"
                        data-testid="write-article-button-disabled"
                        className="mt-5 px-4 py-2 text-white font-semibold rounded bg-blue-500 opacity-60 cursor-not-allowed"
                    >
                        Write Article
                    </button>
                )}

            </div>

            <div>
                <AnimationPlayer animationData={keyboard} />
            </div>
        </section>
    );
};

export default WriteRole;
