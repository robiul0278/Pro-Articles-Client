import Lottie from 'react-lottie';
import keyboard from '../../../assets/keyboard2.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const WriteRole = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: keyboard,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white justify-center items-center">
        <div className='md:pl-16 p-5'>
            <h1 className='lg:text-3xl font-bold text-2xl md:text-3xl'>You can also write in ProWriter</h1>
            <h4 className='md:text-xl my-4'>Write quality content and earn from ProWriter! </h4>
            <div className='flex space-x-4'>
                <p ><FontAwesomeIcon className='mr-1' icon={faCircleCheck} style={{ color: "#1968f0", }} />Compatible content</p>
                <p><FontAwesomeIcon className='mr-1' icon={faCircleCheck} style={{ color: "#1968f0", }} />1200+ words</p>
            </div>
            <div className='flex space-x-4 mt-3'>
                <p><FontAwesomeIcon className='mr-1' icon={faCircleXmark} style={{ color: "#ef3f3f", }} />Copy posts are not acceptable</p>
                <p><FontAwesomeIcon className='mr-1' icon={faCircleXmark} style={{ color: "#ef3f3f", }} />Spelling mistakes are not acceptable</p>
            </div>
            <Link to='/dashboard/write'><button className="btn-sm btn-error mt-5 text-white font-semibold rounded">Write Article</button></Link>
        </div>
        <div className="w-full">
            <Lottie
                options={defaultOptions}
                className="w-full"
                style={{ maxWidth: '360px', height: 'auto' }}
            />
        </div>

    </section>
);
};

export default WriteRole;