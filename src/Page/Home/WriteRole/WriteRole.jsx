import Lottie from 'react-lottie';
import keyboard from '../../../assets/keyboard2.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ThemContext } from '../../../Routes/ThemProvider';
import { Link,} from 'react-router-dom';
// import Swal from 'sweetalert2';
import useAdmin from '../../../Hooks/useAdmin';
import { useSelector } from 'react-redux';
const WriteRole = () => {
    const [isAdmin] = useAdmin();
    const {user} = useSelector((state) => state.auth)
    const [{ theme }] = useContext(ThemContext)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: keyboard,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    const writeLink = () => {
        if (isAdmin?.role && user === "admin") {
            return (
                <Link to="/dashboard/write">Write Article</Link>
            );
        } else {
            return (
                <Link to="/dashboard/write">Write Article</Link>
            );
        }
        // return null;
    };


    return (
        <section style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white justify-center p-5 items-center">
            <div className='md:pl-16'>
                <h1 className='text-3xl font-semibold'>You can also write in ProWriter</h1>
                <h4 className='text-xl my-4'>Write quality content and earn from ProWriter! </h4>
                <div className='flex space-x-4'>
                    <p ><FontAwesomeIcon className='mr-1' icon={faCircleCheck} style={{ color: "#1968f0", }} />Compatible content</p>
                    <p><FontAwesomeIcon className='mr-1' icon={faCircleCheck} style={{ color: "#1968f0", }} />1200+ words</p>
                </div>
                <div className='flex space-x-4 mt-3'>
                    <p><FontAwesomeIcon className='mr-1' icon={faCircleXmark} style={{ color: "#ef3f3f", }} />Copy posts are not acceptable</p>
                    <p><FontAwesomeIcon className='mr-1' icon={faCircleXmark} style={{ color: "#ef3f3f", }} />Spelling mistakes are not acceptable</p>
                </div>
                <Link className="btn-sm btn btn-error mt-5 text-white font-semibold rounded">{writeLink()}</Link>
            </div>
            <div>
                <Lottie
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
            </div>
        </section>
    );
};

export default WriteRole;